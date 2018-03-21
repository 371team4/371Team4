package com.reparty.services;
//from https://github.com/christian-draeger/basic-selenium-project/blob/master/src/main/java/selenium/driver/UserAgents.java
/**
 * Represents the different user agents for browsers.
 */
public enum UserAgents {

  GOOGLE_PIXLE_C("Mozilla/5.0 (Linux; Android 7.0; Pixel C Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Safari/537.36"),
  NEXUS_6P("Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6P Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36"),
  IPHONE_I_OS_9("Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A452 Safari/601.1");

  private String value;

  UserAgents(final String value) {
    this.value = value;
  }

  public String getValue() {
    return this.value;
  }

}
