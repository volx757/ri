class Pack < ActiveRecord::Base

  attr_accessible :name, :description, :image
  has_attached_file :image, :styles => { :medium => '400x400>', :thumb => '150x150>' }, :default_url => "/images/packs/missing.png"

  validates_presence_of :name, :description
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  
end
