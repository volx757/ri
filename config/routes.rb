Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  #root to: 'main#landing'
  root to: 'main#index'

  get 'home' => 'main#index'
  get 'products' => 'products#index'

  # sessions
  post 'login' => 'sessions#create'
  get 'login' => 'sessions#gon'
  post 'log_out' => 'sessions#destroy', :as => 'log_out'

  #users
  get 'register' => 'users#new', :as => 'register'
  post 'sign_up' => 'users#create', :as => 'sign_up'
  post 'add_contact' => 'users#add_contact', :as => 'add_contact'
  post 'add_credit' => 'users#add_credit', :as => 'add_credit'

  # carts
  get 'cart', to: 'carts#index', as: 'cart'
  get 'checkout', to: 'carts#checkout', as: 'checkout'
  get 'receipt' => 'carts#receipt'
  post 'cart', to: 'carts#create_payment', as: 'payment'
  post 'products' => 'products#add_to_cart'

  patch 'update_guest', to: 'users#update_guest'

  match 'contact' => 'main#contact', :as => 'contact', :via => [:get, :post]
  post 'inquiry', to: 'main#inquiry', as: 'inquiry'
  post 'contact', to: 'main#contact', as: 'contact_post'

  get 'night' => 'main#night', :as => 'night'

  get 'js' => 'application#js'

end
