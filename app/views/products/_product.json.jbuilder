json.extract! product, :id, :title, :short_description, :description, :initial_price, :final_price, :slug, :created_at, :updated_at
json.url product_url(product, format: :json)
