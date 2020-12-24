import { storageService } from "../../../services/storage-service.js";

export const emailService = {
    query,
    getEmailById,
    save,
    removeEmail,
    setEmailRead,
    doConfirm,
    getCountUnreadEmail,
    sortByTitle,
     getCountReadEmail,
     addEmail,
     sortByDate,
     setEmailStarres
};
const EMAIL_KEY = 'emailDB'


var gEmails;
_createEmails();


window.theEmails = gEmails;

function query() {
    return Promise.resolve(gEmails);
}
function addEmail(emailToAdd){
     gEmails=[emailToAdd,...gEmails];
    _saveTostorage();
}

function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email);
    
}
function sortByTitle(emailsToSort){
   emailsToSort= emailsToSort.sort((email1,email2)=>{
        if(email1.subject.toLowerCase()>email2.subject.toLowerCase()) return 1
        else if (email1.subject.toLowerCase()  < email2.subject.toLowerCase() ) return -1;
        else return 0;
    })
    return emailsToSort
}
function sortByDate(emailsToSort){
    emailsToSort=emailsToSort.sort((email1,email2)=> {
        return email2.sentAt - email1.sentAt
    })
    return  emailsToSort
}

function save(book, review) {
    var bookId = book.id;
    const reviewToAdd = {
        ...review,
    };
    const booksCopy = [...gEmails];
    const bookIdx = gEmails.findIndex(book => book.id === bookId)
    if (booksCopy[bookIdx].reviews) booksCopy[bookIdx].reviews = [reviewToAdd, ...book.reviews]
    else booksCopy[bookIdx].reviews = [reviewToAdd]
    gEmails = booksCopy;
    _saveTostorage()
    return Promise.resolve(booksCopy[bookIdx])
}

function _createEmails() {
    var emailsFromStorage = storageService.load(EMAIL_KEY)
    if (!emailsFromStorage || !emailsFromStorage.length) {
        emailsFromStorage = [
            { id: 'hgroo', senderName: 'yeal', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594,isstarred:false},
            { id: 'dbhfek', senderName: 'adir', subject: 'hi?', body: 'hello long time no see!', isRead: true, sentAt: 1551133930594,isstarred:false },

        ]

    }
    gEmails = emailsFromStorage
    console.log(gEmails)
    _saveTostorage()
}
function _saveTostorage() {
    storageService.save(EMAIL_KEY, gEmails)

}
function removeEmail(emailId) {
    if (!confirm('sure?')) return

    let copyEmails = [...gEmails]
    copyEmails = copyEmails.filter(email => email.id !== emailId);

    gEmails = copyEmails;
    console.log(gEmails);
    _saveTostorage()

}
function getCountUnreadEmail() {
    const unreadEmail = gEmails.reduce((acc, email) => {
        if (!email.isRead) acc++;
        return acc
    }, 0);
    console.log(unreadEmail);
    return Promise.resolve(unreadEmail)
}
function getCountReadEmail() {
    const readEmail = gEmails.reduce((acc, email) => {
        if (email.isRead) acc++;
        return acc
    }, 0);
    console.log('read mail',readEmail);
    return Promise.resolve(readEmail)
}
function setEmailRead(emailId) {
    const email = gEmails.findIndex(email => email.id === emailId);
    const copyEmails = [...gEmails]
    copyEmails[email].isRead = !copyEmails[email].isRead
    gEmails = copyEmails;
    _saveTostorage();
    
}
function setEmailStarres(emailId){
    const email = gEmails.findIndex(email => email.id === emailId);
    const copyEmails = [...gEmails]
    copyEmails[email].isstarred = !copyEmails[email].isstarred
    gEmails = copyEmails;
    _saveTostorage();

}
function doConfirm(msg) {
    const prm = new Promise((resolve) => {
        keepResolve = resolve;
    });
    return prm;
   
}



