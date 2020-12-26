import { utilService } from '../../../services/utils.js'
import { storageService } from '../../../services/storage-service.js'

const NOTES_KEY = 'notesDB';
export const noteService = {
  qurey,
  addNoteToList,
  getConvertedTodos,
  getNoteById,
  updateNote,
  remove
}


let gNotes;
_createNotes();

function _createNotes() {
  gNotes = storageService.load(NOTES_KEY);
  if (!gNotes || !gNotes.length) {
    gNotes = _getDemoNotes();
    _saveNotesToStorage();
  }
}

function qurey() {
  return Promise.resolve(gNotes);
}

function addNoteToList(note) {
  let notesCopy = [...gNotes];
  note.id = utilService.makeId();
  notesCopy.unshift(note)
  gNotes = notesCopy
  _saveNotesToStorage();
}

function updateNote(note) {
  const noteToUpdate = {
    ...note
  };
  const notesCopy = [...gNotes];
  const noteIdx = notesCopy.findIndex(note => note.id === note.id);
  notesCopy[noteIdx] = noteToUpdate;
  gNotes = notesCopy;
  _saveNotesToStorage();
  return Promise.resolve(noteToUpdate);
}

function getConvertedTodos(commaSepList) {
  let words = commaSepList.split(',');
  return words;
}

// function todosToStr(note) { // also not imported if will use
//   let todosStr = ''
//   note.info.todos.forEach((todo) => {
//     todosStr += `${todo.txt}, `
//   })
//   return todosStr;
// }

function getNoteById(id) {
  const note = gNotes.find((note) => note.id === id)
  return Promise.resolve(note);
}

function remove(noteId) {
  console.log(noteId)
  let notesCopy = gNotes;
  notesCopy = notesCopy.filter(note => note.id !== noteId);
  gNotes = notesCopy
  _saveNotesToStorage()
  return Promise.resolve();
}

function _saveNotesToStorage() {
  storageService.save(NOTES_KEY, gNotes);
}

function _getDemoNotes() {
  const notes = [{
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
      todosStr: 'Do that, Do this',
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
      url: 'https://www.youtube.com/watch?v=Fo-qNzexDWE',
      title: 'speacial title'
    },
    style: {
      backgroundColor: 'yellow'
    }
  }
  ];

  return notes
}
