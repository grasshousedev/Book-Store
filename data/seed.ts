import { Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { MAX_PAGES, MAX_PRICE, MAX_YEAR, MIN_PAGES, MIN_PRICE, MIN_YEAR } from "../src/const/global";

const cmsPagesRaw = [
  { title: "Home" },
  { title: "Cart" },
  { title: "Contact Us" },
  { title: "Guarantee" },
  { title: "Shipping" },
  { title: "Privacy" },
  { title: "Terms" },
  { title: "Featured Authors" },
  { title: "New Release Books" },
  { title: "Top Categories" },
  { title: "Latest Blog Articles" },
  { title: "Publishers" },
  { title: "About Us" },
  { title: "Blog" },
];

export type CmsPage = {
  title: string;
  description: string;
  content: string;
};

let rowsCmsPages: CmsPage[] = [];
for (let i = 0; i < cmsPagesRaw.length; i++) {
  let cmsPage = cmsPagesRaw[i];
  rowsCmsPages.push({
    title: cmsPage.title,
    description: faker.lorem.paragraph(),
    content: faker.lorem.paragraphs(3),
  });
}

export const cmsPages: CmsPage[] = rowsCmsPages;

const categoriesRaw = [
  {
    name: "Arts and Entertainment",
    books: [
      {
        name: "The Warhol Economy",
        authors: ["Elizabeth Currid-Halkett"],
      },
      {
        name: "The Art of Pixar: 25th Anniversary",
        authors: ["Amid Amidi", "John Lasseter"],
      },
      {
        name: "Born to Run",
        authors: ["Bruce Springsteen"],
      },
      {
        name: "Steal Like an Artist: 10 Things Nobody Told You About Being Creative",
        authors: ["Austin Kleon"],
      },
      {
        name: "Just Kids",
        authors: ["Patti Smith"],
      },
      {
        name: "Hamilton: The Revolution",
        authors: ["Lin-Manuel Miranda", "Jeremy McCarter"],
      },
      {
        name: "The Goldfinch",
        authors: ["Donna Tartt"],
      },
      {
        name: "How Music Works",
        authors: ["David Byrne"],
      },
      {
        name: "The Artist's Way: A Spiritual Path to Higher Creativity",
        authors: ["Julia Cameron"],
      },
      {
        name: "Crazy Rich Asians",
        authors: ["Kevin Kwan"],
      },
    ],
  },
  {
    name: "Business and Technology",
    books: [
      {
        name: "The Lean Startup",
        authors: ["Eric Ries"],
      },
      {
        name: "Zero to One: Notes on Startups, or How to Build the Future",
        authors: ["Peter Thiel", "Blake Masters"],
      },
      {
        name: "Thinking, Fast and Slow",
        authors: ["Daniel Kahneman"],
      },
      {
        name: "The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail",
        authors: ["Clayton M. Christensen"],
      },
      {
        name: "Drive: The Surprising Truth About What Motivates Us",
        authors: ["Daniel H. Pink"],
      },
      {
        name: "Good to Great: Why Some Companies Make the Leap... and Others Don't",
        authors: ["Jim Collins"],
      },
      {
        name: "Lean In: Women, Work, and the Will to Lead",
        authors: ["Sheryl Sandberg"],
      },
      {
        name: "The Power of Habit: Why We Do What We Do in Life and Business",
        authors: ["Charles Duhigg"],
      },
      {
        name: "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        authors: ["Stephen R. Covey"],
      },
      {
        name: "Start with Why: How Great Leaders Inspire Everyone to Take Action",
        authors: ["Simon Sinek"],
      },
    ],
  },
  {
    name: "Graphic Novels",
    books: [
      {
        name: "Watchmen",
        authors: ["Alan Moore", "Dave Gibbons"],
      },
      {
        name: "Maus: A Survivor's Tale",
        authors: ["Art Spiegelman"],
      },
      {
        name: "Persepolis",
        authors: ["Marjane Satrapi"],
      },
      {
        name: "Sandman",
        authors: ["Neil Gaiman"],
      },
      {
        name: "V for Vendetta",
        authors: ["Alan Moore", "David Lloyd"],
      },
      {
        name: "Saga",
        authors: ["Brian K. Vaughan", "Fiona Staples"],
      },
      {
        name: "Bone",
        authors: ["Jeff Smith"],
      },
      {
        name: "Batman: The Dark Knight Returns",
        authors: ["Frank Miller"],
      },
      {
        name: "Y: The Last Man",
        authors: ["Brian K. Vaughan", "Pia Guerra"],
      },
      {
        name: "Blankets",
        authors: ["Craig Thompson"],
      },
    ],
  },
  {
    name: "History, Biography, and Social Science",
    books: [
      {
        name: "Sapiens: A Brief History of Humankind",
        authors: ["Yuval Noah Harari"],
      },
      {
        name: "The Diary of a Young Girl",
        authors: ["Anne Frank"],
      },
      {
        name: "A People's History of the United States",
        authors: ["Howard Zinn"],
      },
      {
        name: "The Immortal Life of Henrietta Lacks",
        authors: ["Rebecca Skloot"],
      },
      {
        name: "Team of Rivals: The Political Genius of Abraham Lincoln",
        authors: ["Doris Kearns Goodwin"],
      },
      {
        name: "The Warmth of Other Suns: The Epic Story of America's Great Migration",
        authors: ["Isabel Wilkerson"],
      },
      {
        name: "Alexander Hamilton",
        authors: ["Ron Chernow"],
      },
      {
        name: "The Wright Brothers",
        authors: ["David McCullough"],
      },
      {
        name: "Educated: A Memoir",
        authors: ["Tara Westover"],
      },
      {
        name: "The Emperor of All Maladies: A Biography of Cancer",
        authors: ["Siddhartha Mukherjee"],
      },
    ],
  },
  {
    name: "Home and Lifestyle",
    books: [
      {
        name: "The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing",
        authors: ["Marie Kondo"],
      },
      {
        name: "Goodbye, Things: The New Japanese Minimalism",
        authors: ["Fumio Sasaki"],
      },
      {
        name: "The Home Edit: A Guide to Organizing and Realizing Your House Goals",
        authors: ["Clea Shearer", "Joanna Teplin"],
      },
      {
        name: "The Joy of Less: A Minimalist Guide to Declutter, Organize, and Simplify",
        authors: ["Francine Jay"],
      },
      {
        name: "The Little Book of Hygge: Danish Secrets to Happy Living",
        authors: ["Meik Wiking"],
      },
      {
        name: "Spark Joy: An Illustrated Master Class on the Art of Organizing and Tidying Up",
        authors: ["Marie Kondo"],
      },
      {
        name: "Essentialism: The Disciplined Pursuit of Less",
        authors: ["Greg McKeown"],
      },
      {
        name: "Cozy: The Art of Arranging Yourself in the World",
        authors: ["Isabel Gillies"],
      },
      {
        name: "Tiny Habits: The Small Changes That Change Everything",
        authors: ["BJ Fogg"],
      },
      {
        name: "The Total Money Makeover: A Proven Plan for Financial Fitness",
        authors: ["Dave Ramsey"],
      },
    ],
  },
  {
    name: "Horror",
    books: [
      {
        name: "IT",
        authors: ["Stephen King"],
      },
      {
        name: "The Shining",
        authors: ["Stephen King"],
      },
      {
        name: "Dracula",
        authors: ["Bram Stoker"],
      },
      {
        name: "Frankenstein",
        authors: ["Mary Shelley"],
      },
      {
        name: "The Exorcist",
        authors: ["William Peter Blatty"],
      },
      {
        name: "Pet Sematary",
        authors: ["Stephen King"],
      },
      {
        name: "House of Leaves",
        authors: ["Mark Z. Danielewski"],
      },
      {
        name: "Bird Box",
        authors: ["Josh Malerman"],
      },
      {
        name: "The Haunting of Hill House",
        authors: ["Shirley Jackson"],
      },
      {
        name: "Let the Right One In",
        authors: ["John Ajvide Lindqvist"],
      },
    ],
  },
  {
    name: "Languages and Travel",
    books: [
      {
        name: "Fluent in 3 Months: How Anyone at Any Age Can Learn to Speak Any Language from Anywhere in the World",
        authors: ["Benny Lewis"],
      },
      {
        name: "Lonely Planet's Ultimate Travel: Our List of the 500 Best Places to See... Ranked",
        authors: ["Lonely Planet"],
      },
      {
        name: "Rick Steves' Europe Through the Back Door: The Travel Skills Handbook",
        authors: ["Rick Steves"],
      },
      {
        name: "The Rough Guide to First-Time Around the World",
        authors: ["Rough Guides"],
      },
      {
        name: "Eat, Pray, Love: One Woman's Search for Everything Across Italy, India and Indonesia",
        authors: ["Elizabeth Gilbert"],
      },
      {
        name: "In Other Words: A Language Lover's Guide to the Most Intriguing Words Around the World",
        authors: ["Christopher J. Moore"],
      },
      {
        name: "The Geography of Bliss: One Grump's Search for the Happiest Places in the World",
        authors: ["Eric Weiner"],
      },
      {
        name: "DK Eyewitness Travel Guide: Japan",
        authors: ["DK Eyewitness"],
      },
      {
        name: "Lost in Translation: An Illustrated Compendium of Untranslatable Words from Around the World",
        authors: ["Ella Frances Sanders"],
      },
      {
        name: "The Art of Travel",
        authors: ["Alain de Botton"],
      },
    ],
  },
  {
    name: "LGBTQIA+",
    books: [
      {
        name: "Call Me By Your Name",
        authors: ["André Aciman"],
      },
      {
        name: "Giovanni's Room",
        authors: ["James Baldwin"],
      },
      {
        name: "Red, White & Royal Blue",
        authors: ["Casey McQuiston"],
      },
      {
        name: "The Picture of Dorian Gray",
        authors: ["Oscar Wilde"],
      },
      {
        name: "Fun Home: A Family Tragicomic",
        authors: ["Alison Bechdel"],
      },
      {
        name: "The Song of Achilles",
        authors: ["Madeline Miller"],
      },
      {
        name: "Orlando: A Biography",
        authors: ["Virginia Woolf"],
      },
      {
        name: "Simon vs. the Homo Sapiens Agenda",
        authors: ["Becky Albertalli"],
      },
      {
        name: "Middlesex",
        authors: ["Jeffrey Eugenides"],
      },
      {
        name: "Stone Butch Blues",
        authors: ["Leslie Feinberg"],
      },
    ],
  },
  {
    name: "Literature and Poetry",
    books: [
      {
        name: "To Kill a Mockingbird",
        authors: ["Harper Lee"],
      },
      {
        name: "1984",
        authors: ["George Orwell"],
      },
      {
        name: "The Great Gatsby",
        authors: ["F. Scott Fitzgerald"],
      },
      {
        name: "Pride and Prejudice",
        authors: ["Jane Austen"],
      },
      {
        name: "The Catcher in the Rye",
        authors: ["J.D. Salinger"],
      },
      {
        name: "Beloved",
        authors: ["Toni Morrison"],
      },
      {
        name: "The Odyssey",
        authors: ["Homero"],
      },
      {
        name: "The Brothers Karamazov",
        authors: ["Fyodor Dostoevsky"],
      },
      {
        name: "Leaves of Grass",
        authors: ["Walt Whitman"],
      },
      {
        name: "The Waste Land",
        authors: ["T.S. Eliot"],
      },
    ],
  },
  {
    name: "Mystery",
    books: [
      {
        name: "The Adventures of Sherlock Holmes",
        authors: ["Arthur Conan Doyle"],
      },
      {
        name: "Gone Girl",
        authors: ["Gillian Flynn"],
      },
      {
        name: "The Girl with the Dragon Tattoo",
        authors: ["Stieg Larsson"],
      },
      {
        name: "And Then There Were None",
        authors: ["Agatha Christie"],
      },
      {
        name: "The Da Vinci Code",
        authors: ["Dan Brown"],
      },
      {
        name: "The Hound of the Baskervilles",
        authors: ["Arthur Conan Doyle"],
      },
      {
        name: "The Secret History",
        authors: ["Donna Tartt"],
      },
      {
        name: "The Woman in White",
        authors: ["Wilkie Collins"],
      },
      {
        name: "The Cuckoo's Calling",
        authors: ["J.K. Rowling"],
      },
      {
        name: "In the Woods",
        authors: ["Tana French"],
      },
    ],
  },
  {
    name: "Romance",
    books: [
      {
        name: "Brighter Than the Sun",
        authors: ["Julia Quinn"],
      },
      {
        name: "Outlander",
        authors: ["Diana Gabaldon"],
      },
      {
        name: "The Notebook",
        authors: ["Nicholas Sparks"],
      },
      {
        name: "Me Before You",
        authors: ["Jojo Moyes"],
      },
      {
        name: "The Time Traveler's Wife",
        authors: ["Audrey Niffenegger"],
      },
      {
        name: "Jane Eyre",
        authors: ["Charlotte Brontë"],
      },
      {
        name: "The Fault in Our Stars",
        authors: ["John Green"],
      },
      {
        name: "The Bridges of Madison County",
        authors: ["Robert James Waller"],
      },
      {
        name: "Eleanor & Park",
        authors: ["Rainbow Rowell"],
      },
      {
        name: "The Rosie Project",
        authors: ["Graeme Simsion"],
      },
    ],
  },
  {
    name: "Science and Math",
    books: [
      {
        name: "A Brief History of Time",
        authors: ["Stephen Hawking"],
      },
      {
        name: "The Selfish Gene",
        authors: ["Richard Dawkins"],
      },
      {
        name: "The Fabric of the Cosmos: Space, Time, and the Texture of Reality",
        authors: ["Brian Greene"],
      },
      {
        name: "The Elegant Universe: Superstrings, Hidden Dimensions, and the Quest for the Ultimate Theory",
        authors: ["Brian Greene"],
      },
      {
        name: "The Code Book: The Science of Secrecy from Ancient Egypt to Quantum Cryptography",
        authors: ["Simon Singh"],
      },
      {
        name: "The Man Who Knew Infinity: A Life of the Genius Ramanujan",
        authors: ["Robert Kanigel"],
      },
      {
        name: "The Emperor's New Mind: Concerning Computers, Minds, and the Laws of Physics",
        authors: ["Roger Penrose"],
      },
      {
        name: "Gödel, Escher, Bach: An Eternal Golden Braid",
        authors: ["Douglas Hofstadter"],
      },
      {
        name: "Cosmos",
        authors: ["Carl Sagan"],
      },
      {
        name: "Fermat's Enigma: The Epic Quest to Solve the World's Greatest Mathematical Problem",
        authors: ["Simon Singh"],
      },
    ],
  },
  {
    name: "Science Fiction and Fantasy",
    books: [
      {
        name: "Dune",
        authors: ["Frank Herbert"],
      },
      {
        name: "The Lord of the Rings",
        authors: ["J.R.R. Tolkien"],
      },
      {
        name: "Neuromancer",
        authors: ["William Gibson"],
      },
      {
        name: "A Game of Thrones",
        authors: ["George R.R. Martin"],
      },
      {
        name: "Foundation",
        authors: ["Isaac Asimov"],
      },
      {
        name: "Harry Potter and the Sorcerer's Stone",
        authors: ["J.K. Rowling"],
      },
      {
        name: "The Hitchhiker's Guide to the Galaxy",
        authors: ["Douglas Adams"],
      },
      {
        name: "Ender's Game",
        authors: ["Orson Scott Card"],
      },
      {
        name: "The Martian",
        authors: ["Andy Weir"],
      },
      {
        name: "The Hunger Games",
        authors: ["Suzanne Collins"],
      },
    ],
  },
  {
    name: "Spirituality and Philosophy",
    books: [
      {
        name: "The Power of Now: A Guide to Spiritual Enlightenment",
        authors: ["Eckhart Tolle"],
      },
      {
        name: "Man's Search for Meaning",
        authors: ["Viktor E. Frankl"],
      },
      {
        name: "The Four Agreements: A Practical Guide to Personal Freedom",
        authors: ["Don Miguel Ruiz"],
      },
      {
        name: "The Alchemist",
        authors: ["Paulo Coelho"],
      },
      {
        name: "Meditations",
        authors: [" Marcus Aurelius"],
      },
      {
        name: "Siddhartha",
        authors: ["Hermann Hesse"],
      },
      {
        name: "The Tao Te Ching",
        authors: ["Lao Tzu"],
      },
      {
        name: "The Road Less Traveled: A New Psychology of Love, Traditional Values, and Spiritual Growth",
        authors: ["M. Scott Peck"],
      },
      {
        name: "Tao of Pooh",
        authors: ["Benjamin Hoff"],
      },
      {
        name: "The Prophet",
        authors: ["Kahlil Gibran"],
      },
    ],
  },
  {
    name: "Wellness, Sports, and Outdoors",
    books: [
      {
        name: "Born to Run: A Hidden Tribe, Superathletes, and the Greatest Race the World Has Never Seen",
        authors: ["Christopher McDougall"],
      },
      {
        name: "The Wellness Rebel",
        authors: ["Pixie Turner"],
      },
      {
        name: "Eat, Move, Sleep: How Small Choices Lead to Big Changes",
        authors: ["Tom Rath"],
      },
      {
        name: "Wild: From Lost to Found on the Pacific Crest Trail",
        authors: ["Cheryl Strayed"],
      },
      {
        name: "The Inner Game of Tennis: The Classic Guide to the Mental Side of Peak Performance",
        authors: ["W. Timothy Gallwey"],
      },
      {
        name: "Deep: Freediving, Renegade Science, and What the Ocean Tells Us About Ourselves",
        authors: ["James Nestor"],
      },
      {
        name: "Endure: Mind, Body, and the Curiously Elastic Limits of Human Performance",
        authors: ["Alex Hutchinson"],
      },
      {
        name: "Becoming Wild: How Animal Cultures Raise Families, Create Beauty, and Achieve Peace",
        authors: ["Carl Safina"],
      },
      {
        name: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        authors: ["James Clear"],
      },
      {
        name: "The Nature Fix: Why Nature Makes Us Happier, Healthier, and More Creative",
        authors: ["Florence Williams"],
      },
    ],
  },
  {
    name: "Young Adult",
    books: [
      {
        name: "Throne of Glass",
        authors: ["Sarah J. Maas"],
      },
      {
        name: "The Maze Runner",
        authors: ["James Dashner"],
      },
      {
        name: "Six of Crows",
        authors: ["Leigh Bardugo"],
      },
      {
        name: "To All the Boys I've Loved Before",
        authors: ["Jenny Han"],
      },
      {
        name: "The Hate U Give",
        authors: ["Angie Thomas"],
      },
      {
        name: "Divergent",
        authors: ["Veronica Roth"],
      },
      {
        name: "The Perks of Being a Wallflower",
        authors: ["Stephen Chbosky"],
      },
      {
        name: "Twilight",
        authors: ["Stephenie Meyer"],
      },
      {
        name: "The Book Thief",
        authors: ["Markus Zusak"],
      },
      {
        name: "An Ember in the Ashes",
        authors: ["Sabaa Tahir"],
      },
    ],
  },
];

export type Publisher = {
  name: string;
  description: string;
};
export type Author = {
  name: string;
  description: string;
};
export type Book = {
  authors: Author[];
  publisher: Publisher;
  year: number;
  pages: number;
};
export type Product = {
  name: string;
  description: string;
  price: Prisma.Decimal;
  isbn: string;
  book: Book;
};
export type Category = {
  name: string;
  description: string;
  products: Product[];
};

let publishers: string[] = [];
function getPublisherName(): string {
  let attempt = "";
  do {
    attempt = faker.company.name();
  } while (publishers.indexOf(attempt) !== -1);
  return attempt;
}

let rowsCategories: Category[] = [];
for (let i = 0; i < categoriesRaw.length; i++) {
  let category = categoriesRaw[i];
  rowsCategories.push({
    name: category.name,
    description: faker.lorem.paragraph(),
    products: category.books.map((book) => {
      return {
        name: book.name,
        description: faker.lorem.paragraph(),
        price: new Prisma.Decimal(faker.commerce.price({ min: MIN_PRICE, max: MAX_PRICE })),
        isbn: faker.commerce.isbn(),
        book: {
          authors: book.authors.map((author) => {
            return { name: author, description: faker.lorem.paragraph() };
          }),
          publisher: {
            name: getPublisherName(),
            description: faker.lorem.paragraph(),
          },
          year: faker.number.int({ min: MIN_YEAR, max: MAX_YEAR }),
          pages: faker.number.int({ min: MIN_PAGES, max: MAX_PAGES }),
        },
      };
    }),
  });
}

export const categories: Category[] = rowsCategories;
