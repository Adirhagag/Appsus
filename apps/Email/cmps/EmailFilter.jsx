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
        var value=ev.target.value
        const callback = () => {
            this.props.onSetFilter(this.state.filterBy);
        };
        if(ev.target.type==='checkbox')value=ev.target.checked
        console.log(value);
        let filterBy = {...this.state.filterBy}
        filterBy[ev.target.name] = value;

        this.setState({filterBy}, callback);
    };
    
    render() {
        return <div className="email-filter">
            <input type="text" placeholder="filter email by text :" name="text" onChange={this.handelChange}  ref={this.refInput}/>
            <input type="checkbox"  name="read" id="read" onChange={this.handelChange} ></input>
            < label htmlFor="read">Read</label><br></br>
            <input type="checkbox" name="unread" id="Unread"  onChange={this.handelChange} ></input>
            < label htmlFor="Unread">Unread</label><br></br>
            {/* <input type="number" value={this.state.fromPrice} name="fromPrice" onChange={this.handelChange} />
            <input type="number" value={this.state.toPrice} name="toPrice" onChange={this.handelChange} /> */}
        </div>
    }

    
}