class DeliveryMethod < ActiveRecord::Base

  attr_accessible :name, :address_one, :address_two, :city, :state, :zip

end
