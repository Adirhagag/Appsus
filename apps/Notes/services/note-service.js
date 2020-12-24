import { utilService } from '../../../services/utils.js'

export const noteService = {
  qurey,
  addNoteToList,
  getConvertedTodos
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

// function createNewNote(type, id, isPinned, info, style) {}

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
      url: 'https://i.ytimg.com/vi/Zo_Y-n__Cbc/maxresdefault.jpg',
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
