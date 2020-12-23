

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
    return (
      <article className="note-todos" style={{ backgroundColor: this.props.style.backgroundColor }}>
        <h1>{info.label}</h1>

        <ul>
          {info.todos.map((todo, idx) => <li onClick={() => this.onTodoClick(idx)}
            key={idx} className={(!todo.isMarked) ? '' : 'done'} >{todo.txt}</li>)}
        </ul>
      </article>
    )
  }
}
