export class EmailFilter extends React.Component {


    state = {
        filterBy: {
            text: '',
            read: '',
            unread: '',
        },
        sortBy:{
            title:true,
            date:''
        }
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
    onSetSort=(ev)=>{
        const callback = () => {
            this.props.onSetSort(this.state.sortBy);
        };
        let value=( ev.target.value);
        console.log(value);
        let sortBy={...this.state.sortBy}
        sortBy[value]=true;
       
        if(value==='date')sortBy['title']=false;
        else if(value==='title')sortBy['date']=false
        this.setState({sortBy},callback);
    }
    render() {
        return <div className="email-filter">
            <input type="text" placeholder="filter email by text :" name="text" onChange={this.handelChange}  ref={this.refInput}/>
            <input type="checkbox"  name="read" id="read" onChange={this.handelChange} ></input>
            < label htmlFor="read">Read</label><br></br>
            <input type="checkbox" name="unread" id="Unread"  onChange={this.handelChange} ></input>
            < label htmlFor="Unread">Unread</label><br></br>
            <select onChange={this.onSetSort}>
                <option value="title">Sort By Title</option>
                <option value="date">Sort By Date</option>
               
            </select>
        </div>
    }

    
}