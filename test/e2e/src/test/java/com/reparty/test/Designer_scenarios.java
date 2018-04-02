package com.reparty.test;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.fail;

import java.util.concurrent.TimeUnit;

import com.reparty.app.core.WebDriverBase;
import com.reparty.app.pageObjs.Designer;
import com.reparty.app.pageObjs.Login;
import com.reparty.app.utils.CommonUtils;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.WebDriver;


/**
 * Unit test for simple App.
 */
public class Designer_scenarios extends WebDriverBase {

  private Designer test;

  @Before
  public void before() {
    getWebDriver().navigate().to("http://localhost:8080/signin");
    Login logInButton = new Login(getWebDriver().findElement(By.cssSelector("main")));
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

    //WebElement deleteCard = getWebDriver().findElement(By.cssSelector("[data-test-attr='deleteCard']"));
    //deleteCard.click();
    //CommonUtils.sleep(5);
  }

  @Test
  public void componentTestSubmitButton() {
    test.submit();
  }

  @Test
  public void componentTestPreviewButton() {
    test.PreviewEdit();
  }

  @Test
  public void componentTestClearButton() {
    this.componentTestTitle();
    this.componentTestDescription();

    test.clear();
  }

  @Test
  public void componentCalendar() {

    CommonUtils.sleep(5);

    AuthorSlide test = new AuthorSlide(getWebDriver().findElement(By.cssSelector("main")));
    //test.clickCalendar();
    test.setDate("2018-3-4");
    CommonUtils.sleep(5);
  }
}

