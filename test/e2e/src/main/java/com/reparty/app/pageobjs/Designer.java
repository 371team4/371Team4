package com.reparty.app.pageobjs;

import java.util.List;

import com.reparty.app.core.PageObjBase;
import com.reparty.app.utils.CommonUtils;
import com.reparty.app.utils.SeleniumUtils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class Designer extends PageObjBase {

  /**
   * The data test for the TITLE faction
   */
  By TitleInput = By.cssSelector("[data-test-attr='title']");
  By TitleButton = By.cssSelector("[data-test-attr='titleButton']");
  By TitleColor = By.cssSelector("[data-test-attr='titleColor']");
  By TitleSize = By.cssSelector("[data-test-attr='titleSize']");
  By TitleWeight = By.cssSelector("[data-test-attr='titleWeight']");
  By TitleStyle = By.cssSelector("[data-test-attr='titleStyle']");

  /**
   * The data test for the DESCRIPTION faction
   */
  By DescriptionInput = By.cssSelector("[data-test-attr='description']");
  By DescriptionButton = By.cssSelector("[data-test-attr='descriptionButton']");
  By DescriptionColor = By.cssSelector("[data-test-attr='descriptionColor']");
  By DescriptionSize = By.cssSelector("[data-test-attr='descriptionSize']");
  By DescriptionWeight = By.cssSelector("[data-test-attr='descriptionWeight']");
  By DescriptionStyle = By.cssSelector("[data-test-attr='descriptionStyle']");

  /**
   * The data test for the CALENDAR faction
   */
  By selectableDates = By.cssSelector("[data-test-attr='clickDate'] td button");
  By DateButton = By.cssSelector("[data-test-attr='dateButton']");
  By DateColor = By.cssSelector("[data-test-attr='dateColor']");
  By DateSize = By.cssSelector("[data-test-attr='dateSize']");
  By DateWeight = By.cssSelector("[data-test-attr='dateWeight']");
  By DateStyle = By.cssSelector("[data-test-attr='dateStyle']");

  /**
   * The data test for the CLOCK faction
   */
  By selectableTimes = By.cssSelector("[data-test-attr='clickTime'] td button");
  By TimeButton = By.cssSelector("[data-test-attr='timeButton']");
  By TimeColor = By.cssSelector("[data-test-attr='timeColor']");
  By TimeSize = By.cssSelector("[data-test-attr='timeSize']");
  By TimeWeight = By.cssSelector("[data-test-attr='timeWeight']");
  By TimeStyle = By.cssSelector("[data-test-attr='timeStyle']");

  /**
   * The data test for the 3 BUTTONS faction
  */
  By SubmitButton = By.cssSelector("[data-test-attr='submitButton']");
  By PreviewButton = By.cssSelector("[data-test-attr='previewButton']");
  By ClearButton = By.cssSelector("[data-test-attr='clearButton']");

  /**
   * The data test for the IMAGE CARD faction
  */
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

  public void ClickTitleButton() {
    getWebDriver().findElement(TitleButton).click();
  }

  public void ChooseTitleColor(String fontColor) {
    getWebDriver().findElement(TitleColor).click();
    this.SelectStyle(fontColor);
  }

  public void ChooseTitleSize(String fontSize) {
    getWebDriver().findElement(TitleSize).click();
    this.SelectStyle(fontSize);
  }

  public void ChooseTitleWeight(String fontWeight) {
    getWebDriver().findElement(TitleWeight).click();
    this.SelectStyle(fontWeight);
  }

  public void ChooseTitleStyle(String fontStyle) {
    getWebDriver().findElement(TitleStyle).click();
    this.SelectStyle(fontStyle);
  }


  public void enterDescription(String title) {
    getWebDriver().findElement(DescriptionInput).clear();
    getWebDriver().findElement(DescriptionInput).sendKeys(title);
  }

  public void ClickDescriptionButton() {
    getWebDriver().findElement(DescriptionButton).click();
  }

  public void ChooseDescriptionColor(String fontColor) {
    getWebDriver().findElement(DescriptionColor).click();
    this.SelectStyle(fontColor);
  }

  public void ChooseDescriptionSize(String fontSize) {
    getWebDriver().findElement(DescriptionSize).click();
    this.SelectStyle(fontSize);
  }

  public void ChooseDescriptionWeight(String fontWeight) {
    getWebDriver().findElement(DescriptionWeight).click();
    this.SelectStyle(fontWeight);
  }

  public void ChooseDescriptionStyle(String fontStyle) {
    getWebDriver().findElement(DescriptionStyle).click();
    this.SelectStyle(fontStyle);
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

  public void ClickDateButton() {
    getWebDriver().findElement(DateButton).click();
  }

  public void ChooseDateColor(String fontColor) {
    getWebDriver().findElement(DateColor).click();
    this.SelectStyle(fontColor);
  }

  public void ChooseDateSize(String fontSize) {
    getWebDriver().findElement(DateSize).click();
    this.SelectStyle(fontSize);
  }

  public void ChooseDateWeight(String fontWeight) {
    getWebDriver().findElement(DateWeight).click();
    this.SelectStyle(fontWeight);
  }

  public void ChooseDateStyle(String fontStyle) {
    getWebDriver().findElement(DateStyle).click();
    this.SelectStyle(fontStyle);
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

  public void ClickTimeButton() {
    getWebDriver().findElement(TimeButton).click();
  }

  public void ChooseTimeColor(String fontColor) {
    getWebDriver().findElement(TimeColor).click();
    this.SelectStyle(fontColor);
  }

  public void ChooseTimeSize(String fontSize) {
    getWebDriver().findElement(TimeSize).click();
    this.SelectStyle(fontSize);
  }

  public void ChooseTimeWeight(String fontWeight) {
    getWebDriver().findElement(TimeWeight).click();
    this.SelectStyle(fontWeight);
  }

  public void ChooseTimeStyle(String fontStyle) {
    getWebDriver().findElement(TimeStyle).click();
    this.SelectStyle(fontStyle);
  }
}