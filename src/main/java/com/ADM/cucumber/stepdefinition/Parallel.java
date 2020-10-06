package com.ADM.cucumber.stepdefinition;

import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Parallel {
	String str1;
	String str2;

	@Given("^Initialize variables$")
	public void initialize_variables() {
		str1 = null;
		str2 = null;
	}

	@When("^Variables initialized$")
	public void variables_initialized() {
	}

	@Then("^Assign values \"(.*)\"\"(.*)\"$")
//	public void assign_values(DataTable arg1) {
//		for (Map<String, String> str : arg1.asMaps(String.class, String.class)) {
//			System.out.println(str.get("Username"));
//			System.out.println(str.get("Password"));
//
//		}
//	}
	public void assign_values(String s1, String s2) {
		System.out.println(s1);
		System.out.println(s2);
	}
	@Then("^Print all values$")
	public void print_all_values() throws InterruptedException{
		Thread.sleep(1000);
		
		System.out.println("parallel class time "+java.time.Clock.systemUTC().instant());}
}
