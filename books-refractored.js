const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    rating: 4.2,
    description:
      "A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.",
    image: "./books-images/the-great-gatsby.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    rating: 4.5,
    description:
      "Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.",
    image: "./books-images/to-kill-a-mockingbird.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Science Fiction",
    rating: 4.4,
    description:
      "A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.",
    image: "./books-images/1984.jpg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Fiction",
    rating: 4.25,
    description:
      "A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.",
    image: "./books-images/pride-and-prejudice.jpg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Fiction",
    rating: 4,
    description:
      "Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
    rating: 4.6,
    description:
      "A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.",
    image: "./books-images/the-hobbit.jpg",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy",
    rating: 4.7,
    description:
      "The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.",
    image: "./books-images/harry-potter-and-the-sorcerer.jpg",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    genre: "Adventure",
    rating: 4.1,
    description:
      "An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.",
    image: "./books-images/moby-dick.jpg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    year: 1954,
    genre: "Fantasy",
    rating: 4.55,
    description:
      "The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.",
    image: "./books-images/the-lord-of-the-rings.jpg",
  },
  {
    title: "The Shining",
    author: "Stephen King",
    year: 1977,
    genre: "Horror",
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    year: 1950,
    genre: "Fantasy",
    rating: 4.15,
    description:
      "The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.",
    image: "./books-images/the-chronicles-of-narnia.jpg",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2003,
    genre: "Mystery",
    rating: 3.8,
    description:
      "A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Fiction",
    rating: 4.25,
    description:
      "A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
    genre: "Science Fiction",
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    year: 2005,
    genre: "Mystery",
    rating: 4.1,
    description:
      "A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    year: 2006,
    genre: "Dystopian",
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
    genre: "Science Fiction",
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Giver",
    author: "Lois Lowry",
    year: 1993,
    genre: "Dystopian",
    rating: 4.12,
    description:
      "A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.",
    image: "./books-images/unknown.jpg",
  },
];

/*

DOM selectors

*/
const bookDisplay = document.querySelector(".book-display");

const reset = document.querySelector("#reset");

const fiction = document.querySelector("#fiction");
const scifi = document.querySelector("#sci-fi");
const fantasy = document.querySelector("#fantasy");
const adventure = document.querySelector("#adventure");
const horror = document.querySelector("#horror");
const mystery = document.querySelector("#mystery");
const dystopian = document.querySelector("#dystopian");

const earlyNineteen = document.querySelector("#early-nineteen");
const lateNineteen = document.querySelector("#late-nineteen");
const earlyTwenty = document.querySelector("#early-twenty");
const lateTwenty = document.querySelector("#late-twenty");
const present = document.querySelector("#present");

const highestRating = document.querySelector("#highest-rating");
const newestPublished = document.querySelector("#newest-published");
const author = document.querySelector("#author");
const titleAZ = document.querySelector("#title-a-z");
const titleZA = document.querySelector("#title-z-a");

const randomBookBtn = document.querySelector("#randomBook");

/*

Button Arrays

*/
const genreBtns = [
  fiction,
  scifi,
  fantasy,
  adventure,
  horror,
  mystery,
  dystopian,
];

const yearBtns = [
  earlyNineteen,
  lateNineteen,
  earlyTwenty,
  lateTwenty,
  present,
];

const sortBtns = [highestRating, newestPublished, author, titleAZ, titleZA];

const generalBtns = [reset, randomBookBtn];

/*


Global Variables 


*/

let genreFilteredBooks;
let yearFilteredBooks;
let filterType = null;
let isGenreFiltered = false;
let isYearFiltered = false;
let previousFilter = null;

let booksToDisplay = [];

let sortedBooks = [];
let filteredBooks = [];

let sortingFunction = null;
let isSorted = false;
let previousSort = null;

let previousNum = -1;

let startYear;
let endYear;

/*


Functions


*/
const bookCards = (bookArray) => {
  bookDisplay.innerHTML = "";

  bookArray.forEach((book) => {
    bookDisplay.innerHTML += `
    <div class="book-card">
      <img src="${book.image}" alt="${book.title}"/>
      <div class="book-infomation">
        <h4 class="book-title">${book.title}</h4>
        <p class="book-author"><span class="tag">Author :</span> ${book.author}</p>
        <p class="book-year"><span class="tag">Published Year :</span> ${book.year}</p>
        <p class="book-genre"><span class="tag">Genre :</span> ${book.genre}</p>
        <p class="book-rating"><span class="tag">Rating :</span> ${book.rating}</p>
        <p class="book-description">${book.description}</p>
      </div>
    </div>
    `;
  });
};

bookCards(books); //Have all the books displayed when the page is loaded

const toggleGenreSelected = (Btn) => {
  genreBtns.forEach((genreBtn) => {
    genreBtn.classList.remove("selected");
  });

  Btn.classList.add("selected");
};

