class Guest < User

  before_create :write_session_id

  attr_accessible :session_id

  validates_presence_of :session_id
  validates_uniqueness_of :session_id

  def write_session_id
    self.update_attribute :session_id, DateTime.now.to_s
    self.save!
  end


end
