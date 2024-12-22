
## Blog Project API

A simple API for managing blogs, including features like user management, blog creation, and administrative controls.

## live link

https://blog-project-71.vercel.app/

## Features

1. **User Management**
    - User registration and login.

2. **Blog Management**
    - Create, update, delete blogs.
    - Public API to fetch blogs with search, filter, and sort options.

3. **Admin Actions**
    - Admin can block a user by updating the `isBlocked` property to `true`.
    - Admin can delete any blog by its ID.


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

#### 4 **Delete Blog**
`DELETE /api/blogs/:id`
Allows a logged-in user to delete their own blog by its ID.


---

### **Admin Endpoints**

#### 1. **Block User (Admin)**  
`PATCH /api/admin/users/:userId/block`  
Allows an admin to block a user.

#### 2. **Delete a Blog (Admin)**  
`DELETE /api/blogs/:blogId`  
Allows an admin to delete any blog.


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
