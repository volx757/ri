class Guest < User

  attr_accessible :session_id

  validates_presence_of :session_id
  validates_uniqueness_of :session_id


  def write(params)
    self.email = params[:email] if params[:email]
    self.password = params[:password] if params[:password]
    self.password_confirmation = params[:password_confirmation] if params[:password_confirmation]
    self.address = params[:address] if params[:address]
    self.address_two = params[:address_two] if params[:address_two]
    self.city = params[:city] if params[:city]
    self.state = params[:state] if params[:state]
    self.save!
  end

end
