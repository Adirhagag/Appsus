

export function NoteTxt({ info, isPinned, style, id }) {
  
  return (
    <article className="note-txt" style={{backgroundColor: style.backgroundColor}}>
      <p>{info.txt}</p>
    </article>
  )
}
        
