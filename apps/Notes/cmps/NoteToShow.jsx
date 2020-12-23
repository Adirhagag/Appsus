import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { NoteTodos } from './NoteTodos.jsx'

export function NoteToShow({ currCmp, info, isPinned, style, id }) {

  switch (currCmp) {
    case 'NoteTxt':
      return <NoteTxt info={info} isPinned={isPinned} style={style} id={id}/>
    case 'NoteImg':
      return <NoteImg info={info} isPinned={isPinned} style={style} id={id}/>
    case 'NoteVideo':
      return <NoteVideo info={info} isPinned={isPinned} style={style} id={id}/>
    case 'NoteTodos':
      return <NoteTodos info={info} isPinned={isPinned} style={style} id={id} />
  }

  return (
    <p>Invalid Undifind not found</p>
  )
}
