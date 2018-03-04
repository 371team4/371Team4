package com.reparty.app.utils;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class CommonUtils {

  private static final String className = getCallingClassName();

  private static final Logger logger = LogManager.getLogger(className);

  public static String getCallingMethodName() {
    StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();
    return stackTrace[1].getMethodName();
  }

  public static String getCallingClassName() {
    StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();
    return stackTrace[1].getClassName();
  }

  public static void sleep(int seconds) {
    sleepMS(seconds * 1000);
  }

  public static void sleepMS(long millis) {
    try {
      Thread.sleep(millis);
    } catch (InterruptedException e) {
    }
  }

  public static void main(String[] args) {
    logger.trace("starting application");
    getCallingClassName();
    getCallingMethodName();
    logger.trace("exiting application");
  }
}
