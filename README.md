# Online Shoe Store using Context API
## About Project
This project is made using React JS. In previous task I created a shoe store using useState. In this assignment I updated that project by using Context API for managing cart data and added a payment page.
The main aim of this project is to understand how Context API works and how we can share data between different pages without passing props again and again.

## Features
- Display different shoes
- Add shoes into shopping cart
- Increase and decrease quantity
- Remove item from cart
- Total price calculation
- Proceed to Payment button
- Payment page
- Cart items shown in payment page using Context API
- Credit card payment form
- Continue Shopping button
- Responsive design

## Technologies Used

- React JS
- Context API
- React Router DOM
- JavaScript
- CSS
- Vite

## Folder Structure

-src{app.css,app.jsx,index.css,main.jsx,data.js}
-components{Navbar.jsx,ShoeCard.jsx,Cart.jsx,CartContext.jsx}
-pages{home.jsx,payment.jsx}

## How to Run
1.First install all packages:npm install
2.Start the project:npm run dev
3.Open browser and visit:http://localhost:5173

## What I Learned
While doing this assignment I learn how Context API works in React. Before this I was using useState only inside one component but now I understand how to share the cart data with different pages.
I also learn how React Router helps to move from shopping page to payment page without reloading.
Another thing I learn is basic form validation and handling user input.

## Challenges I Faced
At first I was little confused about Context API because I was not understanding why we need Provider and useContext.
After some practice I understand that Context helps to avoid passing props to many components.
I also got some errors while importing files and setting routes. Images was also not showing because my file path was wrong. After fixing the folder structure everything started working.
Making the payment page and showing cart items there also take some time because I forgot to use Context inside the Payment component.

## Future Improvements
Some features can still be added like:
- Online payment gateway
- User login
- Search shoes
- Filter by brand
- Order history
- Better form validation

## Conclusion
This assignment helped me understand Context API in a better way. Now I know how to share data between components and different pages without using props everywhere. I also got more confidence in React Router and handling forms.
Overall it was a good practice project and helped me understand React concepts better.
