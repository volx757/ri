class MainController < ApplicationController

  def landing
  end

  def index
    @page_title = 'index'
  end

  def contact
    @message = Message.new(contact_params).save!
  end

  def inquiry
    @inquiry = Inquiry.new(inquiry_params).save!
    render :nothing => true
  end

  def night
  end

  private

  def inquiry_params
    params.permit(:name, :email, :content)
  end

  def contact_params
    params.permit(:name, :email, :subject, :content)
  end

end
