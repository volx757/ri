ActiveAdmin.register Product do

  permit_params :name, :price

  form :html => {:multipart => true} do |f|
    inputs 'Details' do
      input :name
      input :price
      li "Created at #{f.object.created_at}" unless f.object.new_record?
    end
    actions
  end

end
