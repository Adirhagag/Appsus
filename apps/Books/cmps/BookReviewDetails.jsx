import { bookService } from "../services/book-service.js";

export class BookReviewDetails extends React.Component {
    state = {
        reviews:null
    }
    componentDidMount() {
        var reviews = this.props.book.reviews
        console.log('this.props.book: ', this.props.book);
        console.log('review in cdm', reviews);
        this.setState({reviews})
    }
    onRemoveReview=(reviewIdx)=>{
        bookService.remove(this.props.book, reviewIdx).then(book=>{
            this.setState({reviews: book.reviews})
        })

    }
    render() {
       

        //  if (!this.state.reviews) return <div>Loading..</div> 
          const { reviews } = this.props.book

        return (
           

            <div className="review-list">
                <h1>list of rewiew:</h1>
                <table border="1" className="table-continer">
                    <thead>
                        <tr>
                        <th>full Name</th>
                        <th>rate</th>
                        <th>datepicker</th>
                        <th> commend</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {reviews.map((review, idx) => {
                            return (

                                <tr key={review.id}>
                                    <td>{review.fullName}</td>
                                    <td>{review.rate}</td>
                                    <td>{review.datepicker}</td>
                                    <td>{review.commend}</td>
                                    <td>
                                        <button className="btnDelete" onClick={()=>this.onRemoveReview(idx)}><i className="fa fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>
            </div>

        )

    }
}