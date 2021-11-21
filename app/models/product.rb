class Product < ApplicationRecord
  validates :title, presence:true
  validates :initial_price, numericality: true
  validates :final_price, numericality: true


    extend FriendlyId
    friendly_id :title, use: :slugged
  
    def should_generate_new_friendly_id? #will change the slug if the title changed
      title_changed?
    end
end
