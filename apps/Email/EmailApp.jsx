import { emailService } from "./services/email-service.js"
import {EmailList} from "./cmps/EmailList.jsx"
import {EmailFilter} from "./cmps/EmailFilter.jsx"

export class EmailApp extends React.Component {
  state = {
    emails: null,
    countEmailUnread:null,
    filterBy: {
      text: '',
      read: '',
      Unread: '',
  },
  }
  componentDidMount() {
    this.loadEmails();
    this.loadCountEmailUnread();
  }
  loadEmails = () => {
    emailService.query().then(emails => {
      this.setState({ emails },()=>console.log(this.state.emails))
    })

  }
  loadCountEmailUnread=()=>{
    emailService.getCountUnreadEmail().then(countEmailUnread=>{
      this.setState({countEmailUnread})
    })
  }
  onReadEmail=(emailId)=>{
    emailService.setEmailRead(emailId)
    this.loadEmails();
    this.loadCountEmailUnread()

  }
  onRemoveEmail=(emailId)=>{
    emailService.removeEmail(emailId)
     this.loadEmails();
     this.loadCountEmailUnread()
}
getEmailsForDisplay  ()  {
  if (!this.state.emails) return null;
  console.log('check');
  console.log('emails',this.state.emails);
  const { filterBy } = this.state;
  const filterRegex = new RegExp(filterBy.text, 'i');
  const filterEmails= this.state.emails.filter(email => filterRegex.test(email.text));
  console.log(filterEmails);
  return filterEmails
}
onSetFilter = (filterBy) => {
  this.setState({ filterBy })
}
  render() {
    // const getEmailsForDisplay = this.getEmailsForDisplay;
    console.log(this.getEmailsForDisplay());
    const { emails,countEmailUnread } = this.state
      if (!emails) return null;
    
      const {filterBy}=this.state;
    return (
      <section className="email-app">
          <EmailFilter  onSetFilter={this.onSetFilter} />
        {emails&&<EmailList emails={this.getEmailsForDisplay()}  onReadEmail={this.onReadEmail} onRemoveEmail={this.onRemoveEmail} countEmailUnread={countEmailUnread}/>}
        {/* <EmailStatus  loadCountEmailUnread={loadCountEmailUnread}/> */}
      
      </section>
    )
     
  }
}
