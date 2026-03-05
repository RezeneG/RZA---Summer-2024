
_____________________________________________________________________________________________________________________________________________________________________________________________
</> Markdown


---

This README gives:

	- Project overview  
	- Folder structure  
	- Setup instructions for both backend & frontend  
	- Features & future improvements  

---
_____________________________________________________________________________________________________________________________________________________________________________________________

# Riget Zoo Adventures (RZA) Full-Stack Web Application

## Overview

Riget Zoo Adventures (RZA) offers a safari-style wildlife zoo, an on-site hotel, and educational visits. This project is a **full-stack web application** developed using **React, Vite, Express, MongoDB, and Stripe** for payments.

 The application allows users to:

- Register and log in  
- Book zoo tickets  
- Book hotel stays  
- Make secure payments using Stripe  
- View loyalty points and rewards  

This project was developed as part of **Brooklands Technical College - Digital Software Development coursesework**.

---
_____________________________________________________________________________________________________________________________________________________________________________________________

## Folder Structure

RZA/
├── Backend/
│ ├── server.js
│ ├── .env
│ ├── models/
│ │ ├── User.js
│ │ ├── Ticket.js
│ │ └── HotelBooking.js
│ ├── routes/
│ │ ├── auth.js
│ │ ├── booking.js
│ │ └── payment.js
│ └── package.json
│
├── Frontend/
│ ├── src/
│ │ ├── api/
│ │ │ ├── api.js
│ │ │ ├── auth.js
│ │ │ └── booking.js
│ │ ├── assets/
│ │ │ ├── logo.png
│ │ │ ├── safari.jpg
│ │ │ └── hotel.jpg
│ │ ├── components/
│ │ │ ├── Header.jsx
│ │ │ ├── Register.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── BookTicket.jsx
│ │ │ └── Payment.jsx
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ ├── Success.jsx
│ │ │ └── Cancel.jsx
│ │ ├── App.jsx
│ │ └── App.css
│ └── package.json
│
└── README.md

_____________________________________________________________________________________________________________________________________________________________________________________________
---

## Technologies Used

	### Backend
		- **Node.js & Express** – Server-side API  
		- **MongoDB & Mongoose** – Database  
		- **JWT** – Authentication  
		- **Stripe** – Payment integration  
		- **Nodemon** – Dev server  

	### Frontend
		- **React** – UI library  
		- **Vite** – Frontend build tool  
		- **Axios** – API requests  

---

_____________________________________________________________________________________________________________________________________________________________________________________________

## Setup Instructions

### 1. Backend Setup

1. Navigate to backend folder:

</> Bash

	cd Backend

2.Install dependencies:

</> Bash

	npm install

3.Create .env file with:

	PORT=5000
	MONGO_URI=<Your MongoDB Atlas URI>
	JWT_SECRET=<Your JWT Secret>
	STRIPE_SECRET_KEY=<Your Stripe Secret Key>

4.Start server:

</> Bash

	npm run dev
____________________________________________________________________________________________________________________________________________________________________________________________

	- Server runs on http://localhost:5000

	- Should display MongoDB Connected
____________________________________________________________________________________________________________________________________________________________________________________________

2.Frontend Setup

1.Navigate to frontend folder:

</> Bash

	cd Frontend

2.Install dependencies:

</> Bash

	npm install

3. Start dev server:

</> Bash

	npm run dev
____________________________________________________________________________________________________________________________________________________________________________________________

	- Frontend runs on http://localhost:5173/
_____________________________________________________________________________________________________________________________________________________________________________________________

3.Testing the Application

  - Register a new user

  - Log in

  - Book zoo tickets or hotel stays

  - Use Stripe test card for payment: 4242 4242 4242 4242 (any future date/CVC/ZIP)

  - After payment, success/cancel pages display appropriate messages
_____________________________________________________________________________________________________________________________________________________________________________________________

Features

User Authentication – Register/Login with JWT

Zoo & Hotel Booking – Book tickets and rooms

Payment Integration – Stripe checkout in test mode

Loyalty Points – Rewards for returning users

Responsive Design – Works on desktop & mobile

Routing – React Router for /, /book, /success, /cancel, /login, /register

_____________________________________________________________________________________________________________________________________________________________________________________________

Screenshots


Home Page

Booking Page

Payment Success

Payment Cancel

_____________________________________________________________________________________________________________________________________________________________________________________________

Notes

  - Make sure MongoDB Atlas is running and your .env values are correct

  - Stripe is in test mode; no real payments will be processed

  - Frontend & backend communicate via Axios

  - The project can be deployed to Heroku/Vercel for full production experience
_____________________________________________________________________________________________________________________________________________________________________________________________

Author

  - Developed by: Rezene Ghebrehiwot

  - Course:Digital Software Development - Brookland Technical College

  - Email: reneze.ghebrehiwot@brooklands.ac.uk

_____________________________________________________________________________________________________________________________________________________________________________________________

Future Enhancements

  - Admin dashboard for managing tickets and bookings

  - Email notifications for bookings

  - Advanced loyalty program with tiers and rewards

  - Mobile-friendly UI

  - Additional payment methods (PayPal, Apple Pay, etc.)

---
