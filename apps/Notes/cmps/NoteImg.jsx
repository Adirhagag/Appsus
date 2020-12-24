

export function NoteImg({ info, isPinned, style, id }) {

  return (
    <article className="note-img" style={{ backgroundColor: style.backgroundColor }}>
      <h1>{info.title}</h1>
      <div className="img-wrapper">
        <img src={info.url} />
      </div>
    </article>
  )
}
