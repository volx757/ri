module Uploadable
  extend ActiveSupport::Concern

  def upload(path_to_file, filename)
    obj = S3_BUCKET.objects[filename].write(:file => path_to_file)
    obj.public_url.to_s
  end

end