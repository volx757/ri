class Guest < User
  attr_accessible :type


  def self.find_by_email(email)
    where(:email => email).first
  end

end
