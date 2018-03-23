const contactId = window.location.pathname.split('/')[2];
const [whereToInsert] = document.getElementsByClassName("pv-content__right-rail right-rail");
const notesDiv = document.createElement("div");
let prevNoteText = '';
let resizerFakeDiv = document.createElement('div');
let noteTextArea;

resizerFakeDiv.classList.add('resizer-div', 'common');
document.body.appendChild(resizerFakeDiv);

notesDiv.innerHTML =
`Notes
<div>
<textarea id="note-text-area" class="common" placeholder="Enter any notes here"></textarea>
</div>
<button id="note-save-btn">
Save
</button>`;

//change width of text area div to fit column width

whereToInsert.insertBefore(notesDiv, whereToInsert.firstChild);

noteTextArea = document.getElementById("note-text-area");

chrome.storage.sync.get([contactId], function (idsInStorage) {
  prevNoteText = idsInStorage[contactId];
  noteTextArea.value = prevNoteText || '';
});

document.getElementById("note-save-btn").addEventListener("click", saveNote)

function saveNote() {
  const contactObj = {}
  newNoteVal = document.getElementById('note-text-area').value;
  contactObj[contactId] = newNoteVal;
  chrome.storage.sync.set(contactObj);
  //gray out button
}

noteTextArea.addEventListener('keyup', function () {
  resizerFakeDiv.innerHTML = this.value + '\n';
  this.style.height = resizerFakeDiv.getBoundingClientRect().height * .9 + 'px';
}, false);

noteTextArea.addEventListener('keypress', function () {
  //make button blue
}, false);
