import { utilService } from "../../../services/utils.js";
import { emailService } from "../services/email-service.js";

export class EmailComposeBack extends React.Component {

    state = {
        email: {
            id: utilService.makeId(),
            senderName: this.props.senderName,
            subject: null,
            body: '',
            isRead: false,
            sentAt: Date.now()
        }
    };

    refInput = React.createRef();

    onSendEmail = (ev) => {//on submit
        ev.preventDefault();
        const callback = () => {
            this.props.ontoggleSendEmailBack();
        };

        if (!this.state.email.subject) {
            alert('Email must contain a subject!');
            return;
        }

        emailService.addEmail(this.state.email)
        callback()
        // eventBusService.emit('msg', { type: 'success', txt: `Book ${book.volumeInfo.title} was successfully added`,bookToShow:book.id})

    };

    onInputChange = (ev) => {//on input change
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        const email = { ...this.state.email };
        email[ev.target.name] = value;
        this.setState({
            email
        });
    };

    onAnimate = () => {
        this.refInput.current.classList.add('animate__animated', 'animate__tada');
        setTimeout(() => {
            this.refInput.current.classList.remove('animate__animated', 'animate__tada');
        }, 1000)
    }

    render() {

        return (
            <div className="email-compose-back" onClick={this.onAnimate}>
                <button onClick={this.props.ontoggleSendEmailBack}>Close</button>
                <form onSubmit={this.onSendEmail} className="email-compose">
                    <input ref={this.refInput}
                        placeholder={`To:<${this.props.senderName}@gmail.com>`} type="text" name="senderName" />

                    <input required
                        placeholder="subject:" type="text" name="subject"
                        onChange={this.onInputChange} />
                    <textarea name="body" rows="3" cols="80" onChange={this.onInputChange}></textarea>
                    <button type="submit">Send Back</button>

                </form>

            </div>
        );
    }
}
