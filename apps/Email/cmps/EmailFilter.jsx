export class EmailFilter extends React.Component {


    state = {
        filterBy: {
            text: '',
            read: '',
            unread: '',
        },
    }
    componentDidMount(){
        this.refInput.current.focus();
    }
    refInput = React.createRef();
    handelChange = (ev) => {
        const callback = () => {
            this.state.onSetFilter(this.state);
        };
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        const field = ev.target.name;
        this.setState({ [field]: value }, callback)

    };
    render() {
        return <div className="email-filter">
            <input type="text" placeholder="filter email by text :" name="text" onChange={this.handelChange}  ref={this.refInput}/>
            <input type="checkbox"  name="read" id="read" onChange={this.handelChange} ></input>
            < label htmlFor="read">Read</label><br></br>
            <input type="checkbox" name="Unread" id="Unread"  onChange={this.handelChange} ></input>
            < label htmlFor="Unread">Unread</label><br></br>
            {/* <input type="number" value={this.state.fromPrice} name="fromPrice" onChange={this.handelChange} />
            <input type="number" value={this.state.toPrice} name="toPrice" onChange={this.handelChange} /> */}
        </div>
    }

    
}