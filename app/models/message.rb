class Message < ActiveRecord::Base
  attr_accessible :name, :email, :subject, :content
  validates_presence_of :email, :content
end