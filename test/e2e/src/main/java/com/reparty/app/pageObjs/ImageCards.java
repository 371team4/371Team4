package com.reparty.app.pageObjs;

import com.reparty.app.core.PageObjBase;
import com.reparty.app.utils.CommonUtils;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ImageCards extends PageObjBase {

  @FindBy(css= "[data-test-attr='uploadButton']")
  private WebElement UploadInputField;

  @FindBy(css= "[data-test-attr='addButton']")
  private WebElement AddButton;

  @FindBy(css= "[data-test-attr='deleteCard']")
  private WebElement DeleteCardButton;

  public ImageCards(WebElement element) {
    super(element);
  }

  public void deleteCard() {
    DeleteCardButton.click();
  }

  public void uploadFile(String path) {
    this.UploadInputField.clear();
    this.UploadInputField.sendKeys(path);
    CommonUtils.sleep(5);
  }
}
