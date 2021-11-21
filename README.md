This is a Rails App for displaying products with the following attributes: title, short description, description, initial price and final price.

The homepage is the collection page of the products. Each product is displayed by a card with its title and short description, which is link to the diplay page of each product. In case the user is logged in and has admin privileges, he has the options to edit or delete a product on its card and to create a new product. 

In the display page of each product, its title, short description and description are displayed and when a button is clicked its initial and final prices are displayed. In case of admin user, he has the options to edit or delete the product on its display page.

Information about the App:
* Ruby version 3.0.0
* Rails version 6.1.4.1
* SQLite for database
* HTML5, SCSS and Bootstrap 5 for front end
* Devise was used for user authentication and CanCanCan for user authorization
* Friendly_id is used for generating the slugs of the products
* React.js with Webpacker was used as API for fetching the product prices and display them on product display page after a button is clicked.

In order to run the application:

1. Clone this git repository to your wanted folder
$ git clone https://github.com/elinachar/products_demo.git

2. Move to the directory of the project
$ cd products_demo

3. Install all depedencies for the app, which are defined in the '/Gemfile'
$ bundle install
$ yarn install OR npm install

4. Prepare the database
$ bundle exec rails db:prepare

5. Start the Rails app
$ bundle exec rails s

6. Visit the app in your browser at http://localhost:3000/
At that point there is no product and it should display that there are no products, yet. 

7. Create a new account either by cliking on top-right of the navigation bar Login and then clicking Sign up or by visiting http://localhost:3000/sign-up

8. Connect to database and give your user the admin attribute.
In a new CLI window move to the directory of the app:
$ rails c
> u = User.find_by_email("your-email-address") OR u = User.first (if it is the only user in the db)
> u.admin = true
> u.save
> exit

9. Now that your are logged in and you are admin user you can create products.
- Visit the home page (http://localhost:3000/products) of the app and click "Create New Product" 
- In the 'New Product' page (http://localhost:3000/products/new) fill in the attributes of the product and click 'Create Product'. Keep in mind that both the initial and final prices should be only numbers (floats) without any currency symbol.
- Once the product has successfully created you are redirected to the display page of the product.
- In the display page of the product the title, the sort description and description of the product are shown. Above them there is a button 'Show Product Prices', which when it clicked it displays the intial price and the final price of the project.
- As admin user you can edit or delete the project in its display page. You can also go back to see the collection of the products by clicking 'Back to Products' button or by clicking the 'Products Demo' app title at the top left of the navigation bar.


