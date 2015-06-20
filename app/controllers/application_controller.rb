class ApplicationController < ActionController::Base

  before_filter :instagram

  protect_from_forgery with: :exception


  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    current_user.present? && !current_user.is_guest?
  end


  def instagram
    @instagram = Instagram.user_recent_media('1119078907', {:count => 6})
  end

end
