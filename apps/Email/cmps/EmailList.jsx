
import { EmailPreview } from "./EmailPreview.jsx"

export function EmailList({ emails ,onReadEmail}) {
    return (

        <div className="email-list">
            <ul>
           { emails.map(email => {
               
                return <EmailPreview key={email.id} email={email} onReadEmail={onReadEmail} />;

                })}
            </ul>
        </div>

    )


}