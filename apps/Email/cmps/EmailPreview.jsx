import { utilService } from "../../../services/utils.js"
import { EmailDetails } from "./EmailDetails.jsx"
import { emailService } from "../services/email-service.js"
import { EmailDetailsMini } from "./EmailDeatailsMini.jsx"
const { Link } = ReactRouterDOM;


export function EmailPreview({ email, onReadEmail, onRemoveEmail, onStarred }) {
    var hours = new Date(email.sentAt).getHours();
    var minutes = new Date(email.sentAt).getMinutes();
    let timeString = (hours >= 12) ? " P.M." : " A.M.";
    var str = email.senderName;
    var firstLetterSenderName = str.charAt(0).toUpperCase();

    const btnInnerTextReadUnread = (email.isRead) ? <i className="fa fa-envelope-open"></i> : <i className="far fa-envelope"></i>
    const btInnerTextStarred = (email.isstarred) ? <i className="fa fa-star"  style={{ color:'yellow' }}></i> : <i className="far fa-star"></i>

    return (

        <li className={(email.isRead) ? 'email-read' : ''}>

            <div className="email-preview ">
                <div className="sign-mail" style={{ backgroundColor: utilService.getRandomColor() }}><h1>{firstLetterSenderName}</h1></div>
                <Link to={`/email/${email.id}`}>
                    <p className="sender-name">{email.senderName}</p>
                    <h3 className="email-subject">{email.subject}</h3>
                    <p className="email-body">{email.body}</p>
                </Link>
                <p className="sent-at">{hours}:{minutes}{timeString}</p>
                <div className="email-read-btn">
                    <button className="remove-btn" onClick={() => onRemoveEmail(email.id)}><i className="fa fa-trash-alt"></i></button>
                    <button onClick={() => { onReadEmail(email.id) }} >{btnInnerTextReadUnread}</button>
                    <button onClick={() => { onStarred(email.id) }}>{btInnerTextStarred}</button>
                </div>


            </div>
            {email.isRead && <EmailDetailsMini email={email} />}
        </li>
    )





}