const { Link } = ReactRouterDOM;

export class NotePreview extends React.Component {

  state = {
    note: this.props.noteToShow,
    skeletonType: ''
  }

  componentDidMount() {
    this.checkNoteType();
    document.body.classList.add('stop-body-events')
  }

  componentWillUnmount() {
    document.body.classList.remove('stop-body-events')
  }
  

  checkNoteType = () => {
    const { type } = this.state.note;
    let skeletonType;
    switch (type) {
      case 'NoteTxt':
        skeletonType = 'NoteTxt'
        break;
      case 'NoteTodos':
        skeletonType = 'NoteTodos'
        break;
      case 'NoteImg':
        skeletonType = 'NoteImg'
        break;
      case 'NoteVideo':
        skeletonType = 'NoteVideo'
        break;
    }
    this.setState({ skeletonType })
  }

  onClosePreview = () => {
    document.body.classList.remove('stop-body-events')
    this.props.backToNoteApp();
  }

  render() {
    const { note } = this.state;
    return (
      <div className="note-preview" style={{ backgroundColor: note.style.backgroundColor }}>
        <button onClick={this.onClosePreview} className="close">✕</button>
        {this.state.skeletonType === 'NoteTxt' && <div>
          <p>{note.info.txt}</p>
          <Link to={`/note/edit/${note.id}`}>Edit me</Link>
        </div>}

        {this.state.skeletonType === 'NoteImg' && <div className="note-img-wrapper">
          <h1>{note.info.title}</h1>
          <div className="img-wrapper">
            <img src={note.info.url} />
          </div>
          <Link to={`/note/edit/${note.id}`}>Edit me</Link>
        </div>}

        {this.state.skeletonType === 'NoteVideo' && <div className="full-video-info">
          <h1>{note.info.title}</h1>
          <div className="video-container">
            <iframe width="420" height="345" src={note.info.url}>
            </iframe>
          </div>
          <Link to={`/note/edit/${note.id}`}>Edit me</Link>
        </div>}

        {this.state.skeletonType === 'NoteTodos' && <div>
          <h1>{note.info.title}</h1>
          <ul>
            {note.info.todos.map((todo, idx) => <li key={idx}
              className={(!todo.isMarked) ? '' : 'done'} >{todo.txt}</li>)}
          </ul>
          <Link to={`/note/edit/${note.id}`}>Edit me</Link>
        </div>}
      </div >
    )
  }
}
