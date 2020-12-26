
export function LongTxt({ isLongTxtShown, text }) {

    let desc = ''

    if (isLongTxtShown) {
        desc = text
    } else {
        desc = text.substring(0, 50) + '...'
    }

    return (
        <div>
            {desc}
        </div>
    )
}