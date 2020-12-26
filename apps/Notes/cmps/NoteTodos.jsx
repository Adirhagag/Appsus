

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

  render() {
    const { info } = this.props;
    let isActivePreview = this.props.isClickable; // check it
    return (
      <article onClick={() => isActivePreview ? activePreview(id) : () => false}
        className="note-todos" style={{ backgroundColor: this.props.style.backgroundColor }}>
        <h1>{info.title}</h1>

        <ul>
          {info.todos.map((todo, idx) => <li onClick={() => this.onTodoClick(idx)}
            key={idx} className={(!todo.isMarked) ? '' : 'done'} >{todo.txt}</li>)}
        </ul>
      </article>
    )
  }
}
