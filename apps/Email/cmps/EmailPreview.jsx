
export function EmailPreview({ email,onReadEmail}) {
    var hours= new Date(email.sentAt).getHours();
    var minutes= new Date(email.sentAt).getMinutes();
 let timeString=(hours >=12)?" P.M." : " A.M.";
 var str = email.senderName;
var firstLetterSenderName = str.charAt(0).toUpperCase();

    return <li className={(email.isRead)?'email-read':''}>
                <div className="email-preview ">
                <div className="sign-mail" style={{ backgroundColor: 'pink' }}>{firstLetterSenderName}</div>
                <p className="sender-name">{email.senderName}</p>
                <h3 className="email-subject">{email.subject}</h3>
                <p className="email-body">{email.body}</p>
                <p className="sent-at">{hours}:{minutes}{timeString}</p>
                <input type="checkbox" id="myCheck" onClick={()=>{onReadEmail(email.id)}}></input>

            </div>
            </li>
   
       
    


}