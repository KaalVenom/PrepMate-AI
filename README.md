![image](https://github.com/user-attachments/assets/e8936597-16c6-411f-927a-13768f897b58)


# PrepMate-AI  (AI-Driven Mock Interview Platform)

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

## FOLDER STRUCTURE
```plaintext
PREPMATE AI/
├── app/                # Application structure for pages and components
│ ├── (auth)            # Authentication-related routes
│ ├── about-us/         # About Us page
│ ├── api/              # API routes
│ ├── dashboard/        # User dashboard-related pages
│ ├── how-it-works/     # Information on how the platform works
│ ├── fonts/            # Custom fonts for the app
│ ├── favicon.ico       # Favicon for the website
│ ├── globals.css       # Global styles
│ ├── layout.js         # Application layout component
│ └── page.js           # Main entry point for the homepage
├── components/         # Reusable UI components
│ └── ui/               # Specific UI components
├── lib/                # Shared libraries and utility functions
├── public/             # Static assets (images, files, etc.)
├── utils/              # Helper functions and shared utilities
├── .env.local          # Environment-specific configuration
├── drizzle.config.js   # Drizzle ORM configuration
├── middleware.js       # Custom middleware for handling requests
├── next.config.mjs     # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```





