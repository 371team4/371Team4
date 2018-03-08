package com.reparty.test;

import com.reparty.app.utils.CommonUtils;
import com.reparty.services.DriverService;
import com.reparty.services.UserAgents;

import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.WebDriver;

/**
 * Unit test for simple App.
 */
public class AppTest {

  @Test
  public void test1() {
    DriverService ds = new DriverService();
    WebDriver wd = ds.getChromeDriver(UserAgents.GOOGLE_PIXLE_C);
    wd.navigate().to("https://google.com");
    CommonUtils.sleep(10);
    ds.stopService();

    Assert.assertTrue(true);
    System.out.println("Hello, I was just ran");
  }
}
