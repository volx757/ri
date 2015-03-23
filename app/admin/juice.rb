ActiveAdmin.register Juice do

  permit_params :name, :description, :price, :image

  form :html => {:multipart => true} do |f|
    inputs 'Details' do
      input :name
      input :description, label: 'Description'
      li "Created at #{f.object.created_at}" unless f.object.new_record?
      input :price
      input :image, :as => :file, :hint => image_tag(f.object.image.url)
    end
      actions
  end

end
