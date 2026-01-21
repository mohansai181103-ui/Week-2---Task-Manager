# Interactive Task Manager

## Project Description
The Interactive Task Manager is a responsive web application that allows users to create, manage, and organize daily tasks efficiently. The application supports adding, editing, deleting, completing, and reordering tasks, with persistent storage using the browser’s localStorage. The UI is designed to be clean, accessible, and user-friendly, following modern web design principles.

---

## Project Objectives
- Build a fully functional task management application using vanilla JavaScript
- Practice DOM manipulation and event handling
- Implement data persistence without a backend
- Create a responsive and accessible user interface
- Follow clean code structure and modular design

---

## Features
- Add, edit, delete, and complete tasks
- Due date and priority selection (Low, Medium, High)
- Task search functionality
- Filter tasks (All, Active, Completed)
- Task statistics (total and completed tasks)
- Drag-and-drop task reordering
- Dark / Light mode toggle
- LocalStorage data persistence
- Backup and restore tasks using JSON
- Responsive layout for mobile and desktop devices

---

## Technologies Used
- HTML5 (Semantic elements)
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (DOM manipulation, events, array methods)
- Browser localStorage
- Git & GitHub for version control

---

## Project Structure
```
Interactive-Task-Manager/
│── index.html
│── css/
│ ├── style.css
│ └── theme.css
│── js/
│ ├── app.js
│ ├── ui.js
│ ├── storage.js
│ └── utils.js
│── README.md
```

---

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Manideep-Dasari/Interactive-Task-Manager.git
   ```
2. Open the project folder
3. Run the application by opening index.html in a browser
   (or use VS Code Live Server)

---

## Code Structure Explanation
- **index.html:** Defines the structure of the application using semantic HTML elements
- **style.css:** Handles layout, spacing, responsiveness, and UI styling
- **theme.css:** Manages light and dark theme variables
- **app.js:** Core application logic (CRUD operations, filters, events)
- **ui.js:** Handles DOM rendering and UI updates
- **storage.js:** Manages saving, loading, backup, and restore of tasks
- **utils.js:** Utility functions such as unique ID generation

---

## Technical Requirements Implementation
- **DOM Manipulation:** Dynamic task rendering and updates
- **Event Handling:** Form submission, clicks, keyboard shortcuts, drag & drop
- **Array Methods:** map, filter, splice, find for task management
- **localStorage:** Persistent storage for tasks
- **Form Validation:** Prevents empty or invalid task entries
- **Dynamic Updates:** UI updates without page reload
- **Responsive Design:** Works on mobile, tablet, and desktop screens

---


## Conclusion
This project demonstrates strong fundamentals in HTML, CSS, and JavaScript, focusing on clean UI, modular code, and real-world functionality without external libraries.


