import { NoteTxt } from './cmps/NoteTxt.jsx'
import { noteService } from './services/note-service.js'
import { NoteToShow } from './cmps/NoteToShow.jsx'
import { utilService } from '../../services/utils.js'

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
        <input type="text" />

        <main className="note-to-show">
          {notes.map((note, idx) =>
            <NoteToShow key={utilService.makeId()} currCmp={note.type} info={note.info} isPinned={note.isPinned}
              style={note.style} />
          )}
        </main>

      </section>
    )
  }
}

// {notes.map((note, idx) => <main key={idx}>
// <NoteToShow currCmp={note.type} info={note.info} isPinned={note.isPinned}
//   style={note.style}/>
// </main>)}