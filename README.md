![image](https://github.com/user-attachments/assets/e8936597-16c6-411f-927a-13768f897b58)

##PrepMate AI
# AI-Driven Mock Interview Platform

**Welcome to PrepMate AI (AI-Driven Mock Interview Platform)**  
This platform empowers developers by offering tailored, AI-based interview experiences that mimic real-world scenarios, ensuring comprehensive preparation for technical and behavioral interviews.

---


## Overview
The PrepMate AI App allows users to practice technical and behavioral interview questions in an interactive environment. The app generates custom questions based on user preferences and delivers instant feedback on answers to help users improve their interview skills.

## Features
- **AI-Driven Questions**: Get custom-tailored interview questions based on your profile and feedback.
- **User Authentication**: Secure login and signup using Clerk.
- **Real-Time Feedback**: Answer interview questions and receive immediate feedback with the help of Gemini AI.
- **Interactive UI**: A responsive, user-friendly interface built with React.
- **Data Persistence**: User data and interview history managed through Drizzle ORM.

## Technologies Used
- **[Next.js](https://nextjs.org/)**: Framework for server-rendered React applications.
- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
- **[Drizzle ORM](https://drizzle.team/)**: ORM for managing database interactions.
- **[Gemini AI](https://gemini.ai/)**: AI API for generating interview questions and analyzing answers.
- **[Clerk](https://clerk.dev/)**: Authentication and user management.

## Folder Structure.
PREPMATE AI/
├── app/               ______ # Application structure for pages and components
│   ├── (auth)           ______  # Authentication-related routes
│   ├── about-us/        ______  # About Us page
│   ├── api/             ______  # API routes
│   ├── dashboard/       ______  # User dashboard-related pages
│   ├── how-it-works/    ______  # Information on how the platform works
│   ├── fonts/           ______  # Custom fonts for the app
│   ├── favicon.ico      ______  # Favicon for the website
│   ├── globals.css      ______  # Global styles
│   ├── layout.js        ______  # Application layout component
│   └── page.js          ______  # Main entry point for the homepage
├── components/         ______   # Reusable UI components
│   └── ui/              ______  # Specific UI components
├── lib/                 ______  # Shared libraries and utility functions
├── public/              ______  # Static assets (images, files, etc.)
├── utils/               ______  # Helper functions and shared utilities
├── .env.local           ______  # Environment-specific configuration
├── drizzle.config.js   ______   # Drizzle ORM configuration
├── middleware.js        ______  # Custom middleware for handling requests
├── next.config.mjs      ______  # Next.js configuration
├── tailwind.config.js   ______  # Tailwind CSS configuration
├── tsconfig.json        ______  # TypeScript configuration
└── README.md            ______  # Project documentation


