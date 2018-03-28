package com.reparty.app.pageObjs;

import com.reparty.app.core.PageObjBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AddButton extends PageObjBase {

  @FindBy(css= "[data-test-attr='addButton']")
  private WebElement AddButton;

  public AddButton(WebElement element) {
    super(element);
  }

  public void add() {
    AddButton.click();
  }
}
