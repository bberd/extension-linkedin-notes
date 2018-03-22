let whereToInsert = document.getElementsByClassName("pv-content__right-rail right-rail");
[whereToInsert] = whereToInsert;
const notes = document.createElement("div");
notes.innerHTML = `
  Notes
  <div>
    <textarea id='textAreaNote' name="note" placeholder="Enter any notes here">
    </textarea>
  </div>
  <button id="noteSaveBtn">Save</button>
`;
console.log(whereToInsert, notes);
whereToInsert.insertBefore(notes, whereToInsert.firstChild);

document.getElementById("noteSaveBtn").addEventListener("click", saveNote)

function saveNote() {
  var notesText = document.getElementById('textAreaNote').value;
  console.log(notesText);
}
