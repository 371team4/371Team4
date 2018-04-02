package com.reparty.app.pageobjs;

import com.reparty.app.core.PageObjBase;
import com.reparty.app.utils.CommonUtils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class Designer extends PageObjBase {

  By TitleInput = By.cssSelector("[data-test-attr='title']");
  By DescriptionInput = By.cssSelector("[data-test-attr='description']");

  By SubmitButton = By.cssSelector("[data-test-attr='submitButton']");
  By PreviewButton = By.cssSelector("[data-test-attr='previewButton']");
  By ClearButton = By.cssSelector("[data-test-attr='clearButton']");

  By AddButton = By.cssSelector("data-test-attr='addButton'");
  By UploadPath = By.cssSelector("data-test-attr='uploadPath'");


  public Designer(WebElement element) {
    super(element);
  }

  public void enterTitle(String title) {
    getWebDriver().findElement(TitleInput).clear();
    getWebDriver().findElement(TitleInput).sendKeys(title);
  }

  public void enterDescription(String title) {
    getWebDriver().findElement(DescriptionInput).clear();
    getWebDriver().findElement(DescriptionInput).sendKeys(title);
  }

  public void submit() {
    CommonUtils.sleep(5);
    getWebDriver().findElement(SubmitButton).click();
    CommonUtils.sleep(5);
  }

  public void PreviewEdit() {
    CommonUtils.sleep(5);
    getWebDriver().findElement(PreviewButton).click();
    CommonUtils.sleep(5);
  }

  public void clear() {
    CommonUtils.sleep(5);
    getWebDriver().findElement(ClearButton).click();
    CommonUtils.sleep(5);
  }

  public void uploadPicture(String path) {
    CommonUtils.sleep(5);
    getWebDriver().findElement(UploadPath).sendKeys(path);
    CommonUtils.sleep(5);
  }
}
