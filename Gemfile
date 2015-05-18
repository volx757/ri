source 'https://rubygems.org'
ruby '2.2.1'

gem 'rails', '~>4.1' # Ruby on Rails framework
gem 'pg' # PostgreSQL
gem 'lograge' # Makes our prod logs much easier to grok
gem 'unicorn' # A nice HTTP Server
gem 'foreman' # Use unicorn locally
gem 'paperclip' # For attaching files
gem 'protected_attributes' # For protecting model from mass assignment attacks with attr_accessible
gem 'activeadmin', github: 'activeadmin', ref: 'c6c43'
gem 'rmagick'
gem 'zencoder'
gem 'heroku-api'
gem 'roo'
gem 'secure_headers'
gem 'foreigner'
gem 'immigrant'
gem 'activerecord'
gem 'bcrypt'
gem 'stripe-rails'
gem 'sprockets'
gem 'font-awesome-rails'
gem 'instagram'
gem 'newrelic_rpm'

gem 'aws-sdk' # For storing uploaded files on S3

# User handling:
gem 'devise' # For creating and managing users

# Social Services: 
gem 'omniauth-facebook' # For gaining Facebook authentication

# Email:
gem 'mail' # Action Mailer for sending emails
gem 'sendgrid'
gem 'premailer-rails'
gem 'nokogiri'

group :production do
  gem 'rails_12factor'
  gem 'rails_stdout_logging'
  gem 'dalli'
  gem 'memcachier'
  gem 'rails_serve_static_assets'
end
group :assets do
  gem 'jquery-rails'
  gem 'jquery-ui-rails'
  gem 'sass-rails'
  gem 'uglifier'
  gem 'compass-rails'
end

group :development do
  gem 'progress_bar' # For better terminal outputs
  gem 'better_errors' # For displaying better error pages
  gem 'binding_of_caller' # For providing an active console on error pages
end

