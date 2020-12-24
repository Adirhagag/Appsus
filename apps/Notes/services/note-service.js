import { utilService } from '../../../services/utils.js'

export const noteService = {
  qurey,
  addNoteToList,
  getConvertedTodos,
  getNoteById
}


let gNotes = _getDemoNotes();

function qurey() {
  return Promise.resolve(gNotes);
}

function addNoteToList(note) {
  let notesCopy = [...gNotes];
  note.id = utilService.makeId();
  notesCopy.unshift(note)
  gNotes = notesCopy
}

function getConvertedTodos(commaSepList) {
  let words = commaSepList.split(',');
  return words;
}

function getNoteById(id) {
  return gNotes.find((note) => note.id === id)
  // return gNotes.find((note) => note.id === id)
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
      url: 'https://thumbs.dreamstime.com/b/funny-cat-smiling-tongue-very-smile-cardboard-134655541.jpg',
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
      title: 'How was it:',
      todos: [
        { txt: 'Do that', doneAt: null, isMarked: false },
        { txt: 'Do this', doneAt: 187111111, isMarked: false }
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
      url: 'https://www.youtube.com/embed/vmAaVgUzNh8',
      title: 'speacial title'
    },
    style: {
      backgroundColor: 'yellow'
    }
  }
  ];

  return notes
}
