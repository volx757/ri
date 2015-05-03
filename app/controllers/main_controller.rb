class MainController < ApplicationController

  def index

  end

  def contact
  end

  def inquiry
    @inquiry = Inquiry.new(inquiry_params).save
    render :nothing => true
  end

  private

  def inquiry_params
    params.permit(:name, :email, :content)
  end

end
