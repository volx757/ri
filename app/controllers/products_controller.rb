class ProductsController < ApplicationController

  def index
  end

  def add_to_cart

    create_guest unless logged_in? || guest?

    create_cart unless current_user.active_cart

    product_id = Product.process(params[:p])
    cart = current_user.active_cart
    cart.add_product(product_id)

    redirect_to '/products'

  end


  private

  def create_guest
    guest_key = DateTime.now.to_s
    session[:guest_key] = guest_key
    Guest.create(:session_id => guest_key)
  end

  def create_cart
    Cart.create!(:user_id => current_user.id, :active => true)
  end

end
