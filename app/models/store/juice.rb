class Juice < Product

  before_create :set_type

  belongs_to :pack


  def set_type
    self.type = 'Juice'
  end

end
