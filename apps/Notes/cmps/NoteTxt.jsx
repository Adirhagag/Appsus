import { noteService } from '../services/note-service.js'

export function NoteTxt({ isClickable = true, activePreview, info, isPinned, style, id }) {

  let isActivePreview = isClickable;

  return (
    <article onClick={() => isActivePreview ? activePreview(id) : () => false}
      className="note-txt" style={{ backgroundColor: style.backgroundColor }}>
      <p>{info.txt}</p>
    </article>
  )
}

