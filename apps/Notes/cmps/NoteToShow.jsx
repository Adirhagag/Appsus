import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'

export function NoteToShow({ currCmp, info, isPinned, style }) {

  switch (currCmp) {
    case 'NoteTxt':
      return <NoteTxt info={info} isPinned={isPinned} style={style} />
    case 'NoteImg':
      return <NoteImg info={info} isPinned={isPinned} style={style}/>
    // case 'NoteTodos':
    //   return <LinearScale info={info} onAns={onAns} />
    // case 'NoteVideo':
    //   return <LinearScale info={info} onAns={onAns} />
  }

  return (
    <p>Invalid Undifind not found</p>
  )
}
