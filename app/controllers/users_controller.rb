class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])

    if @user.save
      redirect_to root_url, :notice => 'Signed up!'
    else
      respond_to do |format|
        puts 'asdasdasdsad'
        puts   @user.errors.full_messages
        format.json { render :json => {:error_message => @user.errors.full_messages}, :status => :unprocessable_entity }
      end
    end
  end

  def update_guest
    Guest.find(params[:guest][:id]).write(params[:guest])
    render :nothing => true
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

end
