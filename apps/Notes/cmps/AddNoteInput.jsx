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
    isAddInput: false
  }

  onMainInputChange = (ev) => {
    // console.log(ev.target.value)
    // this.setState({note: 'noti'})
  }

  onSecInputChange = (ev) => {
    console.log(ev.target.value)
  }

  onKeySubmitMain = (ev) => {
    if (ev.key !== 'Enter') return;

    const { type } = this.state.note

    if (type === 'NoteTxt') this.addTxtNote(ev);
    else if (type === 'NoteImg') this.addInput(ev);
  }

  onKeySubmitSec = (ev) => {
    if (ev.key !== 'Enter') return;
    let copy = this.state.info;
    // copy.title = ev.target.value;
    // this.setState({info: copy})
  }

  addInput = (ev) => {
    const url = ev.target.value;
    let infoCopy = this.state.note.info;
    infoCopy.url = url

    this.setState({ isAddInput: true }) //continue from here dont confused names
    // let copy = this.state.note;
    // copy.info = { txt }
    // this.setState({ note: copy }, () => {
    //   noteService.addNoteToList(this.state.note)
    //   this.props.loadNotes();
    //   this.reasetState()
    // })
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

        <input className="main-input" autoFocus type="text"
          placeholder={this.state.placeHolder} onChange={this.onMainInputChange}
          onKeyDown={this.onKeySubmitMain} />

        {this.state.isAddInput && <input autoFocus type="text"
          onChange={this.onSecInputChange} onKeyDown={this.onKeySubmitSec} />}
      </div>
    )
  }
}