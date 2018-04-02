package com.reparty.app.pageobjs;

import com.reparty.app.core.PageObjBase;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class Login extends PageObjBase {

  By Login = By.cssSelector("[data-test-attr='loginButton']");

  public Login(WebElement element) {
    super(element);
  }

  public void login() {
    getWebDriver().findElement(Login).click();
  }
}
