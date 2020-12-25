import { noteService } from './services/note-service.js'
import { NoteList } from './cmps/NoteList.jsx'
import { utilService } from '../../services/utils.js'
import { AddNoteInput } from './cmps/AddNoteInput.jsx'
import { NotePreview } from './cmps/NotePreview.jsx'

export class NoteApp extends React.Component {

  state = {
    notes: [],
    noteClicked: false,
    noteToShow: null
  }

  componentDidMount() {
    this.loadNotes()
  }

  loadNotes = () => {
    noteService.qurey().then((notes) => this.setState({ notes: notes }));
  }

  previewActive = (id) => {
    noteService.getNoteById(id)
      .then((note) => this.setState({ noteClicked: true, noteToShow: note }))
  }

  backToNoteApp = () => {
    this.setState({ noteClicked: false })
  }


  render() {
    const { notes } = this.state;
    if (notes.length === 0) return null

    return (
      <section className="note-app">
        <h1>Keep app</h1>
        <AddNoteInput loadNotes={this.loadNotes} />
        {this.state.noteClicked && <NotePreview loadNotes={this.loadNotes} backToNoteApp={this.backToNoteApp} noteToShow={this.state.noteToShow} />}
        <main className="note-to-show">
          {notes.map((note) =>
            <NoteList key={utilService.makeId()} currCmp={note.type} info={note.info} isPinned={note.isPinned}
              style={note.style} id={note.id} activePreview={this.previewActive} />
          )}
        </main>

      </section>
    )
  }
}
