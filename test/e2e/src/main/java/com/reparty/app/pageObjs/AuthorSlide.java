package com.reparty.app.pageObjs;

import com.reparty.app.core.PageObjBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AuthorSlide extends PageObjBase {

  @FindBy(css= "[data-test-attr='authorSlide']")
  private WebElement AuthorSlide;

  @FindBy(css= "[data-test-attr='title']")
  private WebElement TitleInput;

  @FindBy(css= "[data-test-attr='addButton']")
  private WebElement AddButton;

  @FindBy(css= "[data-test-attr='uploadButton']")
  private WebElement UploadButton;

  @FindBy(css= "[data-test-attr='submitButton']")
  private WebElement SubmitButton;

  @FindBy(css= "[data-test-attr='previewButton']")
  private WebElement PreviewButton;

  @FindBy(css= "[data-test-attr='clearButton']")
  private WebElement ClearButton;

  public AuthorSlide(WebElement element) {
    super(element);
  }


}
