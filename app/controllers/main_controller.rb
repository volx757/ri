class MainController < ApplicationController

  def index
  end

  def purchase

  end

  def about
  end

  def market
  end

  def contact
    @message = Message.new(contact_params).save
  end

  private

  def contact_params
    params.permit(:name, :email, :subject, :content)
  end

end
