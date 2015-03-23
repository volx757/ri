ActiveAdmin.register Cleanse do

  permit_params :name, :description, :price, :image, :product_id

  form :html => {:multipart => true} do |f|
    inputs 'Details' do
      input :name
      input :description, label: 'Description'
      li "Created at #{f.object.created_at}" unless f.object.new_record?
      input :price
      input :product_id, label: 'Product ID'
      input :image, :as => :file, :hint => image_tag(f.object.image.url)
    end
    actions
  end

end
