class SessionsController < ApplicationController

  def create
    user = User.authenticate(params[:email], params[:password])
    if user
      session[:user_id] = user.id
      @logged_in = session[:user_id].present?
      respond_to do |format|
        format.js { flash.now[:notice] = "Logged In (click to close)" }
      end
    else
      respond_to do |format|
        format.js { flash.now[:notice] = "Invalid email or password" }
      end
    end

  end

  def destroy
    session[:user_id] = nil
    @logged_in = false
    render :nothing => true
  end

  def gon
    gon.watch.logged_in = session[:user_id].present?
    render :nothing => true
  end

end


