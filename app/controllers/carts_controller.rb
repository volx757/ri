class CartsController < ApplicationController

  def index
    @cart = Cart.find_current(current_user.id)
    @cart.update_total_cost
  end

  def checkout

  end

  def create_payment

    if stripe_token = params[:stripeToken]
      if current_user.do_deposit_transaction(params[:payment_type], stripe_token, current_user)
        flash[:notice] = 'Card charged successfully'
      else
        flash[:alert] = 'Some error happened while charging you, please double check your card details'
      end
    else
      flash[:alert] = 'You did not submit the form correctly'
    end

  end

end
