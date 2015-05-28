This is a sample application that uses rails 4, jquery, ajax, jsonp, cucumber and capybara. 
I used latest version of rails
Besides, I used followings:
* jquery-rails
* jquery-ui-rails
  * datepicker to pick a date for birth date
  * dialog to popup a dialog for adding/editting customers
* purecss-rails   
  * Just to have a nice table view
* cucumber and capybara  
  * to test the application. I added only one feature file only for adding a customer. 
  * I thought, it's not necessary to fully cover the application for now.

Most of the functionality is in <tt>app/assets/javascripts/customers.js</tt> file. It handles all the actions.


## Preinstallation

In order to run this application you must have the followings installed:

* PostgreSQL
* ExecJS

In order to run tests you need:

* Firefox



## Installation

* <tt>git clone git@github.com:esen/sample_ajax_cucumber_capybara.git</tt>

* <tt>bundle</tt>

* Set up database. Create postgres user, database and enter them in <tt>config/database.yml</tt>. 
Then run <tt>rake db:create db:migrate</tt>

* Run the app. <tt>rails s</tt>


## Running tests

* <tt>cucumber</tt>

