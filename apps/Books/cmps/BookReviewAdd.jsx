//  import { bookService } from "../services/book-service.js";
import { eventBusService } from "../../../../services/eventBusService.js";

export class BookReviewAdd extends React.Component {

    state = {
        review: { fullName: 'Books Reader', rate: 0, datepicker: '',commend:'' }
    };

  

    onInputChange = (ev) => {//on input change

        const value = ev.target.type === 'number' ? +ev.target.value
            : ev.target.value;

        const bookCopy = { ...this.state.review };
        bookCopy[ev.target.name] = value; // like petCopy.name/power = 

        this.setState({
            review: bookCopy
        },()=>console.log(this.state));
    };
    onChangeRate = (diff) => {
        
        const { review } = this.state

        if (review.rate+diff<0||review.rate+diff>5) {
         return
        }
        else {
            var copy = { ...review }
            copy.rate += diff
            this.setState({
                review: copy
            },()=>console.log(this.state))
        }
    }
    onSaveReview =(ev)=>{
        ev.preventDefault();
        this.props.addReview(this.state.review)
        eventBusService.emit('showMsg', { type: 'success', txt: `Book was successfully add`})
    }


    render() {
        return (
            <div className="book-review-add">
               
            <form onSubmit={this.onSaveReview}>
                <div className="book-review-add-input">
                <input value={this.state.review.fullName}  placeholder="Name" type="text" name="fullName" onChange={this.onInputChange} />
                <input type="date"  name="datepicker" onChange={this.onInputChange} />
                </div>
                <button  className="btn-rate" onClick={() => this.onChangeRate(-1)}>-</button>
                     rate: {this.state.review.rate}
                <button className="btn-rate"  onClick={() => this.onChangeRate(1)}>+</button>
                <div className="book-review-info">

                <textarea id="w3review" name="commend" rows="4" cols="20" onChange={this.onInputChange}></textarea>
                <button  className="btn-submit" type="submit">Add Review</button>
                </div>
            </form>
            
            </div>

        );
    }
}
