Feature: Reach newsfeeds in FB 
Background: 
	This tests dataTable as list and maps
#@Smoke
#Scenario Outline: Login with credentials
#Given Open FB login page
#Then Enter User ID "<id>" and Password "<password>"
#Then Click Login Button
#Examples:
#|id|password|
#|abcd|hai|
#|hello|abcd|

	@ignore 
Scenario Outline: Login with credentials 
	Given Open FB login page "<Total Rounds>" "<Total Values>" 
	Then Enter User ID and Password 
		|321|pasword|
		|1234|asdf|
	Then Click Login Button
		|Rounds|Values|
		|Round 1| Value 1|
		|Round 2| Value 2|
		
		
	Examples: 
		|Total Rounds|Total Values|
		|12| All first Value|
		|2| All Second Value|
		