package com.ADM.cucumber.stepdefinition;

import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BrowserandOS {
	@Given("^Open systems$")
	public void open_systems(){
		System.out.println("Click power button...");
	}

	@When("^User in desktop$")
	public void user_in_desktop(){
		System.out.println("Move to desktop page and wait...");
	}

	@Then("^Click browsers$")
	public void click_browsers(DataTable arg1){
		for(Map<String,String> map:arg1.asMaps(String.class,String.class))
		{
			System.out.println(map.get("OS"));

			System.out.println(map.get("Browser"));
}
			
	}

	@Then("^Print browser name$")
	public void print_browser_name() throws InterruptedException {
		Thread.sleep(1000);
		System.out.println("Browser class time "+java.time.Clock.systemUTC().instant());
	}

}