const toggleYearSelected = (Btn) => {
  yearBtns.forEach((yearBtn) => {
    yearBtn.classList.remove("selected");
  });
  Btn.classList.add("selected");
};

const toggleSortSelected = (Btn) => {
  let isSelected = Btn.classList.contains("selected");
  sortBtns.forEach((sortBtn) => {
    sortBtn.classList.remove("selected");
  });
  Btn.classList.remove("hover"); //Btn will change to select style right after click.
  !isSelected ? Btn.classList.add("selected") : Btn.classList.add("hover");
};

const getGenre = (genre) => {
  genreFilteredBooks = books.filter((book) => book.genre === genre);
  return genreFilteredBooks;
};

const getYear = (startYear, endYear) => {
  const start = Number(startYear);
  const end = Number(endYear);
  yearFilteredBooks = books.filter(
    (book) => book.year >= start && book.year <= end
  );
  return yearFilteredBooks;
};

const checkFiltered = () => {
  booksToDisplay = filteredBooks.length === 0 ? books : filteredBooks;

  if (previousFilter === null && !isGenreFiltered && !isYearFiltered) {
    booksToDisplay = books;
  } else if (previousFilter === null && isGenreFiltered && !isYearFiltered) {
    booksToDisplay = filteredBooks;
  } else if (previousFilter === null && !isGenreFiltered && isYearFiltered) {
    booksToDisplay = filteredBooks;
  } else if (isGenreFiltered && !isYearFiltered) {
    booksToDisplay = filteredBooks;
  } else if (!isGenreFiltered && isYearFiltered) {
    booksToDisplay = filteredBooks;
  } else if (!isGenreFiltered && !isYearFiltered) {
    console.log("stops at all");
    booksToDisplay = books;
  } else if (!(previousFilter === null) && isGenreFiltered && isYearFiltered) {
    booksToDisplay = genreFilteredBooks.filter((book) =>
      yearFilteredBooks.includes(book)
    );
  } else {
    console.log("something is wrong");
  } // get the intersection of filteredBooks array and newFilterBooks

  booksToDisplay.length === 0
    ? console.log("no result")
    : console.log("there are books left");

  previousFilter = filterType;
};

//Apply sorting
//Part 1: Display books
const applySorting = () => {
  if (!(booksToDisplay.length === 0)) {
    if (sortingFunction) {
      //Check if there is any sorting applied
      booksToDisplay = sortingFunction(booksToDisplay);
    }

    bookCards(booksToDisplay);
  } else {
    bookDisplay.innerHTML = `<p class="no-result">No result.</p>`;
  }
};

//Part 2: Toogle Style
//----click once to select, click again to deselect
const checkSorted = (sortFunc) => {
  if (isSorted && previousSort === sortFunc) {
    //Deselect sorting
    sortingFunction = null;
    isSorted = false;
  } else {
    //Select sorting
    sortingFunction = sortFunc;
    isSorted = true;
  }

  applySorting();
  previousSort = sortingFunction;
};

const sortByHighRating = (arr) => {
  const arrCopy = arr.slice();
  sortedBooks = arrCopy.sort((a, b) => b.rating - a.rating);
  return sortedBooks;
};

const sortByPublish = (arr) => {
  const arrCopy = arr.slice();
  sortedBooks = arrCopy.sort((a, b) => b.year - a.year);
  return sortedBooks;
};

