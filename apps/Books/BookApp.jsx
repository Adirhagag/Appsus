
import { bookService } from "./services/book-service.js";
import { BookList } from "./cmps/BookList.jsx";
import {BookFilter} from "./cmps/BookFilter.jsx"
import { eventBusService } from "../../services/eventBusService.js";

export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: {
            title: '',
            fromPrice: 0,
            toPrice: 500,
        },
        
    }
    componentDidMount() {
        this.loadBooks();
    }
    loadBooks = () => {
         bookService.query().then(books=>{
              console.log('books', books);
        this.setState({ books })
         });
       
    }
    getBooksToShow = () => {
        const { books } = this.state;
        return books;
    }
    onRemoveBook = (bookId) => {
        bookService.removeBook(bookId).then(() => {
            this.loadBooks()
        })
        eventBusService.emit('showMsg', { type: 'success', txt: `Book was successfully remove`})
    }
    getBookForDisplay = () => {
        const { filterBy } = this.state;

        return this.state.books.filter(book => {
            return book.title.toLowerCase().includes(filterBy.title.toLowerCase()) &&
                book.listPrice.amount >= filterBy.fromPrice &&
                book.listPrice.amount <= filterBy.toPrice
        })
    };

    onSetFilter = (filterBy) => {
        this.setState({ filterBy })
    }



render() {
     
        return (
            <section className="book-app">
        <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
        <BookList books={this.getBookForDisplay()}  onRemove={this.onRemoveBook}/>
            </section>
        );
    }

}
