class UsersController < ApplicationController

  def new
    @user = User.new
    respond_to do |format|
      format.js
    end
  end

  def create
    sanitized_params = user_params(params)
    if User.create!(sanitized_params)
      sign_user_in(sanitized_params)
      respond_to do |format|
        format.js
      end
    else
      respond_to do |format|
        format.json { render :json => {:error_message => @user.errors.full_messages}, :status => :unprocessable_entity }
      end
    end
  end

  def add_contact
    user = current_user
    user.add_contact_info(params[:user])


    if user.save!
      respond_to do |format|
        format.js
      end
    else
      respond_to do |format|
        format.json { render :json => {:error_message => user.errors.full_messages}, :status => :unprocessable_entity }
      end
    end
  end

  def add_credit
    user = current_user
    user.add_credit_info(params[:user])

    if user.save!
      respond_to do |format|
        format.js
      end
    else
      respond_to do |format|
        format.json { render :json => {:error_message => user.errors.full_messages}, :status => :unprocessable_entity }
      end
    end
  end


  private

  def sign_user_in(params)
    user = User.authenticate(params[:email], params[:password])
    if user
      session[:user_id] = user.id
      @logged_in = session[:user_id].present?
    else
      puts 'denied'
    end
  end

  def user_params(params)
    new_params = Hash.new
    new_params[:email] = params[:user][:email]
    new_params[:password]= params[:user][:password]
    new_params[:password_confirmation] = params[:user][:password_confirmation]
    new_params
  end

end
