package com.reparty.app.pageobjs;

import java.util.List;

import com.reparty.app.core.PageObjBase;
import com.reparty.app.utils.CommonUtils;
import com.reparty.app.utils.SeleniumUtils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class Designer extends PageObjBase {

  By TitleInput = By.cssSelector("[data-test-attr='title']");
  By TitleButton = By.cssSelector("[data-test-attr='titleButton']");
  By TitleColor = By.cssSelector("[data-test-attr='titleColor']");
  By TitleSize = By.cssSelector("[data-test-attr='titleSize']");
  By TitleWeight = By.cssSelector("[data-test-attr='titleWeight']");
  By TitleStyle = By.cssSelector("[data-test-attr='titleStyle']");

  By DescriptionInput = By.cssSelector("[data-test-attr='description']");

  By selectableDates = By.cssSelector("[data-test-attr='clickDate'] td button");

  By selectableTimes = By.cssSelector("[data-test-attr='clickTime'] td button");

  By SubmitButton = By.cssSelector("[data-test-attr='submitButton']");
  By PreviewButton = By.cssSelector("[data-test-attr='previewButton']");
  By ClearButton = By.cssSelector("[data-test-attr='clearButton']");

  By AddButton = By.cssSelector("data-test-attr='addButton'");
  By UploadPath = By.cssSelector("[data-test-attr='uploadPath']");
  By DeleteImage = By.cssSelector("[data-test-attr='deleteImage']");


  public Designer(WebElement element) {
    super(element);
  }

  public void SelectStyle(String style) {
    WebElement menu = SeleniumUtils.waitUntilElementVisible(getWebDriver(), By.cssSelector(".menuable__content__active"));
    List<WebElement> items = menu.findElements(By.cssSelector(".list__tile__title"));
    for (WebElement item : items) {
      if (item.getText().trim().equals(style)){
        item.click();
        break;
      }
    }
  }

  public void enterTitle(String title) {
    getWebDriver().findElement(TitleInput).clear();
    getWebDriver().findElement(TitleInput).sendKeys(title);
  }

  public void titleStyle(String coloString, String fontSize, String fontWeight, String fontStyle) {
    getWebDriver().findElement(TitleButton).click();

    getWebDriver().findElement(TitleColor).click();
    this.SelectStyle(coloString);

    getWebDriver().findElement(TitleSize).click();
    this.SelectStyle(fontSize);

    getWebDriver().findElement(TitleWeight).click();
    this.SelectStyle(fontWeight);

    getWebDriver().findElement(TitleStyle).click();
    this.SelectStyle(fontStyle);
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
    getWebDriver().findElement(UploadPath).sendKeys(path);
    CommonUtils.sleep(5);
  }

  public void deletePicture() {
    getWebDriver().findElement(DeleteImage).click();
    CommonUtils.sleep(5);
  }

  public void setDate(String day){

    List<WebElement> dates = getWebDriver().findElements(selectableDates);
    for (WebElement we : dates){
      if (we.getText().trim().equals(day)){
        we.click();
        return;
      }
    }
    CommonUtils.sleep(5);
  }

  public void setTime(String time){

    List<WebElement> times = getWebDriver().findElements(selectableDates);
    for (WebElement we : times){
      if (we.getText().trim().equals(time)){
        we.click();
        return;
      }
    }
    CommonUtils.sleep(5);
  }
}
