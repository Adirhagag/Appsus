import { noteService } from '../services/note-service.js'

export class NoteTodos extends React.Component {

  state = {
    todos: this.props.info.todos
  }

  onTodoClick = (idx) => {
    let copy = this.state.todos;
    copy[idx].isMarked = !copy[idx].isMarked;
    if (copy[idx].isMarked) copy[idx].doneAt = Date.now();
    this.setState({ todos: copy })
  }

  onPinNote = (ev, id) => {
    ev.stopPropagation();
    noteService.pinNote(id);
    this.props.loadNotes();
    this.props.isPinned = true;
  }

  render() {
    const { info } = this.props;
    let isActivePreview = true; // check it
    return (
      <article onClick={() => isActivePreview ? this.props.activePreview(this.props.id) : () => false}
        className="note-todos" style={{ backgroundColor: this.props.style.backgroundColor }}>
        <h1><button className="pin-btn" onClick={(event) => this.onPinNote(event ,this.props.id)}>📌</button>{info.title}</h1>

        <ul>
          {info.todos.map((todo, idx) => <li onClick={() => this.onTodoClick(idx)}
            key={idx} className={(!todo.isMarked) ? '' : 'done'} >{todo.txt}</li>)}
        </ul>
      </article>
    )
  }
}
