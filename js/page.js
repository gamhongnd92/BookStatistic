

function createTable(){
   
    var _table = document.getElementById("tableBody");
        
    while(_table.children.length>0) {
        _table.removeChild(_table.firstChild);
    }
        
    for(var i=0;i<bookArray.length;i++){
        
        var _row = _table.insertRow();
        var _isbnCell = _row.insertCell();
        _isbnCell.textContent = bookArray[i]._isbn;

        var _titleCell = _row.insertCell();
        _titleCell.textContent = bookArray[i]._title;

        var _authorCell = _row.insertCell();
        _authorCell.textContent = bookArray[i]._author;

        var _priceCell = _row.insertCell();
        _priceCell.textContent = bookArray[i]._price;
    }
    updateStats();
}

function updateStats() {
    var _totalBook = bookArray.length;
    document.getElementById("bookNum").textContent = "Books in Database: " + _totalBook;
    var minPrice = bookArray[0].bookPrice();
    var maxPrice = bookArray[0].bookPrice();
    var totalPrice = 0;
    for( var i=0; i<bookArray.length; i++)
    {
        if(bookArray[i].bookPrice()<minPrice) {

            minPrice = bookArray[i].bookPrice();
        }
        if(bookArray[i].bookPrice()>maxPrice) {

            maxPrice = bookArray[i].bookPrice();
        }
        totalPrice += bookArray[i].bookPrice();

    }

    document.getElementById("minPrice").textContent = "Minimum Price " + minPrice;
    document.getElementById("maxPrice").textContent = "Maximum Price " + maxPrice;
    document.getElementById("averagePrice").textContent = "Average Price " +
        (Number(totalPrice/bookArray.length)).toFixed(2);
}
