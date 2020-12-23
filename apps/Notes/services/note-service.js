import { utilService } from '../../../services/utils.js'

export const noteService = {
  qurey
}


let gNotes = _getDemoNotes();

function qurey() {
  return Promise.resolve(gNotes);
}

function _getDemoNotes() {
  let notes = [{
    type: 'NoteTxt',
    id: utilService.makeId(),
    isPinned: false,
    info: {
      txt: 'Fullstack Me Baby!'
    },
    style: {
      backgroundColor: 'yellow'
    }
  }, {
    type: 'NoteImg',
    id: utilService.makeId(),
    isPinned: false,
    info: {
      url: 'http://some-img/me',
      title: 'Me playing Mi'
    },
    style: {
      backgroundColor: 'yellow'
    }
  },
  {
    type: 'NoteTodos',
    id: utilService.makeId(),
    isPinned: false,
    info: {
      label: 'How was it:',
      todos: [
        { txt: 'Do that', doneAt: null },
        { txt: 'Do this', doneAt: 187111111 }
      ]
    },
    style: {
      backgroundColor: 'yellow'
    }
  },
  {
    type: 'NoteVideo',
    id: utilService.makeId(),
    isPinned: false,
    info: {
      url: 'http://fake.url',
      title: 'speacial title'
    },
    style: {
      backgroundColor: 'yellow'
    }
  }
  ];

  return notes
}