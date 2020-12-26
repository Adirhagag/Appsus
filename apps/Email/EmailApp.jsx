import { emailService } from "./services/email-service.js"
import { EmailList } from "./cmps/EmailList.jsx"
import { EmailFilter } from "./cmps/EmailFilter.jsx"
import { EmailStatus } from "./cmps/EmailStatus.jsx"
import { eventBusService } from "../../services/eventBusService.js";



export class EmailApp extends React.Component {
  state = {
    emails: null,
    countEmailUnread: null,
    countEmailRead: 0,
    filterBy: {
      text: '',
      read: '',
      unread: '',
      all:''
    },
    sortBy:{
      title:true,
      date:''
  }
  }
  componentDidMount() {
    this.loadEmails();
    this.loadCountEmailUnread();
    this.loadCountEmailRead();
  }
  loadEmails = () => {
    emailService.query().then(emails => {
      this.setState({ emails })
    })

  }
  loadCountEmailUnread = () => {
    emailService.getCountUnreadEmail().then(countEmailUnread => {
      this.setState({ countEmailUnread })
    })
  }
  loadCountEmailRead = () => {
    emailService.getCountReadEmail().then(countEmailRead => {
      this.setState({ countEmailRead })
    })
  }
  onReadEmail = (emailId) => {
    emailService.setEmailRead(emailId)
    this.loadEmails();
    this.loadCountEmailUnread()
    this.loadCountEmailRead();
    eventBusService.emit('showMsg', { type: 'success', txt: `Email was reading`})
    
  }
  onStarred=(emailId)=>{
    emailService.setEmailStarres(emailId)
    this.loadEmails();
    this.loadCountEmailUnread()
    this.loadCountEmailRead();
    eventBusService.emit('showMsg', { type: 'success', txt: `Email starred`})
  }
  onRemoveEmail = (emailId) => {
    emailService.removeEmail(emailId)
    this.loadEmails();
    this.loadCountEmailUnread()
    this.loadCountEmailRead();
    eventBusService.emit('showMsg', { type: 'success', txt: `Email was successfully remove`})
  }
  onShowStarredEmail=()=>{
    emailService.getEmailStarres().then(emails=>{
     this.setState( {emails})
    })
  
  }
  onShowSentEmail=()=>{
    console.log('sent email');
    emailService.getEmailSent().then(emails=>{
      this.setState( {emails})
     })
  }

  getEmailsForDisplay() {
    const { filterBy, emails,sortBy } = this.state;
    let copyEmails = [...emails]
    if(sortBy.title){
      copyEmails=emailService.sortByTitle(copyEmails)

    }
    else if(sortBy.date){
      copyEmails=emailService.sortByDate(copyEmails)

    }
    if (filterBy.read) {
      copyEmails = copyEmails.filter((email) => {
        return email.isRead
      });
    } else if (filterBy.unread) {
      copyEmails = copyEmails.filter((email) => {
        return !email.isRead
      });

    }else if(filterBy.all){
     copyEmails=emailService.getEmailsForFilter();
    // copyEmails=copyEmails;

    }
    const filterRegex = new RegExp(filterBy.text, 'i');
    copyEmails = copyEmails.filter(email => filterRegex.test(email.body));

    return copyEmails
  }

  onSetFilter = (filterBy) => {
    // console.log('filterBy:', filterBy);
    this.setState({ filterBy });
  }
  onSetSort=(sortBy)=>{
    this.setState({sortBy})
  }
  onAddEmail=(emailToAdd)=>{
    emailService.addEmail(emailToAdd)
    this.loadEmails();
    this.loadCountEmailUnread()
    this.loadCountEmailRead();
    eventBusService.emit('showMsg', { type: 'success', txt: `email was successfully sent`})
    

  }
  render() {
    const { emails, countEmailUnread } = this.state
    if (!emails) return null;

    const { filterBy } = this.state;
    return (
      <section className="email-app">
        <div className="email-countiner">
          <EmailStatus countEmailRead={this.state.countEmailRead} emails={emails} onAddEmail={this.onAddEmail} onShowStarredEmail={this.onShowStarredEmail} onShowSentEmail={this.onShowSentEmail} />
          <div className="email-Searh">
            <EmailFilter onSetFilter={this.onSetFilter} onSetSort={this.onSetSort} />
            <EmailList emails={this.getEmailsForDisplay()} onReadEmail={this.onReadEmail} onRemoveEmail={this.onRemoveEmail} countEmailUnread={countEmailUnread} onStarred={this.onStarred} />
          </div>
        </div>

      </section>
    )

  }
}
