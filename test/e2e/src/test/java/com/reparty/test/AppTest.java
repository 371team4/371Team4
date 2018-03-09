package com.reparty.test;

import static org.junit.Assert.assertNotNull;

import com.reparty.app.core.WebDriverBase;
import com.reparty.app.utils.CommonUtils;

import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

/**
 * Unit test for simple App.
 */
public class AppTest extends WebDriverBase {

  @Test
  public void test1() {
    driver.navigate().to("https://google.com");
    CommonUtils.sleep(10);

    Assert.assertTrue(true);
    System.out.println("Hello, I was just ran");
  }

  @Test
  public void passes() {
    driver.get("http://google.com");
    WebElement el = driver.findElement(By.tagName("body"));
    assertNotNull(el);
  }
  @Test
  public void fails() {
    driver.get("http://google.com");
    driver.findElement(By.id("asdf"));

  }
}
