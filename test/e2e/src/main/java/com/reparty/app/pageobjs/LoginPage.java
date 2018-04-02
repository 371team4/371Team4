package com.reparty.app.pageobjs;

import java.util.List;

import com.reparty.app.core.PageObjBase;
import com.reparty.app.utils.SeleniumUtils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LoginPage extends PageObjBase {

  private static final By LOGIN_FORM = By.cssSelector("[data-test-attr='loginForm']");

  private static final By USERNAME_FIELD = By.cssSelector("[data-test-attr='usernameField']");
  private static final By PASSWORD_FIELD = By.cssSelector("[data-test-attr='passwordField']");

  private static final By PASSWORD_MASK_BUTTON = By.cssSelector("[data-test-attr='passwordField'] + .icon");

  private static final By LOGIN_BUTTON = By.cssSelector("[data-test-attr='loginButton']");

  private static final By ERROR_MESSAGE_WRAPPER = By.xpath("./../../*[contains(@class, 'input-group__details')]");
  private static final By ERROR_MESSAGE = By.cssSelector(".input-group__error");

  public static LoginPage find(WebDriver wd) {
    return new LoginPage(SeleniumUtils.waitUntilElementVisible(wd, LOGIN_FORM));
  }

  public LoginPage(WebElement we) {
    super(we);
  }

  public void setUsername(String username) {
    getUsernameWE().sendKeys(username);
  }

  public void setPassword(String password) {
    getPasswordWE().sendKeys(password);
  }

  public void login() {
    getLoginButtonWE().click();
  }

  public void clearPassword() {
    setPassword("");
  }

  public void clearUsername() {
    setUsername("");
  }

  public void maskPassword() {
    if (getPasswordWE().getAttribute("type").equals("text")) {
      getMaskButton().click();
    }
  }

  public void unmaskPassword() {
    if (getPasswordWE().getAttribute("type").equals("password")) {
      getMaskButton().click();
    }
  }

  public boolean isPasswordValid() {
    List<WebElement> errors = getPasswordErrorMessagesWE().findElements(By.xpath("./"));
    return errors.size() == 0;
  }

  public boolean isUsernameValid() {
    List<WebElement> errors = getUsernameErrorMessagesWE().findElements(By.xpath("./"));
    return errors.size() == 0;
  }

  public String getPasswordErrorMessage() {
    if (!isPasswordValid()) {
      return getPasswordErrorMessagesWE().findElement(ERROR_MESSAGE).getText().trim();
    }
    return "";
  }

  public String getUsernameErrorMessage() {
    if (!isUsernameValid()) {
      return getUsernameErrorMessagesWE().findElement(ERROR_MESSAGE).getText().trim();
    }
    return "";
  }

  private WebElement getPasswordWE() {
    return getWebElement().findElement(PASSWORD_FIELD);
  }

  private WebElement getUsernameWE() {
    return getWebElement().findElement(USERNAME_FIELD);
  }

  private WebElement getLoginButtonWE() {
    return getWebElement().findElement(LOGIN_BUTTON);
  }

  private WebElement getMaskButton() {
    return getWebElement().findElement(PASSWORD_MASK_BUTTON);
  }

  private WebElement getPasswordErrorMessagesWE() {
    return getPasswordWE().findElement(ERROR_MESSAGE_WRAPPER);
  }

  private WebElement getUsernameErrorMessagesWE() {
    return getUsernameWE().findElement(ERROR_MESSAGE_WRAPPER);
  }
}
