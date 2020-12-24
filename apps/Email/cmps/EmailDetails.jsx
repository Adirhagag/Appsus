import { emailService } from "../services/email-service.js"

export class EmailDetails extends React.Component {
    state = {
        email: null
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

    render() {
        const { email } = this.state
        if (!email) return null
        const hours = new Date(email.sentAt).getHours();
        const minutes = new Date(email.sentAt).getMinutes();
        const currHour=new Date().getHours()-hours;

        return (
            <div className="email-deatils ">
                <div class="email-title">
                <p className="sender-mail">{`send from:<${email.senderName}@gmail.com>`}</p>
                <h4>{hours}:{minutes}(befor{currHour}hours)</h4>
                </div>
                <div className="email-details-info">
                <h1 className="email-subject"> email subject :{email.subject}</h1>
                {/* <h2 className="sender-name"> email send from:{email.senderName}</h2> */}
                <h2 className="email-body">{email.body}</h2>
                <button><i className="fa fa-reply"></i></button>
                </div>


                
            </div>
        )
    }





}