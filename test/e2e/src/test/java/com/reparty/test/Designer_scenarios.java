package com.reparty.test;

import static org.junit.Assert.fail;

import com.reparty.app.core.WebDriverBase;
import com.reparty.app.pageobjs.Designer;
import com.reparty.app.pageobjs.LoginPage;
import com.reparty.app.pageobjs.MainHeader;
import com.reparty.app.pageobjs.NavDrawer;
import com.reparty.app.pageobjs.SlidesPage;
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
    CommonUtils.sleep(1);

    NavDrawer navigation = new NavDrawer(getWebDriver().findElement(By.cssSelector("main")));
    navigation.goTo("Designer");

    header.close();
    //getWebDriver().navigate().to(serverPath.concat("/designer/new"));
    test = new Designer(getWebDriver().findElement(By.cssSelector("main")));

    CommonUtils.sleep(3);
  }

  @Test
  public void test0() {
    //Assert.assertEquals("Retirement Party", getWebDriver().getTitle());

    MainHeader header = new MainHeader(getWebDriver().findElement(By.cssSelector("main")));
    if (!header.checkToolBarTitle("Designer")) {
      fail();
    }
  }

  @Test
  public void componentTestTitle() {
    test.enterTitle("Hanoi");
  }

  @Test
  public void checkTitleError() {

    test.enterTitle("");
    test.ClickTitleButton();

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
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
    CommonUtils.sleep(3);
    test.deleteOnePicture();
  }

  @Test
	public void componentTestUploadMultiplePics() {
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
    CommonUtils.sleep(3);

    test.deletePictureAt(3);
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
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
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

  @Test
  public void submitSlide() {
    test.enterTitle("This is a title");
    test.enterDescription("This is a description");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
    test.ClickTitleButton();
    test.submit();
    CommonUtils.sleep(3);
    Assert.assertEquals("This is a title", test.getPreviewTitle());
    Assert.assertEquals("This is a description", test.getPreviewDescription());

    MainHeader header = new MainHeader(getWebDriver().findElement(By.cssSelector("main")));
    header.open();

    NavDrawer navigation = new NavDrawer(getWebDriver().findElement(By.cssSelector("main")));
    navigation.goTo("Slides");
    header.close();

    SlidesPage slides = new SlidesPage(getWebDriver().findElement(By.cssSelector("main")));
    CommonUtils.sleep(3);
    Assert.assertTrue(slides.hasSlideWithTitle("This is a title"));
  }

  @Test
  public void previewFullSlide() {
    test.enterTitle("This is another title");
    test.enterDescription("This is another description");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");

    test.ClickDateButton();
    test.ChooseDateColor("Orange");
    test.ChooseDateSize("X-Small");
    test.ChooseDateWeight("Bold");
    test.ChooseDateStyle("Italic");

    test.ClickTimeButton();
    test.ChooseTimeColor("Orange");
    test.ChooseTimeSize("X-Small");
    test.ChooseTimeWeight("Bold");
    test.ChooseTimeStyle("Italic");

    test.ClickDescriptionButton();
    test.ChooseDescriptionColor("Orange");
    test.ChooseDescriptionSize("X-Small");
    test.ChooseDescriptionWeight("Bold");
    test.ChooseDescriptionStyle("Italic");


    test.Preview_Edit();
    CommonUtils.sleep(3);
    Assert.assertEquals("This is another title", test.getPreviewTitle());
    Assert.assertEquals("This is another description", test.getPreviewDescription());
    Assert.assertEquals(3, test.checkSlidePreview());
  }

  @Test
  public void submitFullSlide() {
    test.enterTitle("another title");
    test.enterDescription("This is another description");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");

    test.ClickDateButton();
    test.ChooseDateColor("Orange");
    test.ChooseDateSize("X-Small");
    test.ChooseDateWeight("Bold");
    test.ChooseDateStyle("Italic");

    test.ClickTimeButton();
    test.ChooseTimeColor("Orange");
    test.ChooseTimeSize("X-Small");
    test.ChooseTimeWeight("Bold");
    test.ChooseTimeStyle("Italic");

    test.ClickDescriptionButton();
    test.ChooseDescriptionColor("Orange");
    test.ChooseDescriptionSize("X-Small");
    test.ChooseDescriptionWeight("Bold");
    test.ChooseDescriptionStyle("Italic");


    test.submit();
    CommonUtils.sleep(3);
    Assert.assertEquals("another title", test.getPreviewTitle());
    Assert.assertEquals("This is another description", test.getPreviewDescription());
    Assert.assertEquals(3, test.checkSlidePreview());


    MainHeader header = new MainHeader(getWebDriver().findElement(By.cssSelector("main")));
    header.open();

    NavDrawer navigation = new NavDrawer(getWebDriver().findElement(By.cssSelector("main")));
    navigation.goTo("Slides");
    header.close();

    SlidesPage slides = new SlidesPage(getWebDriver().findElement(By.cssSelector("main")));
    CommonUtils.sleep(3);
    Assert.assertTrue(slides.hasSlideWithTitle("another title"));
  }

  @Test
  public void clearSlide() {
    test.enterTitle("This is another title");
    test.enterDescription("This is another description");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");

    test.clear();
    CommonUtils.sleep(3);
    Assert.assertEquals("", test.GetTitle());
    Assert.assertEquals("", test.GetDescription());
    Assert.assertEquals(0, test.checkSlidePreview());
  }

  @Test
  public void editSlideFromPreview() {
    test.enterTitle("This is another title");
    test.enterDescription("This is another description");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");
    test.uploadPicture("C:/Users/Ehtasham/Desktop/300.jpg");

    test.Preview_Edit();
    CommonUtils.sleep(1);
    test.Preview_Edit();
    CommonUtils.sleep(1);

    Assert.assertEquals("This is another title", test.GetTitle());
    Assert.assertEquals("This is another description", test.GetDescription());
    Assert.assertEquals(3, test.checkSlidePreview());
  }
}
