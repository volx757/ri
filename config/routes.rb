Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  root to: 'main#index'
  get 'js' => 'application#js'

  get 'about' => 'main#about'
  get 'market' => 'main#market'
  get 'contact' => 'main#contact'

  post 'contact' => 'main#contact', as: 'contact_post'

  # sessions
  post 'login' => 'sessions#create'
  post 'log_out' => 'sessions#destroy', :as => 'log_out'

  #users
  get 'register' => 'users#new', :as => 'register'
  post 'sign_up' => 'users#create', :as => 'sign_up'


end
