# Better.com Clone - Next.js Project

**By Swastik Shetty**

This project is a multi-page web application built with **React** and **Next.js**, designed to replicate the design and core functionality of several key pages from the Better.com website. It serves as a demonstration of front-end development skills, including responsive design, component-based architecture, and interactive UI implementation.

---

## 🚀 Features

- **Pixel-Perfect Replication**: A high-fidelity clone of four main pages from Better.com.  
- **Interactive Mortgage Calculator**: A fully functional mortgage calculator that computes monthly payments in real-time based on user inputs.  
- **Responsive Design**: Fully optimized for a seamless experience across desktops, tablets, and mobile devices.  
- **Component-Based Architecture**: Built using reusable React components for maintainability and scalability.  
- **Modern Tech Stack**: Utilizes Next.js for server-side rendering and routing, and Tailwind CSS for styling.  

---

## 🛠️ Tech Stack

- **Framework**: Next.js  
- **Library**: React  
- **Styling**: Tailwind CSS  
- **Video Embedding**: react-youtube  

---

## 📂 Project Structure

The project follows the standard Next.js App Router structure:

```
/
├── app/
│   ├── page.js                     # Home Page
│   ├── about-us/page.js            # About Us Page
│   ├── mortgage-calculator/page.js # Mortgage Calculator Page
│   ├── start/page.js               # Start Page
│   ├── layout.js                   # Main App Layout
│   └── globals.css                 # Global CSS Styles
├── components/
│   ├── Header.js                   # Reusable Header Component
│   ├── Footer.js                   # Reusable Footer Component
│   └── MortgageCalculator.js       # Interactive Calculator Component
├── public/
│   └── ...                         # Static assets
└── package.json
```

---

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### ✅ Prerequisites

You need to have **Node.js** and **npm** (or yarn) installed on your system:

- Node.js (v18.x or later recommended)  
- npm  

---

### 📥 Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd better-clone
```

Install dependencies:

```bash
npm install
```

---

### ▶️ Running the Development Server

Once the installation is complete, you can start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  
The application will automatically reload if you make any changes to the source files.

---

## 📑 Pages Implemented

- **Home** (`/`): The main landing page featuring the hero section, an introduction to the company, and a FAQ section.  
- **About Us** (`/about-us`): A page detailing the company's vision, mission, and history with a timeline.  
- **Mortgage Calculator** (`/mortgage-calculator`): An interactive page that allows users to estimate their monthly mortgage payments.  
- **Start** (`/start`): A simple starting page for users looking to begin the mortgage application process.  

---
