import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { NoteTodos } from './NoteTodos.jsx'

export function NoteList({ activePreview ,currCmp, info, isPinned, style, id }) {

  switch (currCmp) {
    case 'NoteTxt':
      return <NoteTxt activePreview={activePreview} info={info} isPinned={isPinned} style={style} id={id}/>
    case 'NoteImg':
      return <NoteImg activePreview={activePreview} info={info} isPinned={isPinned} style={style} id={id}/>
    case 'NoteVideo':
      return <NoteVideo activePreview={activePreview} info={info} isPinned={isPinned} style={style} id={id}/>
    case 'NoteTodos':
      return <NoteTodos activePreview={activePreview} info={info} isPinned={isPinned} style={style} id={id} />
  }

  return (
    <p>Invalid Undifind not found</p>
  )
}
