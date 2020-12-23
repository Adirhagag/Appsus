import { storageService } from "../../../services/storage-service.js";

export const emailService = {
  query,
  getById,
  save,
  remove,
  setEmailRead
};
const ENAIL_KEY = 'emailDB'


var emails;
_createEmails();


window.theEmails = emails;

function query() {
  return Promise.resolve(emails);
}

function getById(bookId) {
  const book = emails.find(book => book.id === bookId);
  return Promise.resolve(book);
}

function save(book, review) {
  var bookId = book.id;
  const reviewToAdd = {
    ...review,
  };
  const booksCopy = [...emails];
  const bookIdx = emails.findIndex(book => book.id === bookId)
  if (booksCopy[bookIdx].reviews) booksCopy[bookIdx].reviews = [reviewToAdd, ...book.reviews]
  else booksCopy[bookIdx].reviews = [reviewToAdd]
  emails = booksCopy;
  _saveTostorage()
  return Promise.resolve(booksCopy[bookIdx])
}

function _createEmails() {
  var emailsFromStorage = storageService.load(ENAIL_KEY)
  if (!emailsFromStorage || !emailsFromStorage.length) {
    emailsFromStorage = [
        { id:'hgroo' ,senderName:'yeal',subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
        { id:'dbhfek', senderName:'adir',subject: 'hi?', body: 'Pick up!', isRead: true, sentAt : 1551133930594},
        
    ]

  }
  emails = emailsFromStorage
  console.log(emails)
  _saveTostorage()
}
function _saveTostorage() {
  storageService.save(ENAIL_KEY, emails)

}
function remove(book, reviewIdx) {
  // book.reviews = [...book.reviews]
  book.reviews = book.reviews.filter((rev, idx) => idx !== reviewIdx);
  return Promise.resolve(book);
}
function setEmailRead(emailId){
    const email = emails.findIndex(email => email.id === emailId);
    const copyEmails=[...emails]
    copyEmails[email].isRead=!copyEmails[email].isRead
    emails=copyEmails;
    _saveTostorage();
    //  return Promise.resolve(emails[emailId])
}




