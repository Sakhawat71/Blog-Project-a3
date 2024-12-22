
# Blog Management API

A simple API for managing blogs, including features like user management, blog creation, and administrative controls.

## Features

1. **User Management**
   - User registration and login.
   - Admin can block users.

2. **Blog Management**
   - Create, update, delete blogs.
   - Public API to fetch blogs with search, filter, and sort options.

---

## Endpoints

### **Blog Endpoints**

#### 1. **Get All Blogs (Public)**  
`GET /api/blogs`  
Fetches all blogs with options for searching, sorting, and filtering.

- **Query Parameters**:
  - `search`: Filter blogs by title or content.
  - `sortBy`: Field to sort by (e.g., `createdAt`).
  - `sortOrder`: Sorting order (`asc` or `desc`).
  - `filter`: Filter by author ID.


#### 2. **Create a Blog**  
`POST /api/blogs`  
Allows a logged-in user to create a blog.

- **Request**:
```json
{
  "title": "My First Blog",
  "content": "This is my blog content."
}
```

#### 3. **Update a Blog**  
`PATCH /api/blogs/:blogId`  
Allows the author of a blog to update it.

#### 4. **Delete a Blog (Admin)**  
`DELETE /api/blogs/:blogId`  
Allows an admin to delete any blog.

---

### **User Endpoints**

#### 1. **Block User (Admin)**  
`PATCH /api/admin/users/:userId/block`  
Allows an admin to block a user.

---


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sakhawat71/Blog-Project-a3.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - `DB_URI`: MongoDB connection string.
   - `ACCESS_TOKEN_SECRET`: Secret key for JWT.

4. Run the server:
   ```bash
   npm start
   ```
