package com.reparty.test;

import static org.junit.Assert.fail;

import com.reparty.app.core.WebDriverBase;
import com.reparty.app.pageobjs.LoginPage;
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
  public void testComponentEditSlide() {
    test.deleteSlideAt(1);
  }

  @Test
  public void testNoSlideFound() {
    test.enterSearch("My searching continue");

    Assert.assertEquals("None Found", test.getCardTitle());

  }

  @Test
  public void testNumberOfSlidesAfterSearch() {
    test.enterSearch("the");

    Assert.assertEquals(2, test.getListSlidesSize());

  }
}
