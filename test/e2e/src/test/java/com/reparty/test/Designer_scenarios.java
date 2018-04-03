package com.reparty.test;

import com.reparty.app.core.WebDriverBase;
import com.reparty.app.pageobjs.Designer;
import com.reparty.app.pageobjs.LoginPage;
import com.reparty.app.utils.CommonUtils;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;

import static org.junit.Assert.fail;


/**
 * Unit test for simple App.
 */
public class Designer_scenarios extends WebDriverBase {

  private Designer test;

  @Before
  public void before() {
    getWebDriver().navigate().to("http://localhost:8080/signin");
    LoginPage logInButton = new LoginPage(getWebDriver().findElement(By.cssSelector("main")));
    logInButton.login();;
    CommonUtils.sleep(3);

    getWebDriver().navigate().to("http://localhost:8080/designer/new");
    test = new Designer(getWebDriver().findElement(By.cssSelector("main")));
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
    // if (!error.equals("Title is required")) {
    //   fail();
    // }
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
	public void componentTestUploadFile() {
    test.uploadPicture("C:/individual/subject/Term2017-20182/cmpt408/slides/pic.png");

    test.deletePicture();
  }

  @Test
  public void componentTestSubmitButton() {
    test.submit();
  }

  @Test
  public void componentTestPreviewButton() {
    test.enterTitle("Hanoi");
    test.enterDescription("Hanoi");

    test.PreviewEdit();
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
}

