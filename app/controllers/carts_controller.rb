class CartsController < ApplicationController

  def index
    @cart = current_user.active_cart
    @cart.update_total_cost
  end

  def checkout
    @user = current_user unless logged_in?
    @cart = current_user.active_cart
  end

  def create_payment
    if stripe_token = params[:stripeToken]
      if current_user.do_deposit_transaction(params[:total_cost], stripe_token, current_user)
        flash[:notice] = 'Card charged successfully'
        current_user.active_cart.deactivate
      else
        flash[:alert] = 'Some error happened while charging you, please double check your card details'
      end
    else
      flash[:alert] = 'You did not submit the form correctly'
    end
  end



end
