import { emailService } from "../services/email-service.js";

export class EmailEmoji extends React.Component {

    state = {
        emojis: null
    }
    componentDidMount() {
        emailService.getIconsForDisplay().then(emojis => {
            this.setState({ emojis })
        })
    }

    render() {
        const { emojis } = this.state;
        if (!emojis) return null;

        return (
            <table className="emoji-table">
                <tbody>
                    {emojis.map((emojis, idx) => {
                        return (

                            <tr key={idx}>

                                {emojis.map((emoji, idx) => {
                                    return (


                                        <td key={idx} onClick={() => this.props.onAddEmoji(emoji)}>{emoji}</td>

                                    )

                                })}

                            </tr>
                        )

                    })}

                </tbody>
            </table>
        )

    }


}