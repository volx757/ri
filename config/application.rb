require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

%w(defaults overrides).each do |type|
  path = File.expand_path("../#{type}/#{Rails.env}.yml", __FILE__)
  ENV.update(YAML.load_file(path)) if File.exist?(path)
end

module Ri
  class Application < Rails::Application

    config.autoload_paths += %W(#{config.root}/lib #{config.root}/app/models/concerns #{config.root}/app/controllers/concerns)
    config.autoload_paths << File.join(Rails.root, "app", "classes")
    config.autoload_paths += Dir[File.join(Rails.root, "lib", "core_ext", "*.rb")].each { |l| require l}

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'
    config.filter_parameters += [:password]
    config.filter_parameters += [:password_confirmation]

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # Do not swallow errors in after_commit/after_rollback callbacks.
   # config.active_record.raise_in_transactional_callbacks = true

    # Enable the asset pipeline
    config.assets.enabled = true
    config.assets.paths << Rails.root.join('app', 'assets', 'fonts')

    config.autoload_paths += Dir["#{config.root}/app/models/**/"]

  end
end
