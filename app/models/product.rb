class Product < ActiveRecord::Base

  attr_accessible :name, :product_id, :price

  validates_uniqueness_of :product_id

  

end
