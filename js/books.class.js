class Books {
    _isbn = "";
    _title = "";
    _author = "";
    _price = 0;

    constructor(isbn, title, author, price)
    {
        this._isbn = isbn;
        this._title = title;
        this._author = author;
        this._price = price;
    }
    bookISBN() {
        return this._isbn;  
    }
    bookTitle()
    {
        return this._title;
    }
    bookAuthor()
    {
        return this._author;
    }
    bookPrice()
    {
        return this._price;
    }

}