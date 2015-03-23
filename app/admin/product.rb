ActiveAdmin.register Product do

  permit_params :name, :product_id, :price

  form :html => {:multipart => true} do |f|
    inputs 'Details' do
      input :name
      input :product_id, label: 'Product ID'
      input :price
      li "Created at #{f.object.created_at}" unless f.object.new_record?
    end
    actions
  end

end
