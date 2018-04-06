package com.reparty.app.pageobjs;

import java.util.List;

import com.reparty.app.core.PageObjBase;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class NavDrawer extends PageObjBase {

  /**
   * Header of the page
   */
  private static final By HEADER = By.cssSelector("[data-test-attr='appNav']");

  public NavDrawer(WebElement element) {
    super(element);
  }

  public void goTo(String nav) {
    List<WebElement> items = getWebDriver().findElements(By.cssSelector(".list__tile__title"));
    for (WebElement item : items) {
      if (item.getText().trim().equals(nav)){
        item.click();
        break;
      }
    }
  }



}
