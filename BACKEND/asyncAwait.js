//async await code

function getBook() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Math Book");
    }, 2000);
  });
}

function getAuthor(book) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Author of " + book + " is John Doe");
    }, 2000);
  });
}

function getPublisher(author) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Publisher of " + author + " is XYZ Publishing");
    }, 2000);
  });
}

async function showBookDetails() {
  const book = await getBook();
  console.log(book);

  const author = await getAuthor(book);
  console.log(author);

  const publisher = await getPublisher(author);
  console.log(publisher);
}

showBookDetails();