class UsersController < ApplicationController

  def new
    @user = User.new
    respond_to do |format|
      format.js
    end
  end

  def create
    if User.create!(user_params(params))
      respond_to do |format|
        format.js
      end
    else
      respond_to do |format|
        format.json { render :json => {:error_message => @user.errors.full_messages}, :status => :unprocessable_entity }
      end
    end
  end

  def update_guest
    Guest.find(params[:guest][:id]).write(params[:guest])
    render :nothing => true
  end

  private

  def user_params(params)
    new_params = Hash.new
    new_params[:email] = params[:user][:email]
    new_params[:password]= params[:user][:password]
    new_params[:password_confirmation] = params[:user][:password_confirmation]
    new_params
  end

end
