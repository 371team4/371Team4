package com.reparty.test;

import static org.junit.Assert.fail;

import com.reparty.app.core.WebDriverBase;
import com.reparty.app.pageobjs.LoginPage;
import com.reparty.app.pageobjs.Designer;
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
public class Slides_scenarios extends WebDriverBase {

  private SlidesPage test;

  @Before
  public void before(){
    LoginPage logInButton = new LoginPage(getWebDriver().findElement(By.cssSelector("main")));
    logInButton.login();
    CommonUtils.sleep(3);

    test = new SlidesPage(getWebDriver().findElement(By.cssSelector("main")));
    CommonUtils.sleep(3);
  }

  @Test
  public void enterSearch() {
    test.enterSearch("My searching continue");
  }

  @Test
  public void testSlides() {
    //System.out.println(test.getSlide());
    if (test.getListSlidesSize() != 4) {
      fail();
    }
  }

  @Test
  public void testComponentDeleteSlide() {
    test.deleteSlideAt(1);
  }

  @Test
  public void testComponentEditSlide() {
    test.editSlideAt(1);

    Designer designerPage = new Designer(getWebDriver().findElement(By.cssSelector("main")));
    designerPage.enterTitle("Hanoi");
    designerPage.enterDescription("This is the description");

    designerPage.ClickTitleButton();
    designerPage.ChooseTitleColor("Blue");
    designerPage.ChooseTitleSize("Small");
    designerPage.ChooseTitleStyle("Italic");
    designerPage.ChooseTitleWeight("Bold");

    designerPage.ClickDescriptionButton();
    designerPage.ChooseDescriptionColor("Blue");
    designerPage.ChooseDescriptionSize("Small");
    designerPage.ChooseDescriptionStyle("Italic");
    designerPage.ChooseDescriptionWeight("Bold");

    designerPage.uploadPicture("C:/individual/subject/Term2017-20182/cmpt371/project/dap.jpg");

    designerPage.Preview_Edit();
    designerPage.Preview_Edit();
    CommonUtils.sleep(2);
    designerPage.submit();

    MainHeader header = new MainHeader(getWebDriver().findElement(By.cssSelector("main")));
    header.open();
    NavDrawer navigation = new NavDrawer(getWebDriver().findElement(By.cssSelector("main")));
    navigation.goTo("Slides");
    header.close();

    CommonUtils.sleep(5);
  }

  @Test
  public void testComponentNewSlide() {
    test.createNewSlide();
    CommonUtils.sleep(4);

    Designer designerPage = new Designer(getWebDriver().findElement(By.cssSelector("main")));
    designerPage.enterTitle("Hanoi");
    designerPage.enterDescription("This is the description");

    designerPage.ClickTitleButton();
    designerPage.ChooseTitleColor("Blue");
    designerPage.ChooseTitleSize("Small");
    designerPage.ChooseTitleStyle("Italic");
    designerPage.ChooseTitleWeight("Bold");

    designerPage.ClickDescriptionButton();
    designerPage.ChooseDescriptionColor("Blue");
    designerPage.ChooseDescriptionSize("Small");
    designerPage.ChooseDescriptionStyle("Italic");
    designerPage.ChooseDescriptionWeight("Bold");

    designerPage.uploadPicture("C:/individual/subject/Term2017-20182/cmpt371/project/dap.jpg");

    designerPage.Preview_Edit();
    designerPage.Preview_Edit();
    CommonUtils.sleep(2);
    designerPage.submit();

    MainHeader header = new MainHeader(getWebDriver().findElement(By.cssSelector("main")));
    header.open();
    NavDrawer navigation = new NavDrawer(getWebDriver().findElement(By.cssSelector("main")));
    navigation.goTo("Slides");
    header.close();

    CommonUtils.sleep(5);
  }

  @Test
  public void testNoSlideFound() {
    test.enterSearch("My searching continue");

    Assert.assertEquals("None Found", test.getFirstCardTitle());

  }

  @Test
  public void testNumberOfSlidesAfterSearch() {
    test.enterSearch("the");

    Assert.assertEquals(2, test.getListSlidesSize());

  }
}
