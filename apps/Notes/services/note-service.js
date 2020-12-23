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
      url: 'https://lh3.googleusercontent.com/proxy/ueFVnsIB8jbK2Xn5f03-N8ZPANwcsWkQ5msHQP2P_mO0Tpz_I72xH6h2mFYalIZHu8fnKz9X2-8Z2TGALp8JiWz6tKaotnZknFER_HYRzZhfKR14e806N96oLUf_a_xgKZUnrlht_ANhGul5n4E1CoAt2lJVcA9w-F0',
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