

export function NoteTxt({info, isPinned, style }) {

  return (
    <article className="note-txt" style={{backgroundColor: style.backgroundColor}}>
      <p>{info.txt}</p>
    </article>
  )
}
        
