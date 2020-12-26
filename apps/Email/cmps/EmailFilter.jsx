export class EmailFilter extends React.Component {


    state = {
        filterBy: {
            text: '',
            read: '',
            unread: '',
            all:''
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
        if(ev.target.name==='read'){
            filterBy['all'] = false;
            filterBy['unread'] = false;
          
        }
        else  if(ev.target.name==='uread'){
            filterBy['all'] = false;
            filterBy['read'] = false;
    
        } 
        else  if(ev.target.name==='all'){
            filterBy['unread'] = false;
            filterBy['read'] = false;
            // ev.target.checked=false;
        } 
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
        return <section className="email-filter">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search Mail:" name="text" onChange={this.handelChange}  ref={this.refInput} autoComplete="off"/>
            <input type="checkbox" name="all" id="all"  onChange={this.handelChange} ></input>
            < label htmlFor="all">All</label><br></br>
            <input type="checkbox"  name="read" id="read" onChange={this.handelChange} ></input>
            < label htmlFor="read">Read</label><br></br>
            <input type="checkbox" name="unread" id="Unread"  onChange={this.handelChange} ></input>
            < label htmlFor="Unread">Unread</label><br></br>
            <select onChange={this.onSetSort}>
                <option value="title">Sort By Title</option>
                <option value="date">Sort By Date</option>
               
            </select>
        </section>
    }

    
}