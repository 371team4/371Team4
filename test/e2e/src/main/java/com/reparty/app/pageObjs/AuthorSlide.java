package com.reparty.app.pageObjs;

import com.reparty.app.core.PageObjBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AuthorSlide extends PageObjBase {

  //@FindBy(css= "[data-test-attr='authorSlide']")
  //private WebElement AuthorSlide;

  @FindBy(css= "[data-test-attr='title']")
  private WebElement TitleInput;

  @FindBy(css= "[data-test-attr='description']")
  private WebElement DescriptionInput;

  private ImageCards image;

  public AuthorSlide(WebElement element) {
    super(element);
    image = new ImageCards(element);
  }

  public ImageCards imageCards() {
    return image;
  }

  public void enterTitle(String title) {
    this.TitleInput.clear();
    this.TitleInput.sendKeys(title);
  }

  public void enterDescription(String title) {
    this.DescriptionInput.clear();
    this.DescriptionInput.sendKeys(title);
  }
}
