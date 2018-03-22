let whereToInsert = document.getElementsByClassName("pv-content__right-rail right-rail");
[whereToInsert] = whereToInsert;
const notes = document.createElement("div");
notes.innerHTML = `
  Notes
  <div>
    <textarea name="note">
    </textarea>
  </div>
`;
console.log(whereToInsert, notes);
whereToInsert.insertBefore(notes, whereToInsert.firstChild);
//whereToInsert.prepend(notes);
