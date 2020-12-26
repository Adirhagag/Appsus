import { noteService } from '../services/note-service.js'

export function NoteTxt({ isClickable = true, activePreview, info, isPinned, style, id, loadNotes }) {

  let isActivePreview = isClickable;

  function onPinNote(ev, id) {
    ev.stopPropagation();
    noteService.pinNote(id);
    loadNotes();
    isPinned = true;
  }

  return (
    <article onClick={() => isActivePreview ? activePreview(id) : () => false}
      className="note-txt" style={{ backgroundColor: style.backgroundColor }}>
      <p><button className="pin-btn" onClick={(event) => onPinNote(event ,id)}>📌</button>{info.txt}</p>
    </article>
  )
}
