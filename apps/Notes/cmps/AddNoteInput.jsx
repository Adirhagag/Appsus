

export class AddNoteInput extends React.Component {

  state = {
    placeHolder: 'Whats on your mind...',
    note: ''
  }

  onHandleInputChange = (ev) => {
    console.log(ev.target.value)
    this.setState({note: 'noti'})
  }

  onKeySubmit =(ev) => {
    if (ev.key === 'Enter') console.log('clicky clicky')
  }

  onImgClick = (type) => {
    let placeHolder;
    switch (type) {
      case 'txt':
        placeHolder = 'Whats on your mind...'
        break;
      case 'list':
        placeHolder = 'Add comma separated list...'
        break;
      case 'img':
        placeHolder = 'Enter image URL...'
        break;
      case 'video':
        placeHolder = 'Enter video URL...'
        break;
    }
    this.setState({ placeHolder })
  }



  render() {
    return (
      <div className="input-container">
        <div className="input-imgs">
          <img src="./assets/img/a.png" onClick={() => this.onImgClick('txt')} alt="" />
          <img src="./assets/img/list.png" alt="" onClick={() => this.onImgClick('list')} />
          <img src="./assets/img/picture.png" alt="" onClick={() => this.onImgClick('img')} />
          <img src="./assets/img/video.png" alt="" onClick={() => this.onImgClick('video')} />
        </div>

        <input className="main-input" autoFocus type="text"
          placeholder={this.state.placeHolder} onChange={this.onHandleInputChange}
          onKeyDown={this.onKeySubmit} />
      </div>
    )
  }
}
