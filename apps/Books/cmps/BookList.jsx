
import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books, onRemove }) {

    return (

        <div className="books-continar">
           { books.map(book => {
                return <BookPreview key={book.id} book={book} onRemove={onRemove} />;

                })}
        </div>

    )


}