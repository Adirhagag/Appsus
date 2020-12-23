import { utilService } from "../../../services/utils.js"
import { EmailDetails } from "./EmailDetails.jsx"
const { Link } = ReactRouterDOM;


export function EmailPreview({ email, onReadEmail }) {
    var hours = new Date(email.sentAt).getHours();
    var minutes = new Date(email.sentAt).getMinutes();
    let timeString = (hours >= 12) ? " P.M." : " A.M.";
    var str = email.senderName;
    var firstLetterSenderName = str.charAt(0).toUpperCase();

    const btnInnerText = (email.isRead) ? <i className="fa fa-envelope-open"></i> : <i className="far fa-envelope"></i>


    return (

        <li className={(email.isRead) ? 'email-read' : ''}>
            <div className="email-preview ">
                <div className="sign-mail" style={{ backgroundColor: utilService.getRandomColor() }}>{firstLetterSenderName}</div>
                <Link to={`/email/${email.id}`}>
                    <p className="sender-name">{email.senderName}</p>
                    <h3 className="email-subject">{email.subject}</h3>
                    <p className="email-body">{email.body}</p>
                </Link>
                    <p className="sent-at">{hours}:{minutes}{timeString}</p>
                <button onClick={() => { onReadEmail(email.id) }} >{btnInnerText}</button>
            {this.isRead&&<EmailDetails  email={email}/>}

            </div>
        </li> 
    )





}