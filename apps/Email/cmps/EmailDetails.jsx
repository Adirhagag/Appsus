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
                <h4>{hours}:{minutes}(befor{currHour}hours)</h4>
                <h1 className="email-subject">{email.subject}</h1>
                <p className="sender-name">{email.senderName}</p>
                <p className="sender-mail">{`<${email.senderName}@gmail.com>`}</p>
                <p className="email-body">{email.body}</p>
                <button></button>


            </div>
        )
    }





}