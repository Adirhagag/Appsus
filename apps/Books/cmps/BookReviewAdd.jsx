//  import { bookService } from "../services/book-service.js";

export class ReviewAdd extends React.Component {

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
    }


    render() {
        return (
            <div className="form-countiner">
                

            <form onSubmit={this.onSaveReview}>

                <input value={this.state.review.fullName}  placeholder="Name" type="text" name="fullName" onChange={this.onInputChange} />
                <button onClick={() => this.onChangeRate(-1)}>-</button>
                     rate: {this.state.review.rate}
                <button onClick={() => this.onChangeRate(1)}>+</button>

                <input type="date"  name="datepicker" onChange={this.onInputChange} />
                <textarea id="w3review" name="commend" rows="4" cols="50" onChange={this.onInputChange}></textarea>
                <button type="submit">Add Review</button>
            </form>
            
            </div>

        );
    }
}
