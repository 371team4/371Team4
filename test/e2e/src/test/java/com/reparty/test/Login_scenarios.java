package com.reparty.test;

import com.reparty.app.core.WebDriverBase;
import com.reparty.app.pageobjs.LoginPage;
import com.reparty.app.pageobjs.MainHeader;
import com.reparty.app.utils.CommonUtils;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;

/**
 * Unit test for simple App.
 */
public class Login_scenarios extends WebDriverBase {

  private LoginPage test;

  @Before
  public void before() {
    test = new LoginPage(getWebDriver().findElement(By.cssSelector("main")));
    CommonUtils.sleep(3);
    test.clearUsername();
    test.clearPassword();
  }

  @Test
  public void emptyUsername() {
    test.login();
    String error = test.getUsernameErrorMessage();
    Assert.assertEquals("Required", error);;
  }

  @Test
  public void numericUsername() {
    test.setUsername("0024219");
    test.login();
    String error = test.getUsernameErrorMessage();
    Assert.assertEquals("Username must be alphanumeric", error);
  }

  @Test
  public void tooShortUsername() {
    test.setUsername("abcd");
    test.login();
    String error = test.getUsernameErrorMessage();
    Assert.assertEquals("Username must be at least 5 characters long", error);
  }

  @Test
  public void emptyPassword() {
    test.login();
    String error = test.getPasswordErrorMessage();
    Assert.assertEquals("Required", error);
  }

  @Test
  public void validLogin() {
    test.setUsername("admin");
    test.setPassword("admin001");
    test.login();
    CommonUtils.sleep(3);

    MainHeader header = new MainHeader(getWebDriver().findElement(By.cssSelector("main")));
    Assert.assertTrue(header.checkToolBarTitle("Slides"));
  }

  @Test
  public void invalidLogin() {
    test.setUsername("world");
    test.setPassword("hello");
    test.login();

    MainHeader header = new MainHeader(getWebDriver().findElement(By.cssSelector("main")));
    Assert.assertTrue(header.checkToolBarTitle("Sign in"));
  }
}
