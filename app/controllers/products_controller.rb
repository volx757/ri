class ProductsController < ApplicationController

  def index

  end

  def add_to_cart
    Cart.where(:user_id => current_user.id).first.add_product(params[:id])
    redirect_to '/products'
  end

  private
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

end
