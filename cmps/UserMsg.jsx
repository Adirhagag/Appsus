import { eventBusService } from "../../../services/eventBusService.js";

// const { NavLink, withRouter } = ReactRouterDOM;
const { Link } = ReactRouterDOM;


export class UserMsg extends React.Component {

    state = {
        msg: {
            type:'',
            txt:'',
        
        },
        isShowMsg: false,
        
    }

    componentDidMount() {
        this.unsubscribe = eventBusService.on('showMsg', (msg) => {
            this.setState({ msg, isShowMsg: true},()=>console.log(this.state));
              setTimeout(this.onCloseUserMsg, 3000);
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onCloseUserMsg = () => {
        this.setState({ isShowMsg: false })
    }

    render() {
        const { msg, isShowMsg } = this.state;
        // if (!isShowMsg) return null;
        return <section>
           
            {/* <button className="btn-close-modal" onClick={this.onCloseUserMsg}><i className="fa fa-window-close"></i></button> */}
             <div className={`user-msg ${!this.state.isShowMsg ? 'hide' : ''}`}>
                {msg.txt}
                {/* <Link to={`/book/${this.state.msg.bookIdToShow}`}>
                Check it Out
             </Link> */}
             {/* <a href={`/#/book/${msg.bookToShow}`}> Check it Out</a> */}
                </div>
            {/* {msg.type === 'error' && <div className="error">{msg.txt}</div>} */}
            
        </section>
    }
}

