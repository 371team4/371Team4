package com.reparty.app.utils;

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
}
