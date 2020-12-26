// import { emailService } from "../services/email-service.js"



    export function EmailDetailsMini({ email }) {
    
        return (
            <div className="email-deatils-mini animate__animated animate__bounce ">
                {/* <h4>{hours}:{minutes}(befor{currHour}hours)</h4> */}
                <h1 className="email-subject">{email.subject}</h1>
                <div className="sending-details">
                <h3 className="sender-name">{email.senderName}</h3>
                <p className="sender-mail">{`<${email.senderName}@gmail.com>`}</p>
                </div>
                <p className="email-body">{email.body}</p>
               


            </div>
        )
    

}