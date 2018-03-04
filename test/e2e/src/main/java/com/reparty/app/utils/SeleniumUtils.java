package com.reparty.app.utils;

import com.google.common.base.Preconditions;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.message.ObjectMessage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;

public class SeleniumUtils{

  private static final String className = CommonUtils.getCallingClassName();
  private static final Logger logger = LogManager.getLogger(className);

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
}
