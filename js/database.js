
var isbn;
var title;
var author;
var price;

// var bookNum = document.getElementById("bookNum");
// var minPrice = document.getElementById("minPrice");
// var maxPrice = document.getElementById("maxPrice");
// var averagePrice = document.getElementById("averagePrice");

var insertTable = document.getElementById("table");


var newBook; 


var bookArray = [];
   



function initialize() {
    bookArray.push(new Books("1928994512","ASP.NET Web Developer's Guide","Scott Roberts",30.55));
    bookArray.push(new Books("0735619131","Understanding Web Services","Jeannine Hall Gailey",50.30));
    bookArray.push(new Books("1928994563","C# .Net Web Developer's Guide","Syngress",45.10));
    bookArray.push(new Books("9780735622128","Microsoft Visual Web Developer","Jim Buyens",35.00));
    
}
initialize();

function addBook() {
   
    isbn = document.getElementById("isbn").value;
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    price = parseFloat(document.getElementById("price").value).toFixed(2);

    
    newBook = new Books(isbn, title, author, price);
   
    var bookFound=false;
    for(var i=0; i < bookArray.length; ++i) {
        if(newBook.bookISBN()==bookArray[i].bookISBN()) {
            bookFound = true;
            break;
        }
    }
    
    if(!bookFound) {
        bookArray.push(newBook);
        createTable();
    } else {
        console.log("Book already ther index:");
    }

   
      
}



function deleteBook() {

    isbn = document.getElementById("isbn").value;
    
    newBook = new Books(isbn, "", "", 0); 
    
    for(var i=0; i < bookArray.length; ++i) {
        if(newBook.bookISBN()==bookArray[i].bookISBN()) {
            bookArray.splice(i,1);
            break;
        }
    }
    createTable();  
    
} 
    
function updateBook() {

    isbn = document.getElementById("isbn").value;
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    price = parseFloat(document.getElementById("price").value);
    newBook = new Books(isbn, title, author, price);

    for(var i = 0; i<bookArray.length; i++)
    {       
        if(newBook.bookISBN()==bookArray[i].bookISBN())
        {   
          
            bookArray[i] = newBook; 
        }
    }
    createTable();
}


function compare( a, b ) {
    if ( a._isbn < b._isbn ){
      return -1;
    }
    if ( a._isbn > b._isbn ){
      return 1;
    }
    return 0;
  }
  
  
function sortBook() {
    bookArray.sort(compare);
    createTable();

}

