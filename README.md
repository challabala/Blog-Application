# 📝 CA Monk – Blog Application

A modern **Blog Application** built with **React (JavaScript)**, **TanStack Query**, **Tailwind CSS**, **shadcn/ui**, and **JSON Server**.  
The project demonstrates proper server-state management, clean UI components, and responsive design.

---

## 🚀 Live Demo
👉 https://your-live-demo-link.vercel.app

## 📂 GitHub Repository
👉 https://github.com/your-username/camonk-interview

---

## 🛠️ Tech Stack

- **Frontend:** React, TanStack Query, Tailwind CSS, shadcn/ui  
---

## ✨ Features

- Fetch all blogs and view blog details
- Create new blog posts
- Server-state management with TanStack Query
- Query invalidation after mutations
- UI built with shadcn components (`Card`, `Button`, `Input`, `Skeleton`)
- Skeleton loaders for loading states
- Error boundaries for graceful error handling
- Fully responsive two-column layout

---

## 📁 Project Structure

src/
├── api/blogs.js
├── components/
│ ├── BlogList.jsx
│ ├── BlogCard.jsx
│ ├── BlogDetail.jsx
│ └── CreateBlogForm.jsx
├── pages/Home.jsx
├── lib/queryClient.js
├── App.jsx
├── main.jsx
└── index.css

---

## 🔌 API Endpoints

- `GET /blogs`
- `GET /blogs/:id`
- `POST /blogs`

---

## ⚙️ Setup

git clone : 
npm install
npm run server
npm run dev
