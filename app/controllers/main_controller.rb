class MainController < ApplicationController

  def landing
  end

  def landing_post
    @contact = Contact.new(:email => params[:email])
    respond_to do |format|
      if @contact.save
        format.json { render json: true }
      else
        format.json { render json: @contact.errors.full_messages.to_json, status: :unprocessable_entity }
      end
    end
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

  private

  def inquiry_params
    params.permit(:name, :email, :content)
  end

  def contact_params
    params.permit(:name, :email, :subject, :content)
  end

end
