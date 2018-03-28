package com.reparty.app.pageObjs;

import com.reparty.app.core.PageObjBase;
import com.reparty.app.utils.CommonUtils;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ImageCards extends PageObjBase {

  @FindBy(css= "[data-test-attr='uploadButton']")
  private WebElement UploadButton;

  private AddButton add;

  public ImageCards(WebElement element) {
    super(element);
    add = new AddButton(element);
  }

  public AddButton addButton() {
    return add;
  }

  public void uploadFile(String path) {
    this.UploadButton.clear();
    this.UploadButton.sendKeys(path);
    CommonUtils.sleep(5);
  }
}
