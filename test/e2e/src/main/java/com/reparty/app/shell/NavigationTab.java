package com.reparty.app.shell;

import com.reparty.app.utils.CommonUtils;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;

public enum NavigationTab {
  SLIDE_SHOW("Show View"),
  DESIGNER("Designer"),
  SAVED_SLIDES("Slides"),
  CALENDAR("Calendar");

  private static final String className = CommonUtils.getCallingClassName();
  private static final Logger logger = LogManager.getLogger(className);

  private String name;

  NavigationTab(String name){
    this.name = name;
  }

  public String toString() {
    logger.traceEntry();
    return logger.traceExit(this.name);
  }

  public By getLocator() {
    logger.traceEntry();
    By tabLocator = By.cssSelector(String.format("[data-test-attr='%sTab']", this.name));
    return logger.traceExit(tabLocator);
  }
}
