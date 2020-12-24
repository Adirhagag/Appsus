export function LongTxt({ text }) {

    let desc = ''

    // if (isLongTxtShown) {
    //     desc = text
    // } else {
    //     desc = text.substring(0, 5) + '...'
    // }
    if (text.length>25) {
        desc = text.substring(0, 20) + '...'
    }
    else desc = text
    return (
        <div>
            {desc}
        </div>
    )
}
