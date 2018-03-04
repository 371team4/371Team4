package com.reparty.app.core;

import com.reparty.app.utils.SeleniumUtils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class PageObjBase {

  private WebDriver webDriver;
  private WebElement webElement;

  public PageObjBase(WebElement we) {
    this.webElement = we;
    this.webDriver = SeleniumUtils.getWrappedDriver(this.webElement);
  }
  
}
