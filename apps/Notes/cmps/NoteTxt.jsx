import {noteService} from '../services/note-service.js'

export function NoteTxt({ activePreview , info, isPinned, style, id }) {
  
  return (
    <article onClick={() => activePreview(id)} className="note-txt" style={{backgroundColor: style.backgroundColor}}>
      <p>{info.txt}</p>
    </article>
  )
}
        
