import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { NoteTodos } from './NoteTodos.jsx'

export function NoteList({ loadNotes ,activePreview ,currCmp, info, isPinned, style, id }) {

  switch (currCmp) {
    case 'NoteTxt':
      return <NoteTxt loadNotes={loadNotes} activePreview={activePreview} info={info} isPinned={isPinned} style={style} id={id}/>
    case 'NoteImg':
      return <NoteImg loadNotes={loadNotes} activePreview={activePreview} info={info} isPinned={isPinned} style={style} id={id}/>
    case 'NoteVideo':
      return <NoteVideo loadNotes={loadNotes} activePreview={activePreview} info={info} isPinned={isPinned} style={style} id={id}/>
    case 'NoteTodos':
      return <NoteTodos loadNotes={loadNotes} activePreview={activePreview} info={info} isPinned={isPinned} style={style} id={id} />
  }

  return (
    <p>Invalid Undifind not found</p>
  )
}
