When(/I wait/) do
  sleep 10
end

When(/^I click on "(.*?)" button$/) do |button_text|
  click_button(button_text)
end

When(/^I select a date for birth date$/) do
  find('#birthdate').click
  sleep 2
  click_link("10")
end