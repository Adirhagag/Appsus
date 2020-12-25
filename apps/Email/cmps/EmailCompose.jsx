import { utilService } from "../../../services/utils.js";
import { emailService } from "../services/email-service.js";
import {EmailEmoji} from "./EmailEmoji.jsx"


export class EmailCompose extends React.Component {

    state = {
        email: {
            id: utilService.makeId(),
            senderName: '',
            subject: null,
            body: '',
            isRead: false,
            sentAt: Date.now(),
            isstarred:false,
            img:''
        },
        isShowTableIcon:false
    };

    refInput = React.createRef();

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
    onToggleShowIcons =()=>{
        this.setState({
            isShowTableIcon:!this.state.isShowTableIcon
        })
    }
    onAddEmoji=(emojiToadd)=>{
        const email = { ...this.state.email };
        email['body']+=emojiToadd
        this.setState({ email});
    }
 

    render() {

        return (
            <div className="email-compose-continer">
                <h3>New Messege</h3>
                <form onSubmit={this.onSendEmail} className="email-compose">
                    <input ref={this.refInput}
                        placeholder="To:" type="text" name="senderName"
                        onChange={this.onInputChange} autoComplete="off" />

                    <input required
                        placeholder="subject:" type="text" name="subject"
                        onChange={this.onInputChange} autoComplete="off" />
                    <textarea value={this.state.email.body} name="body" rows="10" cols="80" onChange={this.onInputChange}></textarea>
                        <button className="send-mail-btn" type="submit">Send</button>
                </form>
                    <div className="email-compose-btn">
                        <button className="btn-close-form" onClick={this.props.onCloseFormSendingEmail}><i className="fa fa-trash-alt" style={{fontSize:'25px'}}></i></button>
                        <button  className="btn-emoji" onClick={this.onToggleShowIcons}><i className="fa fa-smile-beam" style={{ color: 'rgb(68, 68, 68)',fontSize:'25px'}}></i></button>
                        {/* <button  type="file" name="image" onClick={ this.onImgInput} className="btn-add-pic" ><i className="fa fa-image" style={{ color: 'rgb(68, 68, 68)',fontSize:'25px'}}></i></button> */}
                    </div>
                {this.state.isShowTableIcon&&<EmailEmoji  onAddEmoji={this.onAddEmoji}/>}

            </div>
        );
    }
}
