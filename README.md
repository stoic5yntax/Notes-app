# 📝 Notes App

A simple and elegant **Notes App** built with **HTML, CSS, and JavaScript**.  
This app allows you to create, edit, delete, and view notes with support for note types, timestamps, and a modal for full note viewing.  
All notes are stored in **localStorage**, so your data persists even after refreshing the page.

---

## 🚀 Features

- ➕ **Add Notes** with title, content, and type (e.g., Idea, Task, Reminder).
- 🗑️ **Delete Notes** easily.
- ✏️ **Edit Notes** (updates note content and timestamp).
- 🔎 **Expand Notes in a Modal** to view full details.
- 🎨 **Dynamic Colors by Note Type** for better visualization.
- 💾 **Persistent Storage** using browser `localStorage`.
- 📅 **Automatic Timestamp** with each note.

---

## 🖼️ Screenshots

### Main Interface
<img width="1862" height="871" alt="image" src="https://github.com/user-attachments/assets/d46b32cd-5c97-4cf2-9b8a-b79d1b3cd427" />


---

## 🛠️ Tech Stack

- **HTML5** – Structure  
- **CSS3** – Styling (Custom theme + type-based colors)  
- **JavaScript (ES6 Modules)** – Core logic & functionality  
- **Bootstrap Icons** – For delete & edit buttons  

---

## 📂 Project Structure

📦 notes-app
┣ 📜 index.html
┣ 📜 style.css
┣ 📜 script.js
┣ 📜 displayNote.js
┣ 📜 README.md

---

## ⚙️ Installation & Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/notes-app.git
Navigate to the project folder:

bash
Copy code
cd notes-app
Open index.html in your browser:

bash
Copy code
open index.html   # macOS
start index.html  # Windows
That’s it 🎉 — no build tools or dependencies required!

📖 Usage
Fill in the title, content, and type of your note.

Click "Add Note".

Notes will appear in the list:

Click 🗑️ to delete.

Click ✏️ to edit.

Click anywhere else on the note to expand in a modal.

Notes remain saved even if you refresh the page.

🎨 Note Types & Colors
Type	Color
Idea	#FF0B55
Task	#CF0F47
Reminder	#FFDEDE
Default	#000000

🔄 Sorting Notes
You can change the sorting logic inside displayNote.js. Example:

js
Copy code
// Newest first
savedNotes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
Options:

Newest → Oldest

Oldest → Newest

Alphabetical (by Title)

By Type

🚧 Future Improvements
 Add search & filter by note type.

 Support markdown formatting inside notes.

 Option to pin important notes.

 Dark/Light mode toggle.

🤝 Contributing
Contributions are welcome!

Fork the project

Create a new branch: git checkout -b feature-branch

Commit your changes: git commit -m "Add new feature"

Push to branch: git push origin feature-branch

Open a Pull Request

📜 License
This project is licensed under the MIT License.
You are free to use, modify, and distribute this project with attribution.

👨‍💻 Author
Developed by Your Name **Raj Changappa**
If you like this project, give it a ⭐ on GitHub!
