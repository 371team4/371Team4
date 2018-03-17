package com.reparty.test;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.fail;

import com.reparty.app.core.WebDriverBase;

import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

/**
 * Unit test for simple App.
 */
public class AppTest extends WebDriverBase {

  @Test
  public void test1() {
    getWebDriver().navigate().to("https://google.com");
    Assert.assertTrue(true);
    System.out.println("Hello, I was just ran");
  }

  @Test
  public void passes() {
    getWebDriver().get("http://google.com");
    WebElement el = getWebDriver().findElement(By.tagName("body"));
    assertNotNull(el);
  }
  @Test
  public void fails() {
    getWebDriver().get("http://google.com");
    WebElement searchField = getWebDriver().findElement(By.cssSelector("input[name='q']"));
    searchField.sendKeys(Keys.chord("unicorns", Keys.ENTER));
    fail();
  }
}
