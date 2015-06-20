class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    if current_user.present? && current_user.is_guest?
      guest_id = current_user.id
      cart_id = current_user.cart.id

      @user = User.new(params[:user])
      if @user.save
        Cart.find(cart_id).update_attribute :user_id, @user.id
        Guest.find(guest_id).destroy
        session[:user_id] = @user.id

        redirect_to '/checkout', :notice => "Signed up!"
      else
        redirect_to '/checkout', :notice => 'errors'
      end
    else
      @user = User.new(params[:user])
      if @user.save
        redirect_to root_url, :notice => "Signed up!"
      else
        render "new"
      end
    end
  end

  def update_guest
    guest = Guest.find(current_user.id)
    guest_params = params[:guest]
    guest.update_attributes(:email => guest_params[:email], :address => guest_params[:address], :address_two => guest_params[:address_two],
                            :city => guest_params[:city], :state => guest_params[:state], :zip => guest_params[:zip])

    render :nothing => true
  end

end
