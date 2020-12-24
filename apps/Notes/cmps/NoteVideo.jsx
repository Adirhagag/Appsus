

export function NoteVideo({ info, isPinned, style, id }) {
// check the embed thing

  return (
    <article className="note-video" style={{ backgroundColor: style.backgroundColor }}>
      <h1>{info.title}</h1>
    
      <div className="video-container">
        <iframe width="420" height="345" src={info.url}>
        </iframe>
      </div>
    </article>
  )
}
