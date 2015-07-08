class ApplicationController < ActionController::Base

  before_filter :instagram

  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :guest?

  def current_user
    @current_user ||= (User.find(session[:user_id]) if session[:user_id]) || (Guest.where('session_id = ?', session[:guest_key]).last if session[:guest_key])
  end

  def logged_in?
    current_user.present?
  end

  def guest?
    current_user.is_guest?
  end


  def instagram
    @instagram = Instagram.user_recent_media('1119078907', {:count => 6})
  end

end
