package com.reparty.app.core;

import com.reparty.app.utils.CommonUtils;
import com.reparty.services.DriverService;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.ClassRule;
import org.junit.Rule;
import org.junit.rules.ExternalResource;
import org.junit.rules.TestRule;
import org.junit.rules.TestWatcher;
import org.junit.runner.Description;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

public class WebDriverBase {

  private static final String className = CommonUtils.getCallingClassName();
  private static final Logger logger = LogManager.getLogger(className);

  public static DriverService driverService;
  public static WebDriver driver;

  // filepath is ...371Team4/target/classes/../../screenshots/
  protected final String screenshotsPath = this.getClass().getProtectionDomain().getCodeSource().getLocation().getPath() + "../../screenshots/";


  @ClassRule
  public static ExternalResource resource = new ExternalResource() {
    @Override
    protected void before() throws Throwable {
      driverService = new DriverService();
      driver = driverService.getChromeDriver();
    };

    @Override
    protected void after() {
      driverService.releaseWebDriver();
    };
  };

  @Rule
  public final TestRule watchman = new TestWatcher() {
    @Override
    protected void failed(Throwable e, Description description) {
      logger.traceEntry();

      String className = description.getTestClass().getSimpleName();
      String methodName = description.getMethodName();

      Capabilities capabilities = ((RemoteWebDriver) driver).getCapabilities();
      String os = System.getProperty("os.name").replaceAll(" ", "-");
      String browser = capabilities.getBrowserName().toLowerCase();
      String v = capabilities.getVersion().toString();
      String fileName = os + "-" + browser + "-" + v + "_" + className + "." + methodName + ".png";

      try {
        File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        File dir = new File(screenshotsPath);
        if (!dir.exists()) dir.mkdirs();
        File dest = new File(screenshotsPath + fileName);

        Files.copy(src.toPath(), dest.toPath(), StandardCopyOption.REPLACE_EXISTING);
      } catch (IOException ioe) {
          throw new RuntimeException(ioe);
      }
      logger.traceExit();
    }
  };
}
