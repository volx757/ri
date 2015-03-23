class CartsController < ApplicationController

  def index
    @cart = Cart.find_current(current_user.id)
    @cart.update_total_cost
  end



end
