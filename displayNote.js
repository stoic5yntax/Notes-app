export default function displayNote(notesContainer, savedNotes) {
  notesContainer.innerHTML = "";

  // Limit words in notes section
  const clipContent = (text, n = 100) => {
    const words = text.split(/\s+/);
    return words.length > n ? words.slice(0, n).join(" ") + "..." : text;
  };

  // newest notes first
  savedNotes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  // Render Notes
  savedNotes.forEach((note) => {
    const { id, noteTitle, noteContent, noteType, timestamp } = note;

    const li = document.createElement("li");
    li.className = "note";
    li.dataset.id = id;

    li.innerHTML = `
      <h3 class="note__title">${noteTitle}</h3>
      <div class="note__details">
        <small>${timestamp}</small>
        <span class="note-type note-type--${noteType}">${noteType}</span>
      </div>
      <p class="note__body">${clipContent(noteContent)}</p>
      <div class="note__actions">
        <button class="note__btn note__btn--delete" aria-label="Delete">
          <i class="bi bi-trash-fill"></i>
        </button>
        <button class="note__btn note__btn--edit" aria-label="Edit">
          <i class="bi bi-pencil-square"></i>
        </button>
      </div>
    `;

    notesContainer.appendChild(li);
  });

  // Event delegation
  notesContainer.onclick = (e) => {
    const li = e.target.closest(".note");
    if (!li) return;

    const id = Number(li.dataset.id);

    // Delete
    if (e.target.closest(".note__btn--delete")) {
      const index = savedNotes.findIndex((n) => n.id === id);
      if (index !== -1) savedNotes.splice(index, 1);

      localStorage.setItem("savedNotes", JSON.stringify(savedNotes));
      displayNote(notesContainer, savedNotes);
    }

    // Edit
    if (e.target.closest(".note__btn--edit")) {
      const noteToEdit = savedNotes.find((n) => n.id === id);
      if (!noteToEdit) return;

      document.getElementById("noteTitle").value = noteToEdit.noteTitle;
      document.getElementById("noteContent").value = noteToEdit.noteContent;
      document.getElementById("noteType").value = noteToEdit.noteType;

      // Remove old note
      const index = savedNotes.findIndex((n) => n.id === noteToEdit.id);
      savedNotes.splice(index, 1);
      localStorage.setItem("savedNotes", JSON.stringify(savedNotes));
      displayNote(notesContainer, savedNotes);
    } else {
      // expand modal
      const noteToView = savedNotes.find((n) => n.id === id);
      if (noteToView) showFullNote(noteToView);
    }
  };

  function showFullNote(note) {
    const modal = document.createElement("div");
    modal.className = "note-modal";

    modal.innerHTML = `
     <div class="note-modal__content">
        <button class="note-modal__close" aria-label="Close">&times;</button>
        <h2>${note.noteTitle}</h2>
        <div class="li-details">
            <small>${note.timestamp}</small>
            <span class="note-type note-type--${note.noteType}">${note.noteType}</span>
        </div>
        <p>${note.noteContent}</p>
      </div>
    `;

    document.body.appendChild(modal);
    document.body.classList.add("modal-open"); // blur + prevent scroll

    //   Close the modal
    const closeModal = () => {
      if (document.body.contains(modal)) {
        document.body.removeChild(modal);
        document.body.classList.remove("modal-open");
      }
    };

    modal.querySelector(".note-modal__close").onclick = closeModal;
    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };
  }
}
