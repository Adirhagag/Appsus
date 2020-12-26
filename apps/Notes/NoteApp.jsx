import { noteService } from './services/note-service.js'
import { NoteList } from './cmps/NoteList.jsx'
import { utilService } from '../../services/utils.js'
import { AddNoteInput } from './cmps/AddNoteInput.jsx'
import { NotePreview } from './cmps/NotePreview.jsx'
import { NoteFilter } from './cmps/NoteFilter.jsx'

export class NoteApp extends React.Component {

  state = {
    notes: [],
    filterBy: {
      title: ''
    },
    noteClicked: false,
    noteToShow: null
  }

  componentDidMount() {
    this.loadNotes()
  }

  loadNotes = () => {
    noteService.qurey().then((notes) => this.setState({ notes }));
  }

  previewActive = (id) => {
    noteService.getNoteById(id)
      .then((note) => this.setState({ noteClicked: true, noteToShow: note }))
  }

  backToNoteApp = () => {
    this.setState({ noteClicked: false })
  }

  getNotesForDisplay = () => {
    const { filterBy } = this.state;
    const filterRegex = new RegExp(filterBy.title, 'i');
    console.log(this.state.notes)
    return this.state.notes.filter(note => {
      if (note.type === 'NoteTxt') return filterRegex.test(note.info.txt);
      else return filterRegex.test(note.info.title)
    });
  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy });
  }


  render() {
    const { notes } = this.state;
    if (notes.length === 0) return null
    const notesForDisplay = this.getNotesForDisplay();
    console.log(notesForDisplay)
    return (
      <section className="note-app">
        <h1>Keep app</h1>
        <AddNoteInput loadNotes={this.loadNotes} />
        <NoteFilter setFilter={this.onSetFilter} />
        {this.state.noteClicked && <NotePreview loadNotes={this.loadNotes} backToNoteApp={this.backToNoteApp} noteToShow={this.state.noteToShow} />}
        <main className="note-to-show">
          {notesForDisplay.map((note) =>
            <NoteList key={utilService.makeId()} currCmp={note.type} info={note.info} isPinned={note.isPinned}
              style={note.style} id={note.id} activePreview={this.previewActive} loadNotes={this.loadNotes}/>
          )}
        </main>

      </section>
    )
  }
}
