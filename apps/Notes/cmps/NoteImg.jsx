import { noteService } from '../services/note-service.js'

export function NoteImg({ isClickable = true, activePreview, info, isPinned, style, id, loadNotes }) {

  let isActivePreview = isClickable;

  function onPinNote(ev, id) {
    ev.stopPropagation();
    noteService.pinNote(id);
    loadNotes();
    isPinned = true;
  }

  return (
    <article onClick={() => isActivePreview ? activePreview(id) : () => false}
      className="note-img" style={{ backgroundColor: style.backgroundColor }}>
      <h1><button className="pin-btn" onClick={(event) => onPinNote(event ,id)}>📌</button>{info.title}</h1>
      <div className="img-wrapper">
        <img src={info.url} />
      </div>
    </article>
  )
}
