class MainController < ApplicationController

  def index
  #  inquiry
  end


  def contact
  end

  def inquiry
    @inquiry = Inquiry.new(inquiry_params)

  end

  private

  def inquiry_params
    params.permit(:name, :email, :content)
  end


end
