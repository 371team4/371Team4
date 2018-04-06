package com.reparty.app.pageobjs;

import java.util.List;

import com.reparty.app.core.PageObjBase;
import com.reparty.app.utils.SeleniumUtils;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Designer extends PageObjBase {

  /**
   * Header of the page
   */
  private static final By PAGE_LOCATOR = By.id("designerPage");

  /**
   * The data test for the TITLE faction
   */
  private static final By TitleInput = By.cssSelector("[data-test-attr='title']");
  private static final By TitleButton = By.cssSelector("[data-test-attr='titleButton']");
  private static final By TitleColor = By.cssSelector("[data-test-attr='titleColor']");
  private static final By TitleSize = By.cssSelector("[data-test-attr='titleSize']");
  private static final By TitleWeight = By.cssSelector("[data-test-attr='titleWeight']");
  private static final By TitleStyle = By.cssSelector("[data-test-attr='titleStyle']");

  /**
   * The data test for the DESCRIPTION faction
   */
  private static final By DescriptionInput = By.cssSelector("[data-test-attr='description']");
  private static final By DescriptionButton = By.cssSelector("[data-test-attr='descriptionButton']");
  private static final By DescriptionColor = By.cssSelector("[data-test-attr='descriptionColor']");
  private static final By DescriptionSize = By.cssSelector("[data-test-attr='descriptionSize']");
  private static final By DescriptionWeight = By.cssSelector("[data-test-attr='descriptionWeight']");
  private static final By DescriptionStyle = By.cssSelector("[data-test-attr='descriptionStyle']");

  /**
   * The data test for the CALENDAR faction
   */
  private static final By selectableDates = By.cssSelector("[data-test-attr='clickDate'] td button");
  private static final By DateButton = By.cssSelector("[data-test-attr='dateButton']");
  private static final By DateColor = By.cssSelector("[data-test-attr='dateColor']");
  private static final By DateSize = By.cssSelector("[data-test-attr='dateSize']");
  private static final By DateWeight = By.cssSelector("[data-test-attr='dateWeight']");
  private static final By DateStyle = By.cssSelector("[data-test-attr='dateStyle']");

  /**
   * The data test for the CLOCK faction
   */
  private static final By selectableTimes = By.cssSelector("[data-test-attr='clickTime'] td button");
  private static final By TimeButton = By.cssSelector("[data-test-attr='timeButton']");
  private static final By TimeColor = By.cssSelector("[data-test-attr='timeColor']");
  private static final By TimeSize = By.cssSelector("[data-test-attr='timeSize']");
  private static final By TimeWeight = By.cssSelector("[data-test-attr='timeWeight']");
  private static final By TimeStyle = By.cssSelector("[data-test-attr='timeStyle']");

  /**
   * The  data test for the SLIDE SETTINGS FACTION
   */
  private static final By SlideSettingButton = By.cssSelector("[data-test-attr='slideSettings']");
  private static final By SlideSettingDuration = By.cssSelector("[data-test-attr='duration']");
  private static final By SlideSettingDurationDefault = By.cssSelector("[data-test-attr='durationDefault']");
  private static final By SlideSettingDate = By.cssSelector("[data-test-attr='slideSettingsDate']");

  /**
   * The data test for the 3 BUTTONS faction
  */
  private static final By SubmitButton = By.cssSelector("[data-test-attr='submitButton']");
  private static final By PreviewButton = By.cssSelector("[data-test-attr='previewButton']");
  private static final By ClearButton = By.cssSelector("[data-test-attr='clearButton']");

  /**
   * The data test for the IMAGE CARD faction
  */
  private static final By AddButton = By.cssSelector("data-test-attr='addButton'");
  private static final By UploadPath = By.cssSelector("[data-test-attr='uploadPath']");
  private static final By DeleteImage = By.cssSelector("[data-test-attr='deleteImage']");

  /**
   * Header of the page
   */
  private static final By PAGE_PREVIEW = By.id("slidePreviewPage");

  /**
   * Test attributes for the title, description, date and time
   */
  private static final By TitlePreview = By.cssSelector("[data-test-attr='previewTitle']");
  private static final By DescriptionPreview = By.cssSelector("[data-test-attr='previewDescription']");
  private static final By SlidePreview = By.cssSelector(".jumbotron");
  /**
   * The data test for the error Messages
   */
  By ERROR_MESSAGE_WRAPPER = By.xpath("./../../*[contains(@class, 'input-group__details')]");
  By ERROR_MESSAGE = By.cssSelector(".input-group__error");


  public static Designer find(WebDriver wd) {
    return new Designer(SeleniumUtils.waitUntilElementVisible(wd, PAGE_LOCATOR));
  }

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
    //getWebDriver().findElement(TitleInput).sendKeys(Keys.CONTROL+"a");
    //getWebDriver().findElement(TitleInput).sendKeys(Keys.BACK_SPACE);
  }

  public boolean isTitleValid() {
    List<WebElement> errors = this.getTitleErrorMessagesWE().findElements(By.xpath(".//*"));
    return errors.size() == 1;
  }

  public String getTitleErrorMessage() {
    if (!isTitleValid()) {
      return this.getTitleErrorMessagesWE().findElement(ERROR_MESSAGE).getText().trim();
    }
    return "";
  }

  public boolean isDescriptionValid() {
    List<WebElement> errors = this.getTitleErrorMessagesWE().findElements(By.xpath(".//*"));
    return errors.size() == 1;
  }

  public String getDescriptionErrorMessage() {
    if (!isDescriptionValid()) {
      return this.getDescriptionErrorMessagesWE().findElement(ERROR_MESSAGE).getText().trim();
    }
    return "";
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
    getWebDriver().findElement(SubmitButton).click();
  }

  public void Preview_Edit() {
    getWebDriver().findElement(PreviewButton).click();
  }

  public void clear() {
    getWebDriver().findElement(ClearButton).click();
  }

  public void uploadPicture(String path) {
    getWebDriver().findElement(UploadPath).sendKeys(path);
  }

  public void deleteOnePicture(){
    getWebDriver().findElement(DeleteImage).click();
  }

  public void deletePictureAt(int pos) {
    List<WebElement> deleteButton= getWebDriver().findElements(DeleteImage);
    deleteButton.get(pos).click();
  }

  public void setDate(String day){

    List<WebElement> dates = getWebDriver().findElements(selectableDates);
    for (WebElement we : dates){
      if (we.getText().trim().equals(day)){
        we.click();
        return;
      }
    }
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

  public void  ClickSlidesSettingButton() {
    getWebDriver().findElement(SlideSettingButton).click();
  }

  public void ChooseSlideDuration(String duration) {
    getWebDriver().findElement(SlideSettingDuration).click();
    this.SelectStyle(duration);
  }

  public void ChooseSlideDefault(String defaults) {
    getWebDriver().findElement(SlideSettingDurationDefault).click();
    this.SelectStyle(defaults);
  }

  // TODO
  public void ChooseSlideDate() {

  }


  /**
   *The methods for preview slide
   */
  public String getPreviewTitle(){
    return getWebDriver().findElement(TitlePreview).getText().trim();
  }

  public String getPreviewDescription(){
    return getWebDriver().findElement(DescriptionPreview).getText().trim();
  }

  public int checkSlidePreview() {
    List<WebElement> pictures = getWebDriver().findElements(SlidePreview);
    return pictures.size();
  }

  /**
   * The methods to check the error messages
   */
  private WebElement getTitleErrorMessagesWE() {
    WebElement title = getWebDriver().findElement(TitleInput);
    return title.findElement(ERROR_MESSAGE_WRAPPER);
  }

  private WebElement getDescriptionErrorMessagesWE() {
    WebElement description = getWebDriver().findElement(DescriptionInput);
    return description.findElement(ERROR_MESSAGE_WRAPPER);
  }
}
