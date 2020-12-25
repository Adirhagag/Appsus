import { utilService } from '../../../services/utils.js'

export const noteService = {
  qurey,
  addNoteToList,
  getConvertedTodos,
  getNoteById,
  updateNote,
  todosToStr
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

function updateNote(note) {
  console.log('gNotes before', gNotes)
  const noteToUpdate = {
    ...note
  };
  console.log(noteToUpdate);
  const notesCopy = [...gNotes];
  const noteIdx = notesCopy.findIndex(note => note.id === note.id);
  notesCopy[noteIdx] = noteToUpdate;
  gNotes = notesCopy;
  console.log('gNotes after', gNotes)
  return Promise.resolve(noteToUpdate);
}

function getConvertedTodos(commaSepList) {
  let words = commaSepList.split(',');
  return words;
}

function todosToStr(note) {
  let todosStr = ''
  note.info.todos.forEach((todo) => {
    todosStr += `${todo.txt}, `
  })
  return todosStr;
}

function getNoteById(id) {
  const note = gNotes.find((note) => note.id === id)
  return Promise.resolve(note);
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
