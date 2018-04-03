package com.reparty.test;

import com.reparty.app.core.WebDriverBase;
import com.reparty.app.pageobjs.Designer;
import com.reparty.app.pageobjs.LoginPage;
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
    getWebDriver().navigate().to("http://localhost:8080/signin");
    LoginPage logInButton = new LoginPage(getWebDriver().findElement(By.cssSelector("main")));
    logInButton.login();;
    CommonUtils.sleep(5);

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
	public void componentTestDescription() {
    test.enterDescription("Hanoi");
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
    this.componentTestTitle();
    this.componentTestDescription();
    this.componentCalendar();
    this.componentClock();

    test.PreviewEdit();
  }

  @Test
  public void componentTestClearButton() {
    this.componentTestTitle();
    this.componentTestDescription();
    this.componentCalendar();
    this.componentTestUploadFile();

    test.clear();
    CommonUtils.sleep(10);
  }

  @Test
  public void componentCalendar() {
    test.setDate("2018-4-4");
  }

  @Test
  public void componentClock() {
    test.setTime("3:30 AM");
  }
}

