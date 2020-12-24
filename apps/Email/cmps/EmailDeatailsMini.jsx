// import { emailService } from "../services/email-service.js"



    export function EmailDetailsMini({ email }) {
    
        return (
            <div className="email-deatils-mini ">
                {/* <h4>{hours}:{minutes}(befor{currHour}hours)</h4> */}
                <h1 className="email-subject">{email.subject}</h1>
                <p className="sender-name">{email.senderName}</p>
                <p className="sender-mail">{`<${email.senderName}@gmail.com>`}</p>
                <p className="email-body">{email.body}</p>
               
              


            </div>
        )
    

}