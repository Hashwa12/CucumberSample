Feature: To run test cases in parallel 

Background: Check background functionality of this file
Given I initialize a class
Then Following scenarios can execute now

Scenario: Send login details 
	Given Initialize variables 
	When Variables initialized 
	Then Assign values "1""123"
#		|Username|Password|
#		|1|1234|
#		|2|1234|
	And Print all values 
	
Scenario: Send OS and browser details 
	Given Open systems 
	When User in desktop 
	Then Click browsers 
		|OS|Browser|
		|Windows|FF|
		|MAC|Chrome|
	And Print browser name