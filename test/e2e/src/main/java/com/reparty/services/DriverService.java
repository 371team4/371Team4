package com.reparty.services;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;

/**
 * DriverService for Chrome WebDriver
 */
public class DriverService {
  // remember the chrome service, chrome options, and the current running webdriver
  private ChromeDriverService chromeService;
  private ChromeOptions chromeOptions = new ChromeOptions();
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
    this.webDriver = this.getChromeDriver(null);
    return this.webDriver;
  }

  /**
   * Start a webdriver using the provided userAgent, and lanuch it
   *
   * @param userAgent one of {@link UserAgents}
   *
   * @return {@link RemoteWebDriver} of the current running webdriver
   */
  public RemoteWebDriver getChromeDriver(UserAgents userAgent) {
    // get the defualt chrome options
    this.chromeOptions = getChromeOptions();
    // if the user agent is set then tell the webdriver to use that agent for all the requests
    if(userAgent != null){
      this.chromeOptions.addArguments("user-agent=".concat(userAgent.getValue()));
    }
    // construct the webDriver using the the current chrome options
    // and return it
    this.webDriver = new RemoteWebDriver(this.chromeOptions);
    return this.webDriver;
  }

  /**
   * create and start a {@link ChromeDriverService}, using the chromeDriver executable
   * Note: the executable file must be set to be executable
   *
   * @param executable {@link File} of the chrome driver, must be executable
   * @return {@link ChromeDriverService}
   */
  private ChromeDriverService createAndStartService(final File executable) {
      ChromeDriverService service = createDriverService(executable);
      try {
        service.start();
      } catch (IOException e) {
        e.printStackTrace();
      }
    return service;
  }

  /**
   * Quit the current running webDriver if it is running
   */
  public void releaseWebDriver() {
    if (this.webDriver != null) {
      this.webDriver.quit();
    }
  }

  /**
   * Stop the current chromeDriverService.
   * Note: this will also kill the current chrome instance if it is running
   */
  public void stopService() {
    this.releaseWebDriver();
    this.chromeService.stop();
  }

  /**
   * create a {@link ChromeDriverService}, using the chromeDriver executable
   * Note: the executable file must be set to be executable
   *
   * @param executable {@link File} of the chrome driver, must be executable
   * @return {@link ChromeDriverService}
   */
  private ChromeDriverService createDriverService(final File executable) {
    return new ChromeDriverService.Builder().usingDriverExecutable(executable).usingAnyFreePort().build();
  }

  /**
   * Get an instance of chrome options that has some necessary configuration
   *
   * @return {@link ChromeOptions} with default configuration
   */
  private ChromeOptions getChromeOptions() {
    ChromeOptions options = new ChromeOptions();
    //TODO: enable mobile emulation for later
    //Map<String, String> mobileEmulation = new HashMap<String, String>();
    //mobileEmulation.put("deviceName", "iPhone 6 Plus");
    //options.setExperimentalOption("mobileEmulation", mobileEmulation);
    //END TODO
    options.addArguments("start-maximized");
    options.addArguments("disable-infobars");
    return options;
  }

  /**
   * Get the driver's executable file
   *
   * @return {@link File} of the driver executable
   */
  private File getDriverExecutable() {
    // get the driver path
    String execPath = getDriverPath();
    // get a file object from the driver executable path
    File executable = new File(this.getClass().getClassLoader().getResource(execPath).getFile());
    // need to make it executable
    executable.setExecutable(true);
    return executable;
  }

  /**
   * Get the path for the driver executable
   *
   * @return {@link String} of the executable that will run on this operating system
   */
  private String getDriverPath() {
    // get the name of this os
    String osName = System.getProperty("os.name").toLowerCase();
    String execPath = "";
    // based on the os name return the correct chrome driver path
    if (osName.equals("windows")) {
      execPath = "chrome/win/chromedriver.exe";
    } else if (osName.equals("mac")) {
      execPath = "chrome/mac/chromedriver";
    } else if (osName.equals("linux")) {
      execPath = "chrome/linux/chromedriver";
    }
    return execPath;
  }
}
