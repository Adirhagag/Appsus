import { NoteImg } from './cmps/NoteImg.jsx';
import { NoteTxt } from './cmps/NoteTxt.jsx';
import { NoteVideo } from './cmps/NoteVideo.jsx';
import { NoteTodos } from './cmps/NoteTodos.jsx';
import { noteService } from './services/note-service.js';

export class NoteEdit extends React.Component {

  state = {
    note: null,
    isAddInput: false
    // todosStr: ''
  }

  componentDidMount() {
    const { noteId } = this.props.match.params;
    if (!noteId) return;
    noteService.getNoteById(noteId)
      .then((note) => this.setState({ note }))
  }

  onMainInputChange = (ev) => {
    const { value } = ev.target;
    let copy = this.state.note;

    if (copy.type === 'NoteTxt') copy.info.txt = value;
    else if (copy.type === 'NoteImg' || copy.type === 'NoteVideo') copy.info.url = value;
    else if (copy.type === 'NoteTodos') copy = this.handleTodosUpdate(value, copy);

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
    if (type !== 'NoteTxt' && !this.state.isAddInput) {
      this.setState({ isAddInput: true })
      return;
    }

    this.saveChanges();
  }

  onKeySubmitSec = (ev) => {
    if (ev.key !== 'Enter') return;
    this.saveChanges();
  }

  onColorInputChange = (ev) => {
    const {value} = ev.target;
    const noteCopy = this.state.note;
    noteCopy.style.backgroundColor = value;

    this.setState({note: noteCopy})
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

  handleTodosUpdate = (value, copy) => {
    let words = noteService.getConvertedTodos(value);
    let readyTodos = words.map((word) => {
      return { txt: `${word}`, doneAt: null, isMarked: false }
    });
    copy.info = { todos: readyTodos, todosStr: value, title: copy.info.title }
    return copy;
  }


  render() {
    if (!this.state.note) return ''; // ask about it
    const { note } = this.state;
    return (
      <section className="note-edit">
        <input type="text" className="main-input" onChange={this.onMainInputChange}
          onKeyDown={this.onKeySubmitMain} autoFocus
          value={(note.type === 'NoteTxt') ? note.info.txt :
            (note.type === 'NoteTodos') ? note.info.todosStr : note.info.url} />

        {this.state.isAddInput && <input autoFocus type="text" value={note.info.title}
          onChange={this.onSecInputChange} onKeyDown={this.onKeySubmitSec} />}

        <button onClick={this.saveChanges} className="save">Save Changes</button>

        <div className="input-wrapper">
          <input className="color-input" name="color-input" type="color"
            onChange={this.onColorInputChange} value={note.style.backgroundColor}/>
        </div>

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
