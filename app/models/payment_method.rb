class PaymentMethod < ActiveRecord::Base

  belongs_to :user, dependent: :destroy

  attr_accessible :type, :user_id



end
