export class BookFilter extends React.Component {


    state = {
        title: '',
        fromPrice: 0,
        toPrice: 500,
    }
    handelChange = (ev) => {
        const callback = () => {
            this.props.onSetFilter(this.state);
        };
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        const field = ev.target.name;
        this.setState({ [field]: value }, callback)

    };
    render() {
        return <div className="book-filter">
            <input type="text" placeholder="filter book by name :" value={this.state.title} name="title" onChange={this.handelChange}  autoFocus/>
            
            <input type="number" value={this.state.fromPrice} name="fromPrice"  placeholder="from price:" onChange={this.handelChange} />
            <input type="number" value={this.state.toPrice} name="toPrice"   placeholder="to price:" onChange={this.handelChange} />
        </div>
    }

    
}