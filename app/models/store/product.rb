class Product < ActiveRecord::Base

  PACK_PRODUCT_ID = 6

  attr_accessible :name, :description, :price, :image, :type

  has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/


  scope :juices, -> { where(type: 'Juice') }
  scope :cleanses, -> { where(type: 'Cleanse') }

  def self.types
    %w(Cleanse Juice)
  end

  def self.process(product)
    if is_pack?(product)
      assemble_pack(product)
      return PACK_PRODUCT_ID
    else
      return product
    end
  end

  private


  def self.assemble_pack(product_ids)
    ids = parse_juice_pack(product_ids)
    create_pack(ids)
  end

  def self.create_pack(ids)
    Pack.create(:quantity => ids.length, :juice_one_id => ids[0], :juice_two_id => ids[1], :juice_three_id => ids[2],
                :juice_four_id => ids[3], :juice_five_id => ids[4], :juice_six_id => ids[5], :juice_seven_id => ids[6],
                :juice_eight_id => ids[7], :juice_nine_id => ids[8], :juice_ten_id => ids[9], :juice_eleven_id => ids[10],
                :juice_twelve_id => ids[11])
  end

  def self.is_pack?(product)
    product.is_a? String
  end


  def self.parse_juice_pack(ids)
    ids.split(',')
  end

end
