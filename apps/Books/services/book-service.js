import { storageService } from "../../../services/storage-service.js";
import { utilService } from "../../../services/utils.js"
export const bookService = {
  query,
  getById,
  addReview,
  remove,
  getCurrency,
  getNetworkBooks,
  findBook,
  getNextBook,
  getPrevBook,
  removeBook


};
const BOOKS_KEY = 'bookDB'
const BOOKS_API_KEY = 'apiBookDB'

var books;
_createBooks();


window.theBook = books;

function query() {
  return Promise.resolve(books);
}

function getById(bookId) {
  const book = books.find(book => book.id === bookId);
  return Promise.resolve(book);
}

function addReview(book, review) {
  var bookId = book.id;
  const reviewToAdd = {
    ...review,
  };
  const booksCopy = [...books];
  const bookIdx = books.findIndex(book => book.id === bookId)
  if (booksCopy[bookIdx].reviews) booksCopy[bookIdx].reviews = [reviewToAdd, ...book.reviews]
  else booksCopy[bookIdx].reviews = [reviewToAdd]
  books = booksCopy;
  _saveTostorage()
  return Promise.resolve(booksCopy[bookIdx])
}

function _createBooks() {
  var booksFromStorage = storageService.load(BOOKS_KEY)
  if (!booksFromStorage || !booksFromStorage.length) {
    booksFromStorage = [
      {
        "id": "OXeMG8wNskc",
        "title": "metus hendrerit",
        "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
        "authors": [
          "Barbara Cartland"
        ],
        "publishedDate": 1999,
        "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
        "pageCount": 713,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
        "language": "en",
        "listPrice": {
          "amount": 109,
          "currencyCode": "EUR",
          "isOnSale": false
        }
      },
      {
        "id": "JYOJa2NpSCq",
        "title": "morbi",
        "subtitle": "lorem euismod dictumst inceptos mi",
        "authors": [
          "Barbara Cartland"
        ],
        "publishedDate": 1978,
        "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
        "pageCount": 129,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 44,
          "currencyCode": "EUR",
          "isOnSale": true
        }
      },
      {
        "id": "1y0Oqts35DQ",
        "title": "at viverra venenatis",
        "subtitle": "gravida libero facilisis rhoncus urna etiam",
        "authors": [
          "Dr. Seuss"
        ],
        "publishedDate": 1999,
        "description": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
        "pageCount": 972,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
        "language": "he",
        "listPrice": {
          "amount": 108,
          "currencyCode": "ILS",
          "isOnSale": false
        }
      },
      {
        "id": "kSnfIJyikTP",
        "title": "dictum",
        "subtitle": "augue eu consectetur class curabitur conubia ligula in ullamcorper",
        "authors": [
          "Danielle Steel"
        ],
        "publishedDate": 1978,
        "description": "interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",
        "pageCount": 303,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
        "language": "en",
        "listPrice": {
          "amount": 30,
          "currencyCode": "EUR",
          "isOnSale": true
        }
      },
      {
        "id": "f4iuVmbuKCC",
        "title": "sem himenaeos aptent",
        "subtitle": "interdum per habitasse luctus purus est",
        "authors": [
          "Dr. Seuss"
        ],
        "publishedDate": 2011,
        "description": "et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",
        "pageCount": 337,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 19,
          "currencyCode": "USD",
          "isOnSale": false
        }
      },
      {
        "id": "U2rfZO6oBZf",
        "title": "mi ante posuere",
        "subtitle": "sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus",
        "authors": [
          "Leo Tolstoy"
        ],
        "publishedDate": 1978,
        "description": "senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in",
        "pageCount": 748,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/1.jpg",
        "language": "en",
        "listPrice": {
          "amount": 91,
          "currencyCode": "USD",
          "isOnSale": true
        }
      },
      {
        "id": "xI0wrXaaAcq",
        "title": "non",
        "subtitle": "leo tortor per dapibus mattis ut conubia porttitor ligula viverra",
        "authors": [
          "Leo Tolstoy"
        ],
        "publishedDate": 2011,
        "description": "nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
        "pageCount": 65,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
        "language": "he",
        "listPrice": {
          "amount": 90,
          "currencyCode": "USD",
          "isOnSale": false
        }
      },
      {
        "id": "9laHCEdSpFy",
        "title": "tristique",
        "subtitle": "consectetur a eu tincidunt condimentum amet nisi",
        "authors": [
          "Dr. Seuss"
        ],
        "publishedDate": 1999,
        "description": "magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
        "pageCount": 299,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/11.jpg",
        "language": "he",
        "listPrice": {
          "amount": 176,
          "currencyCode": "EUR",
          "isOnSale": false
        }
      },
      {
        "id": "nGhVwZvGCGp",
        "title": "urna ornare gravida",
        "subtitle": "sem vestibulum semper convallis pharetra tempor himenaeos ut",
        "authors": [
          "Jin Yong"
        ],
        "publishedDate": 2011,
        "description": "porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",
        "pageCount": 803,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 116,
          "currencyCode": "USD",
          "isOnSale": true
        }
      },
      {
        "id": "Q8Q9Lsd03BD",
        "title": "consequat neque volutpat",
        "subtitle": "vel quis taciti fermentum feugiat ullamcorper curae praesent",
        "authors": [
          "Dr. Seuss"
        ],
        "publishedDate": 1978,
        "description": "curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",
        "pageCount": 891,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/5.jpg",
        "language": "en",
        "listPrice": {
          "amount": 145,
          "currencyCode": "EUR",
          "isOnSale": false
        }
      },
      {
        "id": "bd7a76kARao",
        "title": "risus",
        "subtitle": "pretium bibendum pharetra curabitur quisque dictumst",
        "authors": [
          "Danielle Steel"
        ],
        "publishedDate": 2018,
        "description": "auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus",
        "pageCount": 86,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 157,
          "currencyCode": "ILS",
          "isOnSale": true
        }
      },
      {
        "id": "qKyG0vqeO3e",
        "title": "interdum etiam vulputate",
        "subtitle": "velit sapien eget tincidunt nunc tortor",
        "authors": [
          "Danielle Steel"
        ],
        "publishedDate": 2018,
        "description": "aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",
        "pageCount": 882,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/17.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 57,
          "currencyCode": "USD",
          "isOnSale": true
        }
      },
      {
        "id": "2RvT48ZNInj",
        "title": "sagittis justo",
        "subtitle": "etiam primis proin praesent placerat nisi fermentum nisi",
        "authors": [
          "Agatha Christie"
        ],
        "publishedDate": 2011,
        "description": "nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",
        "pageCount": 598,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/8.jpg",
        "language": "en",
        "listPrice": {
          "amount": 167,
          "currencyCode": "ILS",
          "isOnSale": false
        }
      },
      {
        "id": "5z2s9pDXAYj",
        "title": "quam ullamcorper himenaeos",
        "subtitle": "ut placerat eu dapibus sapien sodales laoreet",
        "authors": [
          "Danielle Steel"
        ],
        "publishedDate": 1999,
        "description": "etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",
        "pageCount": 608,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/3.jpg",
        "language": "he",
        "listPrice": {
          "amount": 150,
          "currencyCode": "USD",
          "isOnSale": true
        }
      },
      {
        "id": "zBZu5cDEWha",
        "title": "quis",
        "subtitle": "suscipit turpis etiam turpis libero lobortis",
        "authors": [
          "Jin Yong"
        ],
        "publishedDate": 2011,
        "description": "etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",
        "pageCount": 583,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/6.jpg",
        "language": "en",
        "listPrice": {
          "amount": 58,
          "currencyCode": "ILS",
          "isOnSale": true
        }
      },
      {
        "id": "aOI7tQuPZ2f",
        "title": "aliquam aliquet dapibus",
        "subtitle": "neque eu purus euismod placerat adipiscing odio egestas consequat",
        "authors": [
          "Leo Tolstoy"
        ],
        "publishedDate": 2011,
        "description": "dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",
        "pageCount": 497,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/7.jpg",
        "language": "en",
        "listPrice": {
          "amount": 78,
          "currencyCode": "USD",
          "isOnSale": false
        }
      },
      {
        "id": "WBooB82Uvwu",
        "title": "class",
        "subtitle": "elit enim ultricies amet imperdiet a molestie class elementum venenatis",
        "authors": [
          "Danielle Steel"
        ],
        "publishedDate": 1999,
        "description": "rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",
        "pageCount": 804,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
        "language": "en",
        "listPrice": {
          "amount": 118,
          "currencyCode": "ILS",
          "isOnSale": false
        }
      },
      {
        "id": "xm1z5bbZjlS",
        "title": "vitae",
        "subtitle": "class habitant at commodo semper ligula a bibendum",
        "authors": [
          "Leo Tolstoy"
        ],
        "publishedDate": 1999,
        "description": "himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",
        "pageCount": 231,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
        "language": "he",
        "listPrice": {
          "amount": 60,
          "currencyCode": "EUR",
          "isOnSale": false
        }
      },
      {
        "id": "u3j6QIKLlJb",
        "title": "rhoncus vivamus",
        "subtitle": "nullam class risus amet senectus scelerisque etiam curabitur",
        "authors": [
          "Agatha Christie"
        ],
        "publishedDate": 1978,
        "description": "torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",
        "pageCount": 652,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
        "language": "he",
        "listPrice": {
          "amount": 110,
          "currencyCode": "USD",
          "isOnSale": true
        }
      },
      {
        "id": "vxYYYdVlEH3",
        "title": "donec mi ullamcorper",
        "subtitle": "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
        "authors": [
          "William Shakespeare"
        ],
        "publishedDate": 2011,
        "description": "aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",
        "pageCount": 904,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 186,
          "currencyCode": "ILS",
          "isOnSale": true
        }
      }
    ]

  }
  books = booksFromStorage
  console.log(books);
  _saveTostorage()
  // return booksFromStorage

}
function _saveTostorage() {
  storageService.save(BOOKS_KEY, books)

}
function remove(book, reviewIdx) {
  // book.reviews = [...book.reviews]
  book.reviews = book.reviews.filter((rev, idx) => idx !== reviewIdx);
  return Promise.resolve(book);
}
function removeBook(bookId) {
  books = books.filter(book => book.id !== bookId);
  _saveTostorage
  return Promise.resolve();
}
function getCurrency(currencyCode) {
  let currency = '';
  switch (currencyCode) {
    case 'USD': currency = 'dollar'
      break;
    case 'ILS': currency = 'shekel'
      break;
    case 'EUR': currency = 'euro'
      break;
  }
  return currency
}
function getNetworkBooks(bookName) {
  const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${bookName}`
  return axios.get(url)
    .then(res => res.data.items)

}
function getNetworkBooks1(bookName) {
  const booksToReturn = [
    {
      "kind": "books#volume",
      "id": "9wxLBAAAQBAJ",
      "etag": "svjNSvvW86Q",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/9wxLBAAAQBAJ",
      "volumeInfo": {
        "title": "T.W.",
        "authors": [
          "Richard Coslet"
        ],
        "publisher": "Xlibris Corporation",
        "publishedDate": "2014-08-06",
        "description": "T.W. stands for Thaddeus Wellington, a son of a wealthy lawyer from the east. Also a Lawyer himself, T.W. doesn’t want to take pride of bringing his father’s name and be known as just the son. Which is why he stands by his initials instead. Equipped with his skills in Lawyering, T.W. goes out to the west and runs into trouble. He works for a gentleman and nobody knows he’s a laywer but he ends up saving a family farm.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781499054316"
          },
          {
            "type": "ISBN_10",
            "identifier": "1499054319"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 104,
        "printType": "BOOK",
        "categories": [
          "Fiction"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=9wxLBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=9wxLBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=9wxLBAAAQBAJ&pg=PT35&dq=tw&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=9wxLBAAAQBAJ&dq=tw&hl=&as_pt=BOOKS&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/T_W.html?hl=&id=9wxLBAAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/T_W-sample-epub.acsm?id=9wxLBAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/T_W-sample-pdf.acsm?id=9wxLBAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=9wxLBAAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "About halfway up the ridge <b>TW</b> stopped andlooked back at Jeb&#39;s ranch. He <br>\nthoughthe had seen some movement downthe trail, buthe couldn&#39;t tell whatit was. <br>\nMay be itwas adeer or coyote, he couldn&#39;t besure. He turned and started back up <br>\nthe&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "MkJbAAAAQAAJ",
      "etag": "SkJcFyaKAYM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/MkJbAAAAQAAJ",
      "volumeInfo": {
        "title": "The holy Bible, arranged in paragraphs and parallelisms, with annotations, by T.W. Coit",
        "authors": [
          "Thomas Winthrop Coit"
        ],
        "publishedDate": "1834",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "OXFORD:590081941"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.1.2.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=MkJbAAAAQAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=MkJbAAAAQAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=MkJbAAAAQAAJ&pg=RA2-PA35&dq=tw&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=MkJbAAAAQAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=MkJbAAAAQAAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=MkJbAAAAQAAJ&rdid=book-MkJbAAAAQAAJ&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com/books/download/The_holy_Bible_arranged_in_paragraphs_an.epub?id=MkJbAAAAQAAJ&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "downloadLink": "http://books.google.com/books/download/The_holy_Bible_arranged_in_paragraphs_an.pdf?id=MkJbAAAAQAAJ&hl=&output=pdf&sig=ACfU3U3UxFz0HZD0LH4w20pc6wERaTAqvA&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=MkJbAAAAQAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      }
    },
    {
      "kind": "books#volume",
      "id": "UhoQAAAAIAAJ",
      "etag": "CKPEvS5QTSA",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/UhoQAAAAIAAJ",
      "volumeInfo": {
        "title": "A geological reconnaissance of the dominican Republic, by T.W. Vaughan, Wythe Cook, D.D. Condit, C.P. Ross, W.P. Woodring, and F.C. Calkins. Prepared by the U.S. Geoogical Survey. 1921",
        "authors": [
          "Dominican Republic Servicio geológico"
        ],
        "publishedDate": "1921",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "STANFORD:36105032172814"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "printType": "BOOK",
        "categories": [
          "Geology"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.2.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=UhoQAAAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=UhoQAAAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=UhoQAAAAIAAJ&pg=PA131&dq=tw&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=UhoQAAAAIAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=UhoQAAAAIAAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=UhoQAAAAIAAJ&rdid=book-UhoQAAAAIAAJ&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com/books/download/A_geological_reconnaissance_of_the_domin.epub?id=UhoQAAAAIAAJ&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=UhoQAAAAIAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "<b>T. W.</b> Vaughan and C. W. Cooke, collectors. May 6, 1919. 8733 (D. C. 62). <br>\nProvince of Santiago, bluff along west side of Rio Mao, 1.7 kilometers northwest <br>\nof Paso Bajito, near Cercado de Mao. D. D. Condit, collector. May 6, 1919. 8734 (<br>\nD. C.&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "1jMuAAAAYAAJ",
      "etag": "Ut4r5abgr8I",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/1jMuAAAAYAAJ",
      "volumeInfo": {
        "title": "Memoirs ...: A geological reconnaissance of the Dominican Republic, by T.W. Vaughan, Wythe Cook, D.D. Condit, C.P. Ross, W.P. Woodring, and F.C. Calkins. Prepared by the U.S. Geological Survey. 1921",
        "publishedDate": "1921",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "NYPL:33433008718367"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "printType": "BOOK",
        "categories": [
          "Geology"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.2.3.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=1jMuAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=1jMuAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=1jMuAAAAYAAJ&pg=PA131&dq=tw&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=1jMuAAAAYAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=1jMuAAAAYAAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=1jMuAAAAYAAJ&rdid=book-1jMuAAAAYAAJ&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com/books/download/Memoirs_A_geological_reconnaissance_of_t.epub?id=1jMuAAAAYAAJ&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "downloadLink": "http://books.google.com/books/download/Memoirs_A_geological_reconnaissance_of_t.pdf?id=1jMuAAAAYAAJ&hl=&output=pdf&sig=ACfU3U1bq9Nf7Pmf1n2sSIT9mjzEZxrOoQ&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=1jMuAAAAYAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "<b>T. W.</b> Vaughan and C. W. Cooke , collectors . May 6 , 1919 . 8733 ( D. C. 62 ) . <br>\nProvince of Santiago , bluff along west side of Rio Mao , 1.7 kilometers northwest <br>\nof Paso Bajito , near Cercado de Mao . D. D. Condit , collector . May 6 , 1919 ."
      }
    },
    {
      "kind": "books#volume",
      "id": "ee3FAQAAQBAJ",
      "etag": "kILhxN1SRbk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/ee3FAQAAQBAJ",
      "volumeInfo": {
        "title": "TW Index Volume 2",
        "authors": [
          "Jan Young"
        ],
        "publisher": "Lulu.com",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781105375545"
          },
          {
            "type": "ISBN_10",
            "identifier": "1105375544"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=ee3FAQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=ee3FAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=ee3FAQAAQBAJ&pg=PA1&dq=tw&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=ee3FAQAAQBAJ&dq=tw&hl=&as_pt=BOOKS&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/TW_Index_Volume_2.html?hl=&id=ee3FAQAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=ee3FAQAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "<b>TW</b> Index is an index of items which have appeared in Turning Wheels, the <br>\nmonthly publication of the Studebaker Drivers Club. WHAT IS INCLUDED? <b>TW</b> <br>\nIndex includes historical articles, technical articles, book reviews, humor and <br>\nnostalgia&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "davFAQAAQBAJ",
      "etag": "0kYBxcZwLzk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/davFAQAAQBAJ",
      "volumeInfo": {
        "title": "TW Index Volume 1",
        "authors": [
          "Jan Young"
        ],
        "publisher": "Lulu.com",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781105375422"
          },
          {
            "type": "ISBN_10",
            "identifier": "1105375420"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=davFAQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=davFAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=davFAQAAQBAJ&pg=PA1&dq=tw&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=davFAQAAQBAJ&dq=tw&hl=&as_pt=BOOKS&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/TW_Index_Volume_1.html?hl=&id=davFAQAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=davFAQAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "<b>TW</b> Index is an index of items which have appeared in Turning Wheels, the <br>\nmonthly publication of the Studebaker Drivers Club. WHAT IS INCLUDED? <b>TW</b> <br>\nIndex includes historical articles, technical articles, book reviews, humor and <br>\nnostalgia&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "hz1_CQAAQBAJ",
      "etag": "Nt/pdB9zFKM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/hz1_CQAAQBAJ",
      "volumeInfo": {
        "title": "The T.W. Lawson",
        "subtitle": "The Fate of the World's Only Seven-Masted Schooner",
        "authors": [
          "Thomas Hall"
        ],
        "publisher": "Arcadia Publishing",
        "publishedDate": "2006-10-16",
        "description": "Armed with curiosity and a desire to piece together the story of the world's only seven-masted schooner, Tom Hall spent several years researching on both sides of the Atlantic, diving on the Lawson wreck and interviewing the relatives of those involved in the rescue efforts. The result of his work is the most complete account of the T. W. Lawson's story, ranging from her building and launch to her fated wreck off the Scilly Isles.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781614236504"
          },
          {
            "type": "ISBN_10",
            "identifier": "161423650X"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 160,
        "printType": "BOOK",
        "categories": [
          "Photography"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.2.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=hz1_CQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=hz1_CQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=hz1_CQAAQBAJ&pg=PT11&dq=tw&hl=&as_pt=BOOKS&cd=7&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=hz1_CQAAQBAJ&dq=tw&hl=&as_pt=BOOKS&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_T_W_Lawson.html?hl=&id=hz1_CQAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/The_T_W_Lawson-sample-epub.acsm?id=hz1_CQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/The_T_W_Lawson-sample-pdf.acsm?id=hz1_CQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=hz1_CQAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "But he perked up smartly when visitors from the other side of the ocean came to <br>\nhear the story of the <b>T.W.</b> Lawson. Above his bed hung the photo of his father and <br>\nthe rest of Slippen&#39;s crew receiving their medals from a representative of the&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "yi5PymqiGuUC",
      "etag": "l3n+6BXHVkk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/yi5PymqiGuUC",
      "volumeInfo": {
        "title": "PM Alphabet Blends X 1 Tw",
        "authors": [
          "Beverley Randell"
        ],
        "publisher": "Nelson Thornes",
        "publishedDate": "1996",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "186955728X"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781869557287"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 10,
        "printType": "BOOK",
        "categories": [
          "English language"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.3.4.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=yi5PymqiGuUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=yi5PymqiGuUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=yi5PymqiGuUC&pg=PT3&dq=tw&hl=&as_pt=BOOKS&cd=8&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=yi5PymqiGuUC&dq=tw&hl=&as_pt=BOOKS&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/PM_Alphabet_Blends_X_1_Tw.html?hl=&id=yi5PymqiGuUC"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=yi5PymqiGuUC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... <b>tw</b> ISBN 1-86955 728 X • sp • soft c ISBN • st • soft g Cover design by Mike <br>\nWood • sw • gl Photographic style by Noniann Cabouret Lier • th • sc • fi • scr <br>\nPhotographs by Australian Picture Library / W.L. Morgan (Cover, p. 7) Albert <br>\nSulzer (pp."
      }
    },
    {
      "kind": "books#volume",
      "id": "lDVtAwAAQBAJ",
      "etag": "0Qaz+8tRR2k",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/lDVtAwAAQBAJ",
      "volumeInfo": {
        "title": "TW Index Volumes 1 and 2 Combined",
        "authors": [
          "Jan Young"
        ],
        "publisher": "Lulu.com",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781105168017"
          },
          {
            "type": "ISBN_10",
            "identifier": "1105168018"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=lDVtAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=lDVtAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=lDVtAwAAQBAJ&pg=PA222&dq=tw&hl=&as_pt=BOOKS&cd=9&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=lDVtAwAAQBAJ&dq=tw&hl=&as_pt=BOOKS&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/TW_Index_Volumes_1_and_2_Combined.html?hl=&id=lDVtAwAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=lDVtAwAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "<b>TW</b>. Index—Page. 222. Item. Issue. Page. Item. Issue. Page. Electric Restorations <br>\n- &#39;1902 Electric Studebaker&#39; by Geary, Crone (1902) 9/1981 3 E-M-F - Cover car (<br>\n1909-12) 3/1976 - Cover car (1910) 6/1977 - Cover car (1912) 3/2003 Ads&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "QbJ_AwAAQBAJ",
      "etag": "sl7OvaE7JQk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/QbJ_AwAAQBAJ",
      "volumeInfo": {
        "title": "TW Index Volume 3",
        "authors": [
          "Jan Young"
        ],
        "publisher": "Lulu.com",
        "publishedDate": "2011",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781105302183"
          },
          {
            "type": "ISBN_10",
            "identifier": "1105302180"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.4.3.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=QbJ_AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=QbJ_AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=QbJ_AwAAQBAJ&pg=PA20&dq=tw&hl=&as_pt=BOOKS&cd=10&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=QbJ_AwAAQBAJ&dq=tw&hl=&as_pt=BOOKS&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/TW_Index_Volume_3.html?hl=&id=QbJ_AwAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=QbJ_AwAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... Dan Kuhl 5/2014 30 1959-66 Studebaker History - Technical &#39;Studebaker Body <br>\nNumbers&#39; by George 4/2013 26 Krem Item Issue Page Item Issue Page 1960 <br>\nChamp truck -. <b>TW</b>. From: 1959 E truck. Index—Page. 20. To: 1959-66 <br>\nStudebaker."
      }
    }
  ]
  return Promise.resolve(booksToReturn);

}
function findBook(bookId, booksApi) {
  console.log(bookId, booksApi);
  var bookToAdd = booksApi.find(book => book.id === bookId)
  console.log(bookToAdd);
  const book = {
    id: bookToAdd.id || utilService.makeId(),
    title: bookToAdd.volumeInfo.title || 'new book',
    subtitle: bookToAdd.volumeInfo.subtitle || 'rfnkgkrnr',
    authors: bookToAdd.volumeInfo.authors || 'david levi',
    publishedDate: bookToAdd.volumeInfo.publishedDate || '2020',
    description: bookToAdd.volumeInfo.description || 'fjhndvknedjenjdhhb dhebedsnjdsnxkks',
    pageCount: bookToAdd.volumeInfo.pageCount || '100',
    categories: bookToAdd.volumeInfo.categories || 'fjjndn',
    listPrice: {
      amount: 109,
      currencyCode: bookToAdd.saleInfo.country || "EUR",
      isOnSale: bookToAdd.saleInfo.isEbook || false

    },
    thumbnail: bookToAdd.volumeInfo.imageLinks.thumbnail || "http://coding-academy.org/books-photos/20.jpg"
  }

  const booksCopy = [...books, book]
  books = booksCopy;
  _saveTostorage()
  console.log("🚀 ~ file: book-service.js ~ line 1230 ~ findBook ~ books", books)
}
function getNextBook(bookId) {
  const nextBook = books.findIndex(book => book.id === bookId)
  if(nextBook+1===books.length)return books[0].id;
  else return books[nextBook + 1].id

}
function getPrevBook(bookId) {
  const prevBook = books.findIndex(book => book.id === bookId)
  if(prevBook===0)return books[books.length-1].id
  return books[prevBook - 1].id

}

