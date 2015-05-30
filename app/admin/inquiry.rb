ActiveAdmin.register Inquiry do

  actions :all, :except => [:new, :create, :destroy, :show, :edit, :update]

  filter :name
  filter :email

  config.per_page = 20
  config.sort_order = "id_asc"
  config.batch_actions = false

  index do
    column :id
    column :name
    column :email
    column :content
    column :answered
  end

end 