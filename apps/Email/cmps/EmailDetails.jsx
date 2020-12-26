import { emailService } from "../services/email-service.js"
import {EmailComposeBack} from "../cmps/EmailComposeBack.jsx"
const { Link } = ReactRouterDOM;


export class EmailDetails extends React.Component {
    state = {
        email: null,
        isSendEmailBack:false,
        isLongTxtShown: false,
    }

    loadBook() {
        const { bookId } = this.props.match.params;
        emailService.getEmailById(emailId).then(email => {
            this.setState({ email });
        });
    }

    componentDidMount() {
        const { emailId } = this.props.match.params;
        console.log(emailId);
        emailService.getEmailById(emailId).then(email => {
            this.setState({ email });
        });
    }
    ontoggleSendEmailBack=()=>{
        this.setState({isSendEmailBack:!this.state.isSendEmailBack})
    }

    render() {
        const { email } = this.state
        if (!email) return null
        const hours = new Date(email.sentAt).getHours();
        const minutes = new Date(email.sentAt).getMinutes();
        const currHour=new Date().getHours()-hours;

        return (
            <div className="email-deatils ">
                <Link to="/email"><button><i className="fa fa-times-circle"></i></button></Link>
                <div className="email-title">
                <p className="sender-mail">{`send from: <${email.senderName}@gmail.com>`}</p>
                <h4>{hours}:{minutes}(befor {currHour} hours)</h4>
                </div>
                
                <div className="email-details-info">
                <h1 className="email-subject"> email subject :{email.subject}</h1>
                {/* <h2 className="sender-name"> email send from:{email.senderName}</h2> */}
               
                <h2 className="email-body">{email.body}</h2>
                <button onClick={ ()=>this.ontoggleSendEmailBack()}>Replay<i className="fa fa-reply"></i></button>
                </div>
                { this.state.isSendEmailBack&&<EmailComposeBack senderName={this.state.email.senderName} ontoggleSendEmailBack={this.ontoggleSendEmailBack}/>}

                
            </div>
        )
    }





}