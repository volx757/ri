Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  root to: 'main#index'

  get 'about' => 'main#about'
  get 'market' => 'main#market'
  get 'contact' => 'main#contact'

  post 'purchase' => 'main#purchase'
  post 'contact' => 'main#contact'

  # sessions
  post 'login' => 'sessions#create'
  post 'log_out' => 'sessions#destroy'

  #users
  get 'register' => 'users#new'
  post 'sign_up' => 'users#create'


end
