class Guest < User

  attr_accessible :type
  
  def cart
    carts.last
  end

  def self.find_by_email(email)
    where(:email => email).first
  end

end
