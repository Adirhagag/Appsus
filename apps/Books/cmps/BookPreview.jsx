import { bookService } from '../services/book-service.js'
const { Link } = ReactRouterDOM;
export function BookPreview({ book, onRemove }) {
   
    return <div className="book-card animate__animated animate__pulse">

        <Link to={`/book/${book.id}`}>
            <h1>{book.title}</h1>
            <img src={book.thumbnail} alt="" />
        </Link>
        <h2>{book.listPrice.amount}
            <i className={`fa fa-${bookService.getCurrency(book.listPrice.currencyCode)}-sign`}>
            </i>
        </h2>
        <button onClick={() => {
            onRemove(book.id)
        }}
        >Remove</button>
       
    </div>


}