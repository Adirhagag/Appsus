
export function EmailStatus({countEmailRead,emails}) {
    
    return (
        <div className="email-status">
            <div className="email-status-info">
            <h1><i className="fa fa-inbox"></i>inbox ({countEmailRead}/{emails.length})</h1>
            <progress  value="50" max="100"> {countEmailRead}% </progress>
            
        </div>
        </div>
    )


}