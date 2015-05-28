Feature:
  As an authorized user
  I must be able to add a user

Background:
  Given I am on the home page

@javascript
Scenario: Open a new Customer Dialog
  When I click on "New Customer" button
  Then I should see /A New Customer/
  And I should see /First Name/
  And I should see /Last Name/
  And I should see /Email/
  And I should see /Phone/
  And I should see /Birth Date/
  And I should see /Save/
  And I should see /Cancel/

@javascript
Scenario: Add new Customer
  When I click on "New Customer" button
  And I fill in "First Name" with "Myname"
  And I fill in "Last Name" with "Lastname"
  And I fill in "Email" with "email@sample.com"
  And I fill in "Phone" with "0777111111"
  And I fill in "First Name" with "Myname"
  And I select a date for birth date
  And I click on "Save" button
  Then I should not see /A New Customer/
  And I should see /Myname/
  And I should see /Lastname/
  And I should see /email@sample.com/
  And I should see /0777111111/
  And I should see /-10/
  And I should see /Edit/
  And I should see /Delete/
  And I should see /New Customer/

