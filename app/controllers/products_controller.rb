class ProductsController < ApplicationController

  def index

    session[:guest_id] = Time.now.to_i.to_s unless session[:user_id].present?

  end


  def add_to_cart

    create_guest unless logged_in?
    # now we have a user id, so we can associate a cart


    product_id = Product.process(params[:p])
    # now we have a product id, so we can create a line item



    cart = Cart.find_current(current_user.id)
    if cart.present?
      cart.add_product(product_id)
    else
      Cart.create_and_add_product(product_id, current_user.id)
    end

    redirect_to '/products'

  end

  private

  def create_guest

    Guest.create(:email => session[:guest_id], :password => 'guest')
    session[:user_id] = Guest.find_by_email(session[:guest_id]).id
  end


end
