Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  root to: 'main#index'

  get 'home' => 'main#index'
  get "log_out" => "sessions#destroy", :as => "log_out"
  get "log_in" => "sessions#new", :as => "log_in"
  get "sign_up" => "users#new", :as => "sign_up"
  match "contact" => "main#contact", :as => "contact", :via => [:get, :post]
  get 'products' => 'products#index'
  post 'products' => 'products#add_to_cart'
  get 'night' => 'main#night', :as => 'night'

  patch 'users' => 'users#create'

  resources :users
  resources :sessions
  resources :products do
    member do
      post :add_to_cart
    end
  end

  get 'cart', to: 'carts#index', as: 'cart'
  get 'checkout', to: 'carts#checkout', as: 'checkout'
  post 'cart', to: 'carts#create_payment', as: 'payment'
  post 'inquiry', to: 'main#inquiry', as: 'inquiry'
  post 'contact', to: 'main#contact', as: 'contact_post'

end
