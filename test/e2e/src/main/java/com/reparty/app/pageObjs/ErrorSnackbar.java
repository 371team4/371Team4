package com.reparty.app.pageObjs;

import com.reparty.app.core.PageObjBase;
import com.reparty.app.utils.SeleniumUtils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

/**
 * ErrorSnackbar
 */
public class ErrorSnackbar extends PageObjBase {

  private static final By SNACKBAR_LOCATOR = By.cssSelector("[data-test-attr='errorWrapper']");
  private static final By SNACKBAR_MESSAGE = By.cssSelector(".snack__content");
  private static final By SNACKBAR_BUTTON = By.cssSelector("[data-test-attr='dismissError']");

  public static ErrorSnackbar find(WebDriver wd) {
    return new ErrorSnackbar(SeleniumUtils.waitUntilElementVisible(wd, SNACKBAR_LOCATOR));
  }

  public ErrorSnackbar (WebElement we) {
    super(we);
  }

  public String getMessage() {
    return SeleniumUtils.waitUntilNestedElementVisible(getWebElement(), SNACKBAR_MESSAGE).getText().trim();
  }

  public void dismiss() {
    SeleniumUtils.waitUntilNestedElementVisible(getWebElement(), SNACKBAR_BUTTON).click();
  }
}
