
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


render() {
     
        return (
            <section className="book-app">
        <h1>miss book</h1>
        <BookList books={this.state.books}  onRemove={this.onRemovePet}/>
            </section>
        );
    }

}
