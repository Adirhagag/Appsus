import { emailService } from "../services/email-service.js"


    export class EmailDetails extends React.Component {
    state = {
        email:null
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

    onRemoveEmail = (emailId) => {
        emailService.removeEmail(emailId)
    }
    render() {
        const {email}=this.state
        if (!email)return null
    return (
        <div className="email-deatils ">
            <h1 className="email-subject">{email.subject}</h1>
            <div>
                <button className="remove-btn" onClick={() => this.onRemoveEmail(email.id)}><i className="fa fa-trash-alt"></i></button>
            </div>
            <p className="sender-name">{email.senderName}</p>
            <p className="sender-mail">{`<${email.senderName}@gmail.com>`}</p>
            <p className="email-body">{email.body}</p>


        </div>
    )
    }





}