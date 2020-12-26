import { storageService } from "../../../services/storage-service.js";

export const emailService = {
    query,
    getEmailById,
    removeEmail,
    setEmailRead,
    doConfirm,
    getCountUnreadEmail,
    sortByTitle,
    getCountReadEmail,
    addEmail,
    sortByDate,
    setEmailStarres,
    getEmailStarres,
    getEmailSent,
    getIconsForDisplay,
    getEmailsForFilter
};
const EMAIL_KEY = 'emailDB'


var gEmails;
var emailsSent = [];
_createEmails();
var gIcons = [
[ '😉 ','😌 ','😍','🥰','😘','😝','😁','🤣','😇'],
[ '🤓 ','😎 ','🤩','🥳','😩', '🤬', '🤯','🥶','😱'],
[ '🤠 ','😈 ','💩','☠️','👆','👍','👊','🙏','💅'],
[ '👶 ','👧 ','🧒','👵','🧓','👮‍♂️','🕵️‍♀️','👩‍🎓','👩‍❤️‍💋‍👨'],
[ '☂️ ','👓 ','👙','👑','👒','🎩','💍','💼','🎅🏻'],
[ '🐒 ','🐶 ','🐱','🐭','🐔','🦄','🐝','🐌','🐞'],
[ '🛒' ,'🎁' ,'🎈','📧','💣','💰','🛁','🚽','💻'],
['❤️' ,'🧡' ,'💛', '💚','💙','💜','🖤','🤍','💔']
  

]
 



function getIconsForDisplay() {
    // console.log(Promise.resolve(gIcons))
    return Promise.resolve(gIcons)
}

window.theEmails = gEmails;

function query() {
    return Promise.resolve(gEmails);
}
function getEmailsForFilter(){
    return gEmails;
}
function addEmail(emailToAdd) {
    gEmails = [emailToAdd, ...gEmails];
    emailsSent.push(emailToAdd)
    _saveTostorage();
}
function getEmailSent() {
    return Promise.resolve(emailsSent);
}
function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email);

}
function sortByTitle(emailsToSort) {
    emailsToSort = emailsToSort.sort((email1, email2) => {
        if (email1.subject.toLowerCase() > email2.subject.toLowerCase()) return 1
        else if (email1.subject.toLowerCase() < email2.subject.toLowerCase()) return -1;
        else return 0;
    })
    return emailsToSort
}
function sortByDate(emailsToSort) {
    emailsToSort = emailsToSort.sort((email1, email2) => {
        return email2.sentAt - email1.sentAt
    })
    return emailsToSort
}



function _createEmails() {
    var emailsFromStorage = storageService.load(EMAIL_KEY)
    if (!emailsFromStorage || !emailsFromStorage.length) {
        emailsFromStorage = [
            { id: 'hgroo', senderName: 'yeal', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594, isstarred: false },
            { id: 'dbhfek', senderName: 'adir', subject: 'hi?', body: 'hello long time no see!', isRead: true, sentAt: 1551133930294, isstarred: true },
            { id: 'fgfek', senderName: 'liel', subject: 'sprint3', body: 'The best teacher!', isRead: false, sentAt: 1551133930564, isstarred: false },
            { id: 'tergr', senderName: 'yaron', subject: 'work', body: 'hello i have a job for you', isRead: false, sentAt: 1551183930594, isstarred: false },
            { id: 'rtpyh', senderName: 'puki', subject: 'hi?', body: 'hello long time no see!', isRead: true, sentAt: 1551133930594, isstarred: true },
            { id: 'dfugfh', senderName: 'baba', subject: 'sprint3', body: 'necessitatibus earum saepe dolore dolorem harum odit', isRead: false, sentAt: 1551133930394, isstarred: false },
            { id: 'popoek', senderName: 'yaron', subject: 'work', body: ' amet consectetur adipisicing elit. Recusandae sequi ea velit adipisci obcaecati ab beatae magni cupiditate', isRead: true, sentAt: 1551133930594, isstarred: false },
            { id: 'kjhjk', senderName: 'matan', subject: 'party', body: 'Lorem ipsum dolor sit', isRead: false, sentAt: 1551133930697, isstarred: true },

        ]

            
    }
    gEmails = emailsFromStorage
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
    _saveTostorage()

}
function getCountUnreadEmail() {
    const unreadEmail = gEmails.reduce((acc, email) => {
        if (!email.isRead) acc++;
        return acc
    }, 0);
    return Promise.resolve(unreadEmail)
}
function getCountReadEmail() {
    const readEmail = gEmails.reduce((acc, email) => {
        if (email.isRead) acc++;
        return acc
    }, 0);
    return Promise.resolve(readEmail)
}
function getEmailStarres() {
    console.log('check');
    let emailsStarres = gEmails.filter((email) => { return email.isstarred });
    return Promise.resolve(emailsStarres)

}
function setEmailRead(emailId) {
    const email = gEmails.findIndex(email => email.id === emailId);
    const copyEmails = [...gEmails]
    copyEmails[email].isRead = !copyEmails[email].isRead
    gEmails = copyEmails;
    _saveTostorage();

}
function setEmailStarres(emailId) {
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



