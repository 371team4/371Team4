package com.reparty.app.pageobjs;

import com.reparty.app.core.PageObjBase;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class MainHeader extends PageObjBase {

  /**
   * Header of the page
   */
  private static final By HEADER = By.id("appToolBar");

  /**
   *
   */
  private static final By barButton1 = By.cssSelector("[data-test-attr='firstTool']");
  private static final By barButton2 = By.cssSelector("[data-test-attr='secondTool']");

  private static final By toolBarTitle = By.cssSelector(".toolbar__title");

  public MainHeader(WebElement element) {
    super(element);
  }

  public void open() {
    getWebDriver().findElement(barButton1).click();
  }

  public void close() {
    getWebDriver().findElement(barButton2).click();
  }

  public boolean checkToolBarTitle (String title) {

    WebElement barTitleBar = getWebDriver().findElement(toolBarTitle);
    System.out.println(barTitleBar.getText().trim());
    return barTitleBar.getText().trim().equals(title);
  }

}
