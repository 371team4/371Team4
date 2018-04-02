package com.reparty.app.utils;

import com.google.common.base.Preconditions;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.message.ObjectMessage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.RemoteWebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumUtils{

  private static final String className = CommonUtils.getCallingClassName();
  private static final Logger logger = LogManager.getLogger(className);

  private static final int DEFAULT_TIMEOUT = 7; //5 seconds

  /**
   * Get the webDriver associated with this webElement
   *
   * @param we of type {@link WebElement}
   * @return {@link WebDriver} the webDriver associated with the {@link WebElement}
   */
  public static WebDriver getWrappedDriver(WebElement we){
    logger.traceEntry(new ObjectMessage(we));

    // check that webElement is not null
    Preconditions.checkNotNull(we);
    return logger.traceExit(((RemoteWebElement) we).getWrappedDriver());
  }

  public static WebElement waitUntilNestedElementVisible(WebElement we, By locator){
    WebDriver wd = getWrappedDriver(we);
    return getWebDriverWait(wd).until(ExpectedConditions.visibilityOfNestedElementsLocatedBy(we, locator)).get(0);
  }

  public static WebElement waitUntilElementVisible(WebDriver wd, By locator){
    return getWebDriverWait(wd).until(ExpectedConditions.visibilityOfElementLocated(locator));
  }

  public static final WebDriverWait getWebDriverWait(WebDriver wd) {
    return getWebDriverWait(wd, DEFAULT_TIMEOUT);
  }

  public static final WebDriverWait getWebDriverWait(WebDriver wd ,int timeout) {
    return new WebDriverWait(wd, timeout);
  }

  public static final void scrollElementIntoView(WebElement we) {
    RemoteWebDriver wd = (RemoteWebDriver) getWrappedDriver(we);
    wd.executeScript("arguments[0].scrollIntoView(true);", we);
  }
}
