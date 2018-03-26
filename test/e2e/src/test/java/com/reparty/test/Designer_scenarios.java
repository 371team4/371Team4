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
public class Designer_scenarios extends WebDriverBase {

  @Test
	public void test0() throws Exception {
		getWebDriver().navigate().to("http://localhost:8080/designer");
		Assert.assertEquals("Retirement Party", getWebDriver().getTitle());
  }

  @Test
	public void TS14() throws Exception {
    getWebDriver().navigate().to("http://localhost:8080/designer");
    WebElement elementTitle = getWebDriver().findElement(By.cssSelector("[data-test-attr='title']"));

    elementTitle.sendKeys("Cheese!");
    elementTitle.submit();
  }
}
