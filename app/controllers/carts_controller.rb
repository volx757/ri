class CartsController < ApplicationController

  def index
    @cart = Cart.find_current(current_user.id)
    @cart.update_total_cost
  end

  def checkout
    @cart = Cart.find_current(current_user.id)
  end

  def create_payment
    if stripe_token = params[:stripeToken]
      if current_user.do_deposit_transaction(params[:total_cost], stripe_token, current_user)
        flash[:notice] = 'Card charged successfully'
        Cart.find_current(current_user.id).deactivate
      else
        flash[:alert] = 'Some error happened while charging you, please double check your card details'
      end
    else
      flash[:alert] = 'You did not submit the form correctly'
    end
  end



end
