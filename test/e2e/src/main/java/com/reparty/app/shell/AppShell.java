package com.reparty.app.shell;

import com.google.common.base.Preconditions;
import com.reparty.app.core.PageObjBase;
import com.reparty.app.utils.CommonUtils;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebElement;

/**
 * AppShell extends {@link com.reparty.app.core.PageObjBase}
 */
public class AppShell extends PageObjBase {

  private static final String className = CommonUtils.getCallingClassName();
  private static final Logger logger = LogManager.getLogger(className);

  private NavigationTab currentTab;

  public AppShell(WebElement we){
    super(we);
  }

  public NavigationTab getCurrentTab() {
    logger.traceEntry();
    return logger.traceExit(this.currentTab);
  }

  public String getNavigationTabName() {
    logger.traceEntry();
    Preconditions.checkNotNull(this.currentTab, "No tab was navigated to");
    return logger.traceExit(getCurrentTab().toString());
  }

  public void navigateToTab(NavigationTab tab) {
    logger.traceEntry();
    logger.traceExit();
  }
}
