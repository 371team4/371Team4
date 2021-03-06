package com.reparty.app.pageobjs;

import java.util.List;

import com.reparty.app.core.PageObjBase;
import com.reparty.app.utils.CommonUtils;
import com.reparty.app.utils.SeleniumUtils;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SlidesPage extends PageObjBase {

  /**
   * The id of the search bar
   */
  private static final By SearchBar = By.id("search_bar");

  /**
   * The data test for the TITLE faction
   */
  private static final By SlideCards = By.cssSelector("[data-test-attr^='slideCard']");
  private static final By editSlide = By.cssSelector("[data-test-attr='editSlideButton']");
  private static final By deleteSlide = By.cssSelector("[data-test-attr='deleteSlideButton']");
  private static final By CardTitle = By.cssSelector("[data-test-attr='cardTitle']");
  private static final By addButton = By.cssSelector("[data-test-attr='newSlide']");


  public SlidesPage(WebElement element) {
    super(element);
  }

  public void createNewSlide() {
    getWebDriver().findElement(addButton).click();
  }

  public void enterSearch (String search) {
    getWebDriver().findElement(SearchBar).clear();
    getWebDriver().findElement(SearchBar).sendKeys(search);
  }

  public String getFirstCardTitle () {
    return getTheSlideList().get(0).findElement(CardTitle).getText().trim();
  }

  public int getListSlidesSize () {
    return getTheSlideList().size();
  }

  public void deleteSlideAt(int position) {
    getTheSlideList().get(position-1).findElement(deleteSlide).click();
    CommonUtils.sleep(5);
  }

  public void editSlideAt(int position) {
    getTheSlideList().get(position-1).findElement(editSlide).click();
    CommonUtils.sleep(5);
  }

  public List<WebElement> getTheSlideList() {
    return getWebDriver().findElements(SlideCards);
  }

  public boolean hasSlideWithTitle(String title) {
    List<WebElement> slides = getTheSlideList();
    for (WebElement slide : slides) {
      if (slide.findElement(CardTitle).getText().trim().equals(title)) {
        return true;
      }
    }
    return false;
  }
}
