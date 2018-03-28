package com.reparty.services;

import java.io.File;
import java.io.IOException;

import com.reparty.app.utils.CommonUtils;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;

/**
 * DriverService for Chrome WebDriver
 */
public class DriverService {

  private static final String className = CommonUtils.getCallingClassName();
  private static final Logger logger = LogManager.getLogger(className);

  // remember the chrome service, chrome options, and the current running webdriver
  private ChromeDriverService chromeService;
  private RemoteWebDriver webDriver;

  /**
   * Constructor of this service. This will automatically create and start the driver service
   */
  public DriverService() {
    // create and start the service
    this.chromeService = createAndStartService(getDriverExecutable());
  }

  /**
   * Start a webdriver, and lanuch it
   *
   * @return {@link RemoteWebDriver} of the current running webdriver
   */
  public RemoteWebDriver getChromeDriver() {
    logger.traceEntry();
    this.webDriver = this.getChromeDriver(null);
    return logger.traceExit(this.webDriver);
  }

  /**
   * Start a webdriver using the provided userAgent, and lanuch it
   *
   * @param userAgent one of {@link UserAgents}
   *
   * @return {@link RemoteWebDriver} of the current running webdriver
   */
  public RemoteWebDriver getChromeDriver(UserAgents userAgent) {
    logger.traceEntry();
    // get the defualt chrome options
    ChromeOptions options = getChromeOptions();
    // if the user agent is set then tell the webdriver to use that agent for all the requests
    if (userAgent != null) {
      options.addArguments("user-agent=".concat(userAgent.getValue()));
    }
    // construct the webDriver using the the current chrome options
    // and return it
    this.webDriver = new RemoteWebDriver(this.chromeService.getUrl(), options);
    return logger.traceExit(this.webDriver);
  }

  /**
   * create and start a {@link ChromeDriverService}, using the chromeDriver executable
   * Note: the executable file must be set to be executable
   *
   * @param executable {@link File} of the chrome driver, must be executable
   * @return {@link ChromeDriverService}
   */
  private ChromeDriverService createAndStartService(final File executable) {
    logger.traceEntry();
    ChromeDriverService service = createDriverService(executable);
    try {
      service.start();
    } catch (IOException e) {
      logger.catching(e);
    }
    return logger.traceExit(service);
  }

  /**
   * Quit the current running webDriver if it is running
   */
  public void releaseWebDriver() {
    logger.traceEntry();

    if (this.webDriver != null) {
      this.webDriver.quit();
    }

    logger.traceExit();
  }

  /**
   * Stop the current chromeDriverService.
   * Note: this will also kill the current chrome instance if it is running
   */
  public void stopService() {
    logger.traceEntry();

    this.releaseWebDriver();
    this.chromeService.stop();

    logger.traceExit();
  }

  /**
   * create a {@link ChromeDriverService}, using the chromeDriver executable
   * Note: the executable file must be set to be executable
   *
   * @param executable {@link File} of the chrome driver, must be executable
   * @return {@link ChromeDriverService}
   */
  private ChromeDriverService createDriverService(final File executable) {
    logger.traceEntry();
    ChromeDriverService service = new ChromeDriverService.Builder().usingDriverExecutable(executable).usingAnyFreePort()
        .build();
    return logger.traceExit(service);
  }

  /**
   * Get an instance of chrome options that has some necessary configuration
   *
   * @return {@link ChromeOptions} with default configuration
   */
  private ChromeOptions getChromeOptions() {
    logger.traceEntry();
    ChromeOptions options = new ChromeOptions();
    //TODO: enable mobile emulation for later
    //Map<String, String> mobileEmulation = new HashMap<String, String>();
    //mobileEmulation.put("deviceName", "iPhone 6 Plus");
    //options.setExperimentalOption("mobileEmulation", mobileEmulation);
    //END TODO
    options.addArguments("start-maximized");
    options.addArguments("--disable-infobars");
    return logger.traceExit(options);
  }

  /**
   * Get the driver's executable file
   *
   * @return {@link File} of the driver executable
   */
  private File getDriverExecutable() {
    logger.traceEntry();
    // get the driver path
    String execPath = getDriverPath();
    // get a file object from the driver executable path
    File executable = new File(this.getClass().getClassLoader().getResource(execPath).getFile());
    // need to make it executable
    executable.setExecutable(true);
    return logger.traceExit(executable);
  }

  /**
   * Get the path for the driver executable
   *
   * @return {@link String} of the executable that will run on this operating system
   */
  private String getDriverPath() {
    logger.traceEntry();
    // get the name of this os
    String osName = System.getProperty("os.name").toLowerCase();
    String execPath = "";
    // based on the os name return the correct chrome driver path
    if (osName.startsWith("windows")) {
      execPath = "chrome/win/chromedriver.exe";
    } else if (osName.equals("mac")) {
      execPath = "chrome/mac/chromedriver";
    } else if (osName.equals("linux")) {
      execPath = "chrome/linux/chromedriver";
    }
    return logger.traceExit(execPath);
  }
}
