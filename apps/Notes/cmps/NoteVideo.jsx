import { noteService } from '../services/note-service.js'

export function NoteVideo({ isClickable = true, activePreview, info, isPinned, style, id, loadNotes }) {
  // check the embed thing

  let isActivePreview = isClickable;

  function myFunction() {
    var str = info.url;
    var res = str.split("=");
    var embeddedUrl = "https://www.youtube.com/embed/" + res[1];
    return embeddedUrl;
  }

  function onPinNote(ev, id) {
    ev.stopPropagation();
    noteService.pinNote(id);
    loadNotes();
    isPinned = true;
  }

  return (
    <article onClick={() => isActivePreview ? activePreview(id) : () => false}
      className="note-video" style={{ backgroundColor: style.backgroundColor }}>
      <h1><button className="pin-btn" onClick={(event) => onPinNote(event ,id)}>📌</button>{info.title}</h1>

      <div className="video-container">
        <iframe width="420" height="345" src={myFunction()}>
        </iframe>
      </div>
    </article>
  )
}
