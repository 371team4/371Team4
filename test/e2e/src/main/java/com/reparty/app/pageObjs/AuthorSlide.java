package com.reparty.app.pageObjs;

import java.util.List;
import com.reparty.app.core.PageObjBase;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class AuthorSlide extends PageObjBase {

  //@FindBy(css= "[data-test-attr='authorSlide']")
  //private WebElement AuthorSlide;

  By TitleInput = By.cssSelector("[data-test-attr='title']");
  By DescriptionInput = By.cssSelector("[data-test-attr='description']");
  By ChooseCalendar = By.cssSelector("[data-test-attr='clickCalendar']");
  By selectableDates = By.cssSelector("[data-test-attr='clickDate'] td button");

  private ImageCards image;

  public AuthorSlide(WebElement element) {
    super(element);
    image = new ImageCards(element);
  }

  public ImageCards imageCards() {
    return image;
  }

  public void enterTitle(String title) {
    getWebDriver().findElement(TitleInput).clear();
    getWebDriver().findElement(TitleInput).sendKeys(title);
  }

  public void enterDescription(String title) {
    getWebDriver().findElement(DescriptionInput).clear();
    getWebDriver().findElement(DescriptionInput).sendKeys(title);
  }

  public void clickCalendar() {
    getWebDriver().findElement(ChooseCalendar).click();
  }

  public void setDate(String day){
    clickCalendar();

    List<WebElement> dates = getWebDriver().findElements(selectableDates);
    for (WebElement we : dates){
      if (we.getText().trim().equals(day)){
        we.click();
        return;
      }
    }
  }

}
