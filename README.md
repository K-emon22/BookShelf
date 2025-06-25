# 📚 Bookshelf

**Live Site**: [https://emons-bookshelf.netlify.app](https://emons-bookshelf.netlify.app/)


**Server Repo**: [BookShelf Server](https://github.com/K-emon22/BookShelf-Server.git)

---

## 📘 Project Overview

**Bookshelf** is a full-stack web application that allows book lovers to organize and share their reading journey. Users can catalog books they’ve read, are currently reading, or want to read. They can also post reviews, upvote favorite books, and visualize their progress.

---

## 🚀 Key Features

- 🔐 **Authentication**:
  - Firebase Authentication (Email/Password + Google) 
  - JWT-based protected routes
- 📚 **Bookshelf Management**:
  - Add/update/delete books
  - Set reading status (Want-to-Read, Reading, Read)
  - Filter/search books by title, author, or status
- 💬 **Review System**:
  - Leave one review per book
  - Edit/delete own reviews
  - Reviews include name, image, rating, time
- ⬆️ **Upvote System**:
  - Upvote others' books (excluding your own)
  - Upvotes affect popular books listing
- 📈 **Reading Tracker**:
  - Status updates (Want-to-Read → Reading → Read)
  - Chart showing book category breakdown in Profile
- 🖥️ **Responsive UI**:
  - Tailwind CSS styling
  - Mobile, tablet, desktop optimized
- 🎞️ **Animation**:
  - Smooth transitions using Framer Motion
- ⚠️ **Error & Loading Handling**:
  - Custom 404 page
  - Animated loader on API requests

---

## 🛠️ Tech Stack

### 🔧 Frontend

- **React**
- **Tailwind CSS**
- **Framer Motion**
- **React Router DOM**
- **Axios**
- **React Toastify**
- **SweetAlert2**

### 🔧 Backend

- **Node.js**
- **Express.js**
- **MongoDB**
- **CORS**, **dotenv**, **JWT**

### 🔐 Authentication

- Firebase Auth (Email/Password + Google)
- JWT Token generation & verification
- Private routes protection

---

## 🔄 Pages & Components

- **Home**: Banner, popular books, categories, extra sections
- **Bookshelf**: Filter/search books
- **Book Details**: Info, upvote, review, reading tracker
- **Add/Update Book** (🔒)
- **My Books** (🔒)
- **Profile** (🔒): Summary + category chart
- **Login/Register**

---
