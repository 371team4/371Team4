package com.reparty.test;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.fail;

import java.util.concurrent.TimeUnit;

import com.reparty.app.core.WebDriverBase;
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

  @Before
  public void before() {
		getWebDriver().navigate().to("http://localhost:8080/designer");
  }

  @Test
	public void test0() {
		Assert.assertEquals("Retirement Party", getWebDriver().getTitle());
  }

  @Test
	public void componentTestTitle() {
    WebElement authorSlide = getWebDriver().findElement(By.cssSelector("[data-test-attr='authorSlide']"));
    WebElement elementTitle = authorSlide.findElement(By.cssSelector("[data-test-attr='title']"));
    elementTitle.sendKeys("Cheese!");
  }

  @Test
	public void componentTestUploadFile() {
    WebElement uploadButton = getWebDriver().findElement(By.cssSelector("[data-test-attr='uploadButton']"));
    uploadButton.sendKeys("C:/individual/subject/Term2017-20182/cmpt408/slides/pic.png");
    CommonUtils.sleep(5);
  }

  @Test
  public void componentTestSubmitButton() {
    CommonUtils.sleep(10);
    WebElement submitButton = getWebDriver().findElement(By.cssSelector("[data-test-attr='submitButton']"));
    submitButton.click();
    CommonUtils.sleep(5);
  }

  @Test
  public void componentTestPreviewButton() {
    CommonUtils.sleep(10);
    WebElement previewButton = getWebDriver().findElement(By.cssSelector("[data-test-attr='previewButton']"));
    previewButton.click();
    CommonUtils.sleep(5);
  }

  @Test
  public void componentTestClearButton() {
    CommonUtils.sleep(10);

    WebElement authorSlide = getWebDriver().findElement(By.cssSelector("[data-test-attr='authorSlide']"));
    WebElement elementTitle = authorSlide.findElement(By.cssSelector("[data-test-attr='title']"));
    WebElement clearButton = getWebDriver().findElement(By.cssSelector("[data-test-attr='clearButton']"));
    elementTitle.sendKeys("Cheese!");

    clearButton.click();
    CommonUtils.sleep(5);
  }
}
