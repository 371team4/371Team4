package com.reparty.test;

import static org.junit.Assert.fail;

import com.reparty.app.core.WebDriverBase;
import com.reparty.app.pageobjs.Designer;
import com.reparty.app.pageobjs.LoginPage;
import com.reparty.app.pageobjs.MainHeader;
import com.reparty.app.pageobjs.NavDrawer;
import com.reparty.app.utils.CommonUtils;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;

/**
 * Unit test for simple App.
 */
public class Designer_scenarios extends WebDriverBase {

  private Designer test;

  @Before
  public void before() {
    LoginPage logInButton = new LoginPage(getWebDriver().findElement(By.cssSelector("main")));
    logInButton.login();
    CommonUtils.sleep(3);

    MainHeader header = new MainHeader(getWebDriver().findElement(By.cssSelector("main")));
    header.open();

    NavDrawer navigation = new NavDrawer(getWebDriver().findElement(By.cssSelector("main")));
    navigation.goTo("Designer");

    header.close();
    //getWebDriver().navigate().to(serverPath.concat("/designer/new"));
    test = new Designer(getWebDriver().findElement(By.cssSelector("main")));

    CommonUtils.sleep(3);
  }

  @Test
  public void test0() {
    Assert.assertEquals("Retirement Party", getWebDriver().getTitle());
  }

  @Test
  public void componentTestTitle() {
    test.enterTitle("Hanoi");
  }

  @Test
  public void checkTitleError() {

    test.enterTitle("");
    test.submit();

    String error = test.getTitleErrorMessage();
    if (!error.equals("Title is required")) {
      fail();
    }
    System.out.println(error);
    CommonUtils.sleep(5);
  }

  @Test
  public void componentTitleStyle() {
    test.enterTitle("Hanoi");
    test.ClickTitleButton();
    test.ChooseTitleColor("Blue");
    test.ChooseTitleSize("Small");
    test.ChooseTitleStyle("Italic");
    test.ChooseTitleWeight("Bold");
  }

  @Test
  public void componentTestDescription() {
    test.enterDescription("Hanoi");
  }

  @Test
  public void componentDescriptionStyle() {
    test.enterDescription("Hanoi");
    test.ClickDescriptionButton();
    test.ChooseDescriptionColor("Blue");
    test.ChooseDescriptionSize("Small");
    test.ChooseDescriptionStyle("Italic");
    test.ChooseDescriptionWeight("Bold");
  }

  @Test
	public void componentTestUploadOnePic() {
    test.uploadPicture("C:/individual/subject/Term2017-20182/cmpt371/project/dap.jpg");

    test.deleteOnePicture();
  }

  @Test
	public void componentTestUploadMultiplePics() {
    test.uploadPicture("C:/individual/subject/Term2017-20182/cmpt371/project/dap.jpg");
    test.uploadPicture("C:/individual/subject/Term2017-20182/cmpt371/project/dino.jpg");
    test.uploadPicture("C:/individual/subject/Term2017-20182/cmpt371/project/laugh.jpeg");
    test.uploadPicture("C:/individual/subject/Term2017-20182/cmpt371/project/polices.jpg");

    test.deletePictureAt(3);
    CommonUtils.sleep(2);
  }

  @Test
  public void componentTestSubmitButton() {
    test.submit();
  }

  @Test
  public void componentTestPreviewButton() {
    test.enterTitle("Hanoi");
    test.enterDescription("Hanoi");

    test.Preview_Edit();
  }

  @Test
  public void componentTestClearButton() {
    test.enterTitle("Hanoi");
    test.enterDescription("Hanoi");

    test.clear();
    CommonUtils.sleep(10);
  }

  @Test
  public void componentCalendar() {
    test.setDate("2018-4-4");
  }

  @Test
  public void componentDateStyle() {
    test.ClickDateButton();
    test.ChooseDateColor("Blue");
    test.ChooseDateSize("Small");
    test.ChooseDateStyle("Italic");
    test.ChooseDateWeight("Bold");
  }

  @Test
  public void componentClock() {
    test.setTime("3:30 AM");
  }

  @Test
  public void componentTimeStyle() {
    test.ClickTimeButton();
    test.ChooseTimeColor("Lime");
    test.ChooseTimeSize("Small");
    test.ChooseTimeStyle("Italic");
    test.ChooseTimeWeight("Bold");
  }

  @Test
  public void slideSetting() {
    test.ClickSlidesSettingButton();
    test.ChooseSlideDuration("30 seconds");
    test.ChooseSlideDefault("Default Template");
    test.ChooseSlideDate();
  }


  /**
   * The next test is the combination of the Designer.vue and the DefaultSlideTemplate.vue
   */
  @Test
  public void previewTest() {
    // Fill the box
    test.enterTitle("This is the title");
    test.enterDescription("My name is the description");
    test.uploadPicture("C:/individual/subject/Term2017-20182/cmpt371/project/polices.jpg");
    test.uploadPicture("C:/individual/subject/Term2017-20182/cmpt371/project/dap.jpg");
    test.setDate("2018-4-4");

    // Go to the preview page
    test.Preview_Edit();
    Assert.assertEquals("This is the title", test.getPreviewTitle());
    Assert.assertEquals("My name is the description", test.getPreviewDescription());

    if (test.checkSlidePreview() != 2) {
      fail();
    }

    CommonUtils.sleep(2);
  }

}
