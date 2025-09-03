// IMPORTS
import displayNote from "./displayNote.js";

/* CLASS */
class Note {
  constructor(title, content, type) {
    this.id = Date.now();
    this.noteTitle = title;
    this.noteContent = content;
    this.noteType = type;
    this.timestamp = Note.generateTimestamp();
  }

  static generateTimestamp() {
    return new Date()
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .replace(",", "");
  }
}

/* DOM ELEMENTS */
const noteForm = document.getElementById("noteForm");
const noteTitleElement = document.getElementById("noteTitle");
const noteContentElement = document.getElementById("noteContent");
const noteTypeElement = document.getElementById("noteType");
const notesContainer = document.getElementById("notes-container");

let savedNotes = JSON.parse(localStorage.getItem("savedNotes")) || [];

const saveNotes = () => {
  localStorage.setItem("savedNotes", JSON.stringify(savedNotes));
};

/* FORM SUBMISSION */
const handleFormSubmit = (e) => {
  e.preventDefault();

  const newNote = new Note(
    noteTitleElement.value,
    noteContentElement.value,
    noteTypeElement.value
  );

  savedNotes.push(newNote);
  saveNotes();
  displayNote(notesContainer, savedNotes);
  noteForm.reset();
};

/* EVENTS */
noteForm.addEventListener("submit", handleFormSubmit);

/* INITIAL RENDER */
displayNote(notesContainer, savedNotes);
