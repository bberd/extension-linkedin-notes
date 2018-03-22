let insertSection = document.getElementsByClassName("pv-content__right-rail right-rail");
insertSection = Array.prototype.slice.call(insertSection)[0];
var insertSection2 = "h2[contains(text(),'Contact and Personal Info')]"
const notes = document.createElement("div");
notes.innerHTML += 'NOTES SECTION';
console.log(insertSection);
//console.log(insertSection2);
//insertSection.innerHTML += notes.innerHTML;
console.log(insertSection);
// insertSection.insertBefore(notes, insertSection.firstChild);
insertSection.prepend(notes);
