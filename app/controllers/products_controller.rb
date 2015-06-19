class ProductsController < ApplicationController

  def index

  end

  def add_to_cart
    cart = Cart.find_current(current_user.id)
    if cart.present?
      cart.add_product(params[:id])
    else
      Cart.create_and_add_product(params[:id], current_user.id)
    end
    redirect_to '/products'
  end


end
