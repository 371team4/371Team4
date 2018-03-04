package com.reparty.app.utils;

import com.google.common.base.Preconditions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;

public class SeleniumUtils{
  /**
   * Get the webDriver associated with this webElement
   *
   * @param we of type {@link WebElement}
   * @return {@link WebDriver} the webDriver associated with the {@link WebElement}
   */
  public static WebDriver getWrappedDriver(WebElement we){
    // check that webElement is not null
    Preconditions.checkNotNull(we);
    return ((RemoteWebElement) we).getWrappedDriver();
  }
}
