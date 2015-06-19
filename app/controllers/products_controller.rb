class ProductsController < ApplicationController

  def index

  end


  def add_to_cart

    create_pack(parse_juice_pack(params[:p]))

    cart = Cart.find_current(current_user.id)
    if cart.present?

      cart.add_product(params[:id])
    else
      Cart.create_and_add_product(params[:id], current_user.id)
    end
    redirect_to '/products'
  end

  private

  def create_pack(ids)

  end

  def parse_juice_pack(ids)
      ids.split(',')
  end


end
