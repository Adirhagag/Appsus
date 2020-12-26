

export function NoteImg({ isClickable = true, activePreview, info, isPinned, style, id }) {

  let isActivePreview = isClickable;

  return (
    <article onClick={() => isActivePreview ? activePreview(id) : () => false}
      className="note-img" style={{ backgroundColor: style.backgroundColor }}>
      <h1>{info.title}</h1>
      <div className="img-wrapper">
        <img src={info.url} />
      </div>
    </article>
  )
}
