package com.ADM.cucumber.stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Background {
	
	@Given("^I initialize a class$")
	public void i_initialize_a_class(){
		System.out.println("Background init class executing...");
	}

	@Then("^Following scenarios can execute now$")
	public void following_scenarios_can_execute_now() {
		System.out.println("Background scenario class executing...");		
	}


}
