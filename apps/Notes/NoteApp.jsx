import { noteService } from './services/note-service.js'
import { NoteList } from './cmps/NoteList.jsx'
import { utilService } from '../../services/utils.js'
import { AddNoteInput } from './cmps/AddNoteInput.jsx'

export class NoteApp extends React.Component {

  state = {
    notes: [],
    answers: []
  }

  componentDidMount() {
    this.loadNotes()
    // this.setState({ answers: new Array(this.state.survey.cmps.length) })
  }

  loadNotes = () => {
    noteService.qurey().then((notes) => this.setState({ notes: notes }));
  }


  render() {
    const { notes } = this.state;
    if (notes.length === 0) return null

    return (
      <section className="note-app">
        <h1>Keep app</h1>
        <AddNoteInput />
        
        <main className="note-to-show">
          {notes.map((note) =>
            <NoteList key={utilService.makeId()} currCmp={note.type} info={note.info} isPinned={note.isPinned}
              style={note.style} id={note.id} />
          )}
        </main>

      </section>
    )
  }
}
