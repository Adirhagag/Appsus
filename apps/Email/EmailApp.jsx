import { emailService } from "./services/email-service.js"
import {EmailList} from "./cmps/EmailList.jsx"

export class EmailApp extends React.Component {
  state = {
    emails: null,
  }
  componentDidMount() {
    this.loadEmails();
  }
  loadEmails = () => {
    emailService.query().then(emails => {
      console.log('emails', emails);
      this.setState({ emails },()=>console.log(this.state.emails))
    })

  }
  onReadEmail=(emailId)=>{
    emailService.setEmailRead(emailId)
    this.loadEmails();

  }
  render() {
    const { emails } = this.state
     if (!emails) return null;
    return (
      <section className="email-app">
        <EmailList emails={emails}  onReadEmail={this.onReadEmail}/>
      </section>
    )
     
  }
}
