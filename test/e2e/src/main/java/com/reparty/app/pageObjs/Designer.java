package com.reparty.app.pageObjs;

import com.reparty.app.core.PageObjBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Designer extends PageObjBase {

  @FindBy(css= "[data-test-attr='submitButton']")
  private WebElement SubmitButton;

  @FindBy(css= "[data-test-attr='previewButton']")
  private WebElement PreviewButton;

  @FindBy(css= "[data-test-attr='clearButton']")
  private WebElement ClearButton;


  private AuthorSlide author;

  public Designer(WebElement element) {
    super(element);
    author = new AuthorSlide(element);
  }

  public AuthorSlide authorSlide() {
    return author;
  }

  public void submit() {
    SubmitButton.click();
  }

  public void PreviewEdit() {
    PreviewButton.click();
  }

  public void clear() {
    ClearButton.click();
  }
}
