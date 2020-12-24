import { noteService } from "../services/note-service.js";


export class AddNoteInput extends React.Component {

  state = {
    placeHolder: 'Whats on your mind...',
    note: {
      type: 'NoteTxt',
      id: 0,
      info: null,
      style: {
        backgroundColor: 'yellow'
      }
    },
    isAddInput: false,
    mainInputVal: ''
  }

  mainInputRef = React.createRef();

  componentDidMount() {
    this.mainInputRef.current.focus()
  }

  onMainInputChange = (ev) => {
    this.setState({ mainInputVal: ev.target.value })
  }

  onKeySubmitMain = (ev) => {
    if (ev.key !== 'Enter') return;
    const { type } = this.state.note
    if (type === 'NoteTxt') this.addTxtNote(ev);
    else if (type === 'NoteImg' || type === 'NoteVideo') this.addInput('url', ev);
    else if (type === 'NoteTodos') this.handleTodoAdd(ev);
  }

  onKeySubmitSec = (ev) => {
    if (ev.key !== 'Enter') return;
    let noteCopy = this.state.note;
    noteCopy.info.title = ev.target.value;
    this.setState({ note: noteCopy }, () => {
      noteService.addNoteToList(this.state.note)
      this.props.loadNotes();
      this.reasetState()
    })
  }

  addInput = (type, ev) => {
    if (type === 'url') {
      const url = ev.target.value;
      let noteCopy = this.state.note;
      noteCopy.info = { url }
      this.setState({ isAddInput: true, note: noteCopy })
    } else if (type === 'todo') {
      this.setState({ isAddInput: true })
    }
  }

  addTxtNote = (ev) => {
    const txt = ev.target.value;
    let copy = this.state.note;
    copy.info = { txt }
    this.setState({ note: copy }, () => {
      noteService.addNoteToList(this.state.note)
      this.props.loadNotes();
      this.reasetState()
    })
  }

  handleTodoAdd = (ev) => {
    let words = noteService.getConvertedTodos(ev.target.value);
    let noteCopy = this.state.note;

    let readyTodos = words.map((word) => {
      return { txt: `${word}`, doneAt: null, isMarked: false }
    });

    noteCopy.info = { todos: readyTodos }
    this.setState({ note: noteCopy })
    this.addInput('todo')
  }

  reasetState = () => {
    let copy = this.state;
    copy.placeHolder = 'Whats on your mind...'
    copy.note = {
      type: 'NoteTxt',
      id: 0,
      info: null,
      style: {
        backgroundColor: 'yellow'
      }
    }
    copy.isAddInput = false
    copy.mainInputVal = ''
    this.setState({
      placeHolder: copy.placeHolder,
      note: copy.note,
      isAddInput: copy.isAddInput
    })
  }

  onImgClick = (type) => {
    let placeHolder;
    switch (type) {
      case 'NoteTxt':
        placeHolder = 'Whats on your mind...'
        break;
      case 'NoteTodos':
        placeHolder = 'Add comma separated list...'
        break;
      case 'NoteImg':
        placeHolder = 'Enter image URL...'
        break;
      case 'NoteVideo':
        placeHolder = 'Enter video URL...'
        break;
    }
    let copy = this.state.note;
    copy.type = type;
    this.setState({ placeHolder, note: copy }, () => console.log('copy', copy))
    this.mainInputRef.current.focus();
  }

  render() {
    return (
      <div className="input-container">
        <div className="input-imgs">
          <img src="./assets/img/a.png" onClick={() => this.onImgClick('NoteTxt')} alt="" />
          <img src="./assets/img/list.png" onClick={() => this.onImgClick('NoteTodos')} />
          <img src="./assets/img/picture.png" onClick={() => this.onImgClick('NoteImg')} />
          <img src="./assets/img/video.png" onClick={() => this.onImgClick('NoteVideo')} />
        </div>

        <input className="main-input" type="text" value={this.state.mainInputVal} ref={this.mainInputRef}
          placeholder={this.state.placeHolder} onKeyDown={this.onKeySubmitMain} onChange={this.onMainInputChange} />

        {this.state.isAddInput && <input autoFocus type="text" onKeyDown={this.onKeySubmitSec} />}
      </div>
    )
  }
}