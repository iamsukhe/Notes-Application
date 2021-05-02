var addBtn = document.getElementById("addBtn");
showNotes();
addBtn.addEventListener("click", function () {
    var myTextarea = document.getElementById("myTextarea");
    var notes = localStorage.getItem("notes");
    if (notes === null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(myTextarea.value)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    myTextarea.value = "";
    console.log(notesObj);
    showNotes();
});

function showNotes() {
    var notes = localStorage.getItem("notes");
    if (notes === null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard col-lg-2 border border-secondary p-3 m-3">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p id="demo" class="txt">${element}</p>
        <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-outline-danger" >Remove Note</button>
        </div>`
    });
    var notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `<div class="container">Nothing to show use Add a Note sectioin above to add notes.</div>`
    }

}

function deleteNotes(index) {
    var notes = localStorage.getItem("notes");
    if (notes === null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


var search = document.getElementById("searchTxt");
search.addEventListener("input", function (e) {
    var inputVal = search.value.toLowerCase();
    let div = document.getElementById("notes");
    let li = div.getElementsByClassName("noteCard");

    for(var i=0 ; i<li.length ; i++){
        let p = li[i].getElementsByTagName("p")[0];
        let  textValue = p.textContent.toLocaleLowerCase();
        console.log(textValue)
        if(textValue.includes(inputVal)===true){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }

    }
})