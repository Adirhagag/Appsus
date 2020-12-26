
import { bookService } from "./services/book-service.js";
import { BookList } from "./cmps/BookList.jsx";
import {BookFilter} from "./cmps/BookFilter.jsx"

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
        bookService.remove(bookId).then(() => {
            this.loadBooks()
        })
    }

    // getBookForDisplay = () => {
    //     const { filterBy } = this.state;
    //     //Another way of doing filter
    //     // const filterRegex = new RegExp(filterBy.name,'i');
    //     // return this.state.pets.filter(pet=> filterRegex.test(pet.name));

    //     return this.state.books.filter(book => {

    //         return book.title.toLowerCase().includes(filterBy.title.toLowerCase());
    //     }).filter(book => {
    //         return book.listPrice.amount >= filterBy.fromPrice && book.listPrice.amount <= filterBy.toPrice
    //     })
    
    // };
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
