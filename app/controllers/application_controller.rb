class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception
  before_filter :instagram

  def instagram
    @instagram = Instagram.user_recent_media('1119078907', {:count => 6})
  end

end
