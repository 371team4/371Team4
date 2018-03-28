package com.reparty.app.core;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;

import com.reparty.app.utils.CommonUtils;
import com.reparty.services.DriverService;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExternalResource;
import org.junit.rules.MethodRule;
import org.junit.rules.RuleChain;
import org.junit.rules.TestRule;
import org.junit.rules.TestWatcher;
import org.junit.runner.Description;
import org.junit.runners.model.FrameworkMethod;
import org.junit.runners.model.Statement;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

public class WebDriverBase {

  private static final String className = CommonUtils.getCallingClassName();
  private static final Logger logger = LogManager.getLogger(className);

  // the webdriver and the service are there for the lifetime of this class
  public static DriverService driverService;
  public static WebDriver webDriver;

  private static Description description = null;

  public WebDriverBase() { }

  public ExternalResource resource = new ExternalResource() {
    // setup webdriver before running a class of tests
    @Override
    protected void before() {
      driverService = new DriverService();
      // this will get executed before the each test case
      webDriver = driverService.getChromeDriver();
    };

    // teardown webdriver after running a class of tests
    @Override
    protected void after() {
      driverService.stopService();
    };
  };

  public final TestRule watchman = new TestWatcher() {
    @Override
    // remember the description of the current test case
    protected void starting(Description description) {
      logger.traceEntry();
      setDescription(description);
      logger.traceExit();
    }
  };

  @Rule
  public ScreenshotTestRule screenshotTestRule = new ScreenshotTestRule();

  public class ScreenshotTestRule implements MethodRule {
    public Statement apply(final Statement base, final FrameworkMethod method, Object target) {
      return new Statement() {
        @Override
        public void evaluate() throws Throwable {
          if (method.getMethod().isAnnotationPresent(Test.class)) {
            try {
              base.evaluate();
            } catch (Throwable t) {
              captureScreenshot();
              throw t; // rethrow to allow the failure to be reported to JUnit
            }
          } else {
            base.evaluate();
          }
        }

        public void captureScreenshot() {
          logger.traceEntry();
          try {
            File src = ((TakesScreenshot) getWebDriver()).getScreenshotAs(OutputType.FILE);
            File dest = new File(getScreenshotDirectoryPath(), getScreenshotName(getDescription()));
            Files.copy(src.toPath(), dest.toPath(), StandardCopyOption.REPLACE_EXISTING);
          } catch (IOException ioe) {
            logger.catching(ioe);
          }
          logger.traceExit();
        }
      };
    }
  }

  @Rule
  public RuleChain chain = RuleChain.outerRule(resource).around(watchman);

  /**
   * @return the current instance of the running webDriver
   */
  protected final WebDriver getWebDriver() {
    return webDriver;
  }

  /**
   * @return the path string to where the screenshots will be stored
   */
  private final String getScreenshotDirectoryPath() {
    // filepath is ...371Team4/target/classes/../../screenshots/
    String ssDirPath = this.getClass().getProtectionDomain().getCodeSource().getLocation().getPath()
        .concat("../../screenshots/");
    File dir = new File(ssDirPath);
    if (!dir.exists()) {
      dir.mkdirs();
    }
    return dir.toPath().toString();
  }

  /**
   * @param Discription of running java method
   * @return String of screenshot file name
   */
  private String getScreenshotName(Description description) {
    String className = description.getTestClass().getSimpleName();
    String methodName = description.getMethodName();

    Capabilities capabilities = ((RemoteWebDriver) getWebDriver()).getCapabilities();
    String os = System.getProperty("os.name").replaceAll(" ", "-");
    String browser = capabilities.getBrowserName().toLowerCase();
    String v = capabilities.getVersion().toString();
    String fileName = String.format("%s-%s-%s_%s.%s().png", os, browser, v, className, methodName);
    return fileName;
  }

  /**
   * @return the description
   */
  public static Description getDescription() {
    return description;
  }

  /**
   * @param description the description to set
   */
  public static void setDescription(Description description) {
    WebDriverBase.description = description;
  }
}
