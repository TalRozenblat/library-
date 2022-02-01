let myLibrary = [];

function Book(title, author, pages, read) {  
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.addToLibrary = function(myLibrary){
    myLibrary.push(this);
}
Book.prototype.removeFromLibrary = function(myLibrary){
   myLibrary.splice(myLibrary.indexOf(this), 1);
}

const theStand = new Book('The Stand', 'Steven King', 1326, false);
const wasteLands = new Book('The Dark Tower: The Waste Lands', 'Steven King', 702, true);


function addBookToTable(book){
    let table = document.getElementById("table");

    let title = document.createTextNode(book.title);
    let author = document.createTextNode(book.author);
    let pages = document.createTextNode(book.pages);
    let read;
    if(book.read === true){
        read = document.createTextNode("Read");
    }
    else{
        read = document.createTextNode("not read");
    }
    

    let row = table.insertRow(-1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let readCell = row.insertCell(3);

    titleCell.appendChild(title);
    authorCell.appendChild(author);
    pagesCell.appendChild(pages);
    readCell.appendChild(read);
   
}

function printBooks(myLibrary){
    for(let i = 0; i < myLibrary.length; i++){
        addBookToTable(myLibrary[i]);
    }
}


