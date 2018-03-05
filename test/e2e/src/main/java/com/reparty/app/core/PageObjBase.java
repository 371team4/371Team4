package com.reparty.app.core;

import com.reparty.app.utils.CommonUtils;
import com.reparty.app.utils.SeleniumUtils;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class PageObjBase {

  private static final String className = CommonUtils.getCallingClassName();
  private static final Logger logger = LogManager.getLogger(className);

  private WebDriver webDriver;
  private WebElement webElement;

  public PageObjBase(WebElement we) {
    this.webElement = we;
    this.webDriver = SeleniumUtils.getWrappedDriver(this.webElement);
  }

  public WebDriver getWebDriver() {
    logger.traceEntry();
    return logger.traceExit(this.webDriver);
  }

  public WebElement getWebEelement() {
    logger.traceEntry();
    return logger.traceExit(this.webElement);
  }
}
