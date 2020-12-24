import { EmailCompose } from "./EmailCompose.jsx"

export class EmailStatus extends React.Component {
    state={
        isShowCompose:false
    }
    onShowFormSendingEmail=()=>{
        this.setState({
            isShowCompose:true
        })
    }
    onCloseFormSendingEmail=()=>{
        this.setState({
            isShowCompose:false
        })

    }
render() {
    const { countEmailRead } = this.props
    const { emails } = this.props
    const {isShowCompose}=this.state
    return (
        <div className="email-status">
            <button onClick={this.onShowFormSendingEmail}><i className="fa fa-plus">Compose</i></button>
            <div className="email-status-info">
                <h1><i className="fa fa-inbox"></i>inbox ({countEmailRead}/{emails.length})</h1>
                <progress value={countEmailRead} max={emails.length}> {countEmailRead}% </progress>

            </div>
            {isShowCompose&&<EmailCompose onCloseFormSendingEmail={this.onCloseFormSendingEmail} onAddEmail={this.props.onAddEmail}/>}
        </div>

    )
        
}


}