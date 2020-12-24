import { utilService } from "../../../services/utils.js";
import { emailService } from "../services/email-service.js";

export class EmailCompose extends React.Component {

    state = {
        email: {
            id: utilService.makeId(),
            senderName: '',
            subject: null,
            body: '',
            isRead: false,
            sentAt: Date.now()
        }
    };

    refInput = React.createRef();

    // componentDidMount() {
    //     const { petId } = this.props.match.params;
    //     // console.log('this.elInput:', this.elInput);
    //     this.refInput.current.focus();
    //     if (!petId) return;
    //     petService.getById(petId).then(pet => {
    //         this.setState({ pet });
    //     });
    // }


    onSendEmail = (ev) => {//on submit
        ev.preventDefault();
        const callback = () => {
            this.props.onCloseFormSendingEmail();
        };
        const callbackToAddEmail = () => {
            this.props.onAddEmail(this.state.email);
        };

        if (!this.state.email.subject) {
            alert('Email must contain a subject!');
            return;
        }

       
        callback()
        callbackToAddEmail();
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



    render() {

        return (
            <div className="email-compose-continer">
                <div className="title-form">
                    <h3>New Messege</h3>
                    <button className="btn-close-form" onClick={this.props.onCloseFormSendingEmail}><i className="fa fa-times"></i></button>
                </div>
                <form onSubmit={this.onSendEmail} className="email-compose">
                    <input ref={this.refInput}
                        placeholder="To:" type="text" name="senderName"
                        onChange={this.onInputChange} />

                    <input required
                        placeholder="subject:" type="text" name="subject"
                        onChange={this.onInputChange} />
                    <textarea name="body" rows="10" cols="80" onChange={this.onInputChange}></textarea>
                    <button type="submit">Send</button>

                </form>

            </div>
        );
    }
}
