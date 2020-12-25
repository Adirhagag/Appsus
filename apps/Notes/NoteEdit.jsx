import { NoteImg } from './cmps/NoteImg.jsx';
import { NoteTxt } from './cmps/NoteTxt.jsx';
import { NoteVideo } from './cmps/NoteVideo.jsx';
import { NoteTodos } from './cmps/NoteTodos.jsx';
import { noteService } from './services/note-service.js';

export class NoteEdit extends React.Component {

  state = {
    note: null,
    isAddInput: false,
    todosStr: ''
  }

  componentDidMount() {
    const { noteId } = this.props.match.params;
    if (!noteId) return;
    noteService.getNoteById(noteId)
      .then((note) => {
        if (note.type === 'NoteTodos') {
          const todosStr = this.getTodosStr(note);
          this.setState({ note, todosStr }) // continue from input val strTodos
          return
        }

        this.setState({ note })
      })
  }

  getTodosStr = (note) => {
    return noteService.todosToStr(note);
  }

  onMainInputChange = (ev) => {
    const { value } = ev.target;
    let copy = this.state.note;

    if (copy.type === 'NoteTxt') copy.info.txt = value;
    else if (copy.type === 'NoteImg' || copy.type === 'NoteVideo') copy.info.url = value;
    else if (copy.type === 'NoteTodos') {
      this.setState({ note: copy, todosStr: value })
      return
    };

    this.setState({ note: copy })
  }

  onSecInputChange = (ev) => {
    const { value } = ev.target;
    let copy = this.state.note;
    copy.info.title = value;

    this.setState({ note: copy })
  }

  onKeySubmitMain = (ev) => {
    if (ev.key !== 'Enter') return;
    const { type } = this.state.note;
    if (type === 'NoteImg' || type === 'NoteVideo' && !this.state.isAddInput) {
      this.setState({ isAddInput: true })
      return;
    }

    this.saveChanges();
  }

  onKeySubmitSec = (ev) => {
    if (ev.key !== 'Enter') return;
    this.saveChanges();
  }

  saveChanges = () => {
    const { note } = this.state;
    noteService.updateNote(note)
      .then(() => {
        alert('Note just got update... enjoy!')
        this.props.history.push('/note')
      })
    // user msg when components will merge
  }



  render() {
    if (!this.state.note) return ''; // ask about it
    const { note } = this.state;
    return (
      <section className="note-edit">
        <input type="text" className="main-input" onChange={this.onMainInputChange}
          onKeyDown={this.onKeySubmitMain} autoFocus
          value={(note.type === 'NoteTxt') ? note.info.txt : note.info.url} />

        {this.state.isAddInput && <input autoFocus type="text" value={note.info.title}
          onChange={this.onSecInputChange} onKeyDown={this.onKeySubmitSec} />}

        {note.type === 'NoteTxt' && <NoteTxt isClickable={false} info={note.info}
          isPinned={note.isPinned} style={note.style} id={note.id} />}

        {note.type === 'NoteImg' && <NoteImg isClickable={false} info={note.info}
          isPinned={note.isPinned} style={note.style} id={note.id} />}

        {note.type === 'NoteVideo' && <NoteVideo isClickable={false} info={note.info}
          isPinned={note.isPinned} style={note.style} id={note.id} />}

        {note.type === 'NoteTodos' && <NoteTodos isClickable={false} info={note.info}
          isPinned={note.isPinned} style={note.style} id={note.id} />}
      </section>
    )
  }
}
