import { emailService } from "./services/email-service.js"
import { EmailList } from "./cmps/EmailList.jsx"
import { EmailFilter } from "./cmps/EmailFilter.jsx"
import {EmailStatus} from "./cmps/EmailStatus.jsx"

export class EmailApp extends React.Component {
  state = {
    emails: null,
    countEmailUnread: null,
    countEmailRead:0,
    filterBy: {
      text: '',
      read: '',
      unread: '',
    },
  }
  componentDidMount() {
    this.loadEmails();
    this.loadCountEmailUnread();
    this.loadCountEmailRead();
  }
  loadEmails = () => {
    emailService.query().then(emails => {
      this.setState({ emails }, () => console.log(this.state.emails))
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

  }
  onRemoveEmail = (emailId) => {
    emailService.removeEmail(emailId)
    this.loadEmails();
    this.loadCountEmailUnread()
    this.loadCountEmailRead();
  }


  getEmailsForDisplay () {
    const { filterBy } = this.state;
    // if (filterBy.read) {
    //   emailService.getEmailRead().then(emailsRead => {
    //     this.setState({ emails: emailsRead })
    //   })
    // }
    // else if (filterBy.unread) {
    //   emailService.getEmailUnread().then(emailsUnread => {
    //     this.setState({ emails: emailsUnread }, () => console.log(this.state.emails))
    //   })

    // }
    const filterRegex = new RegExp(filterBy.text, 'i');
    const filterEmails = this.state.emails.filter(email => filterRegex.test( email.body));
    console.log('check');

    return filterEmails
  }

  onSetFilter = (filterBy) => {
    // console.log('filterBy:', filterBy);
    this.setState({ filterBy });
  }

  render() {
    const { emails, countEmailUnread } = this.state
    if (!emails) return null;

    const { filterBy } = this.state;
    return (
      <section className="email-app">
        <EmailFilter onSetFilter={this.onSetFilter} />
        <EmailList emails={this.getEmailsForDisplay()} onReadEmail={this.onReadEmail} onRemoveEmail={this.onRemoveEmail} countEmailUnread={countEmailUnread} />
        <EmailStatus  countEmailRead={this.state.countEmailRead} emails={emails}/>

      </section>
    )

  }
}
