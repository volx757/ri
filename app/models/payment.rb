class Payment < ActiveRecord::Base

  belongs_to :user
  belongs_to :cart

  attr_accessible :customer_id, :cart_id, :amount

end
