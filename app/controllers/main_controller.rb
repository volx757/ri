class MainController < ApplicationController

  def index
    @page_title = 'index'
    @instagram = Instagram.user_recent_media("1119078907", {:count => 6})
  end

  def contact
    @message = Message.new(contact_params).save
  end

  def inquiry
    @inquiry = Inquiry.new(inquiry_params).save
    render :nothing => true
  end

  def night
  #  render :layout => false
  end

  private

  def inquiry_params
    params.permit(:name, :email, :content)
  end

  def contact_params
    params.permit(:name, :email, :subject, :content)
  end

end
