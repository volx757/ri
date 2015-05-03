class Inquiry < ActiveRecord::Base

  attr_accessible :name, :email, :content

  #validates :email
  validates_presence_of :email, :content

end
