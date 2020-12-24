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
        <div>
            <button className="menu-status"><i className="fa fa-bars"></i></button>
        <section className="email-status">
            <button  className="btn-compose" onClick={this.onShowFormSendingEmail}><i className="fa fa-plus">Compose</i></button>
            <div className="email-status-info">
                <h1><i className="fa fa-inbox"></i>inbox ({countEmailRead}/{emails.length})</h1>
                <button  onClick={this.props.onShowStarredEmail}> <i className="fa fa-star"  style={{ color:'yellow' }}></i> Starred </button>
              
                <button  onClick={this.props.onShowSentEmail}> <i className="fa fa-mail-bulk"    style={{color:'rgb(68, 68, 68)'}}></i> Sent Mail</button>
                <button><i className="fa fa-firstdraft">Drafts</i></button>
                <progress value={countEmailRead} max={emails.length}> {countEmailRead}% </progress>

            </div>
            {isShowCompose&&<EmailCompose onCloseFormSendingEmail={this.onCloseFormSendingEmail} onAddEmail={this.props.onAddEmail}/>}
        </section>
            <button className="btn-compose-mobile" onClick={this.onShowFormSendingEmail}><i className="fa fa-pen" style={{color:'rgb(68, 68, 68)'}}></i></button>
        </div>

    )
        
}


}