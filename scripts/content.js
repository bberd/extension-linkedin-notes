const insertSection = document.getElementsByClassName("pv-content__right-rail right-rail");
const notes = document.createElement("div");
notes.innerHTML += 'NOTES SECTION';

insertSection.innerHTML += notes;
// insertSection.insertBefore(notes, insertSection.firstChild);
