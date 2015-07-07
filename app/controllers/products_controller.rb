class ProductsController < ApplicationController

  def index
    #reset_session
   # session[:guest_id] = Time.now.to_i.to_s unless session[:user_id].present?
  end

  def add_to_cart

    # check if cart exists and is guest
    # create guest
    # create cart
    # add item t cart

   # create_guest #unless logged_in?

    create_cart unless current_user.active_cart

    product_id = Product.process(params[:p])

    cart = current_user.active_cart
    cart.add_product(product_id)

    redirect_to '/products'

  end

  private

  def create_guest
    Guest.create
   # session[:user_id] = Guest.find_by_email(session[:guest_id]).id
  end

  def create_cart
    Cart.create!(:user_id => current_user.id, :active => true)
  end

end



# cart



# guest



# payment method




# invoice





#line items