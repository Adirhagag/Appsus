import { utilService } from '../../../services/utils.js'
import { storageService } from '../../../services/storage-service.js'

const NOTES_KEY = 'notesDB';
export const noteService = {
  qurey,
  addNoteToList,
  getConvertedTodos,
  getNoteById,
  updateNote,
  remove,
  pinNote
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

function pinNote(id) {
  let notes = gNotes;
  getNoteById(id).then((note) => {
    const noteIdx = getNoteIdx(note);
    notes.unshift(notes.splice(noteIdx, 1)[0]);
    gNotes = notes;
  })
}

function getNoteIdx(noteToFind) {
  return gNotes.findIndex((note) => note.id === noteToFind.id)
}

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
  const notes = [
    {
      type: 'NoteTxt',
      id: utilService.makeId(),
      isPinned: false,
      info: {
        txt: 'Lorem ipsom is the man, and he is hot and single, so all the single ladies all the single ladies'
      },
      style: {
        backgroundColor: 'yellow'
      }
    }, {
      type: 'NoteImg',
      id: utilService.makeId(),
      isPinned: false,
      info: {
        url: 'https://i.pinimg.com/originals/d0/a3/ce/d0a3ceb137e4b40812f4e280bea3fa3e.png',
        title: 'Man got a do what a man got a do'
      },
      style: {
        backgroundColor: 'gray'
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
          { txt: 'Go runing', doneAt: null, isMarked: false },
          { txt: 'Keep on smiling', doneAt: 187111111, isMarked: true },
          { txt: 'Put some oil on my motorcycle', doneAt: 187111111, isMarked: false }
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
        url: 'https://www.youtube.com/watch?v=kTT-SHNX7ss',
        title: 'Cafe racers are the best!'
      },
      style: {
        backgroundColor: 'lightgreen'
      }
    },
    {
      type: 'NoteTxt',
      id: utilService.makeId(),
      isPinned: false,
      info: {
        txt: 'Fullstack Me Baby!'
      },
      style: {
        backgroundColor: 'lightgray'
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
        backgroundColor: 'lightblue'
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
        backgroundColor: 'pink'
      }
    }
  ];

  return notes
}
