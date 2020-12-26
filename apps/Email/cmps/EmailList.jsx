
import { EmailPreview } from "./EmailPreview.jsx"

export function EmailList({emails,onReadEmail,onRemoveEmail,countEmailUnread,onStarred}) {

    return (

        <div className="email-list ">
            <h1 className="count-unread"><i className="fa fa-envelope"></i>:{countEmailUnread}</h1>
            <ul>
           { emails.map(email => {
               
                return <EmailPreview key={email.id} email={email} onReadEmail={onReadEmail}  onRemoveEmail={onRemoveEmail} onStarred={onStarred}/>;

                })}
            </ul>
        </div>

    )


}