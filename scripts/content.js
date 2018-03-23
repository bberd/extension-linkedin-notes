const contactId = window.location.pathname.split('/')[2];
const [whereToInsert] = document.getElementsByClassName("pv-content__right-rail right-rail");
const notesDiv = document.createElement("div");
let prevNoteText = '';

notesDiv.innerHTML =
`Notes
  <div>
    <textarea id='noteTextArea' name="note" placeholder="Enter any notes here"></textarea>
  </div>
  <button id="noteSaveBtn">
    Save
  </button>`;

whereToInsert.insertBefore(notesDiv, whereToInsert.firstChild);

chrome.storage.sync.get([contactId], function (idsInStorage) {
  prevNoteText = idsInStorage[contactId];
  document.getElementById("noteTextArea").value = prevNoteText || '';
});

document.getElementById("noteSaveBtn").addEventListener("click", saveNote)

function saveNote() {
  const contactObj = {}
  newNoteVal = document.getElementById('noteTextArea').value;
  contactObj[contactId] = newNoteVal;
  chrome.storage.sync.set(contactObj);
}
