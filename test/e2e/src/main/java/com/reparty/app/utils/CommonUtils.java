package com.reparty.app.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public final class CommonUtils {

  private static final Logger logger = LogManager.getLogger("CommonUtils");

  /**
   * stacktrace
   * 0 -> current thread
   * 1 -> getStackTrace()
   * 2 -> getCallingMethodName()
   * 3 -> calling method
   */
  public static String getCallingMethodName() {
    logger.traceEntry();

    StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();

    return logger.traceExit(stackTrace[3].getMethodName());
  }

  /**
  * stacktrace
  * 0 -> current thread
  * 1 -> getStackTrace()
  * 2 -> getCallingClassName()
  * 3 -> calling class
  */
  public static String getCallingClassName() {
    logger.traceEntry();

    StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();

    return logger.traceExit(stackTrace[3].getClassName());
  }

  public static void sleep(int seconds) {
    logger.traceEntry();

    sleepMS(seconds * 1000);

    logger.traceExit();
  }

  public static void sleepMS(long millis) {
    logger.traceEntry();

    try {
      Thread.sleep(millis);
    } catch (InterruptedException e) {
      logger.catching(e);
    }

    logger.traceExit();
  }

  public static final Properties getConfigProps() {
    logger.traceEntry();
    Properties properties = null;
    File propFile = new File(CommonUtils.class.getClassLoader().getResource("config.properties").getFile());
    try {
      FileInputStream fileInput = new FileInputStream(propFile);
      properties = new Properties();
      properties.load(fileInput);
      fileInput.close();
    } catch (FileNotFoundException e) {
      logger.catching(e);
    } catch (IOException e) {
      logger.catching(e);
    }
    return logger.traceExit(properties);
  }

  public static String getServerURL() {
    logger.traceEntry();
    String url = (String) getConfigProps().getOrDefault("server.url", "http://localhost:8080");
    return logger.traceExit(url);
  }

  public static boolean shouldRunHeadless() {
    logger.traceEntry();
    boolean flag = false;
    if (System.getProperty("chrome.headless") == null) {
      flag = Boolean.getBoolean((String) getConfigProps().get("chrome.headless"));
    } else {
      flag = true;
    }
    return logger.traceExit(flag);
  }
}