const sortByAuthor = (arr) => {
  const arrCopy = arr.slice();
  sortedBooks = arrCopy.sort((a, b) => {
    if (a.author < b.author) {
      return -1;
    } else if (a.author > b.author) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(sortedBooks);
  return sortedBooks;
};

const sortByTileAZ = (arr) => {
  const arrCopy = arr.slice();
  sortedBooks = arrCopy.sort((a, b) => {
    const stringA = String(a.title);
    const stringB = String(b.title);

    if (stringA < stringB) {
      return -1;
    } else if (stringA > stringB) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(sortedBooks);
  return sortedBooks;
};

const sortByTileZA = (arr) => {
  const arrCopy = arr.slice();
  sortedBooks = arrCopy.sort((a, b) => {
    const stringA = String(a.title);
    const stringB = String(b.title);

    if (stringA < stringB) {
      return 1;
    } else if (stringA > stringB) {
      return -1;
    } else {
      return 0;
    }
  });
  console.log(sortedBooks);
  return sortedBooks;
};

const getRandomBook = () => {
  let i;
  do {
    i = Math.floor(Math.random() * books.length);
  } while (i === previousNum); // prevent getting the same number
  previousNum = i; //update previousNum
  const randomBook = [books[i]];
  bookCards(randomBook);
  console.log(i);
};

const resetFunc = () => {
  isGenreFiltered = false;
  isYearFiltered = false;
  isSorted = false;
  previousFilter = null;
  genreBtns.forEach((genreBtn) => genreBtn.classList.remove("selected"));
  yearBtns.forEach((yearBtn) => yearBtn.classList.remove("selected"));
  sortBtns.forEach((sortBtn) => sortBtn.classList.remove("selected"));
};

/*


Add event listener


*/

bookDisplay.addEventListener("mouseover", (event) => {
  const target = event.target;
  if (target.closest(".book-card")) {
    target.closest(".book-card").classList.add("book-hover");
  }
});

bookDisplay.addEventListener("mouseout", (event) => {
  const target = event.target;
  if (target.closest(".book-card")) {
    target.closest(".book-card").classList.remove("book-hover");
  }
});

//
//----Genre Style

genreBtns.forEach((genreBtn) => {
  genreBtn.addEventListener("mouseover", () => {
    if (!genreBtn.classList.contains("selected")) {
      genreBtn.classList.add("hover");
    }
  });

  genreBtn.addEventListener("mouseout", () => {
    genreBtn.classList.remove("hover");
  });

  genreBtn.addEventListener("click", () => {
    genreBtn.classList.remove("hover");
    toggleGenreSelected(genreBtn);
  });
});

//
//----Genre Filter event listener

genreBtns.forEach((genreBtn) => {
  genreBtn.addEventListener("click", (event) => {
    getGenre(event.target.innerHTML);
    filteredBooks = genreFilteredBooks;
    filterType = "Genre";
    isGenreFiltered = true;
    checkFiltered();
    console.log(event.target.innerHTML);
    applySorting();
  });
});

//
//----Year Style
yearBtns.forEach((yearBtn) => {
  yearBtn.addEventListener("mouseover", () => {
    if (!yearBtn.classList.contains("selected")) {
      yearBtn.classList.add("hover");
    }
  });

  yearBtn.addEventListener("mouseout", () => {
    yearBtn.classList.remove("hover");
  });

  yearBtn.addEventListener("click", () => {
    yearBtn.classList.remove("hover");
    toggleYearSelected(yearBtn);
  });
});
//
//----Year Filter event listense

yearBtns.forEach((yearBtn) => {
  yearBtn.addEventListener("click", (event) => {
    switch (event.target.id) {
      case "early-nineteen":
        startYear = 1800;
        endYear = 1849;
        getYear(1800, 1849);
        break;

      case "late-nineteen":
        startYear = 1850;
        endYear = 1899;
        getYear(1850, 1899);
        break;

      case "early-twenty":
        startYear = 1900;
        endYear = 1949;
        getYear(1900, 1949);
        break;

      case "late-twenty":
        startYear = 1950;
        endYear = 1999;
        getYear(1950, 1999);
        break;

      case "present":
        startYear = 2000;
        endYear = 2049;
        getYear(2000, 2049);
        break;
    }
    filteredBooks = yearFilteredBooks;
    filterType = "Year";
    isYearFiltered = true;
    checkFiltered();
    console.log(event.target.innerHTML);
    applySorting();
  });
});

//
//----Sort Style

sortBtns.forEach((sortBtn) => {
  sortBtn.addEventListener("mouseover", () => {
    if (!sortBtn.classList.contains("selected")) {
      sortBtn.classList.add("hover");
    }
  });

  sortBtn.addEventListener("mouseout", () => {
    sortBtn.classList.remove("hover");
  });

  sortBtn.addEventListener("click", () => {
    console.log(isSorted);
    if (!isSorted) {
      sortBtn.classList.remove("hover");
      toggleSortSelected(sortBtn);
    } else {
      toggleSortSelected(sortBtn);
    }
  });
});

//
//----Sort evenet listener

highestRating.addEventListener("click", () => {
  checkFiltered();
  checkSorted(sortByHighRating);
});

newestPublished.addEventListener("click", () => {
  checkFiltered();
  checkSorted(sortByPublish);
});

author.addEventListener("click", () => {
  checkFiltered();
  checkSorted(sortByAuthor);
});

titleAZ.addEventListener("click", () => {
  checkFiltered();
  checkSorted(sortByTileAZ);
});

titleZA.addEventListener("click", () => {
  checkFiltered();
  checkSorted(sortByTileZA);
});

//---- General Style
randomBookBtn.addEventListener("click", () => {
  getRandomBook();
  randomBookBtn.classList.add("selected");
  setTimeout(() => {
    randomBookBtn.classList.remove("selected");
  }, 1000);
  resetFunc();
});

reset.addEventListener("click", () => {
  reset.classList.add("selected");
  setTimeout(() => {
    reset.classList.remove("selected");
  }, 800);
  bookCards(books);
  resetFunc();
});
