import Book from '../models/Book';
import Contribution from '../models/Contribution';
import Contributor from '../models/Contributor';
import ContributionType from '../models/ContributionType';

const books = [
  {
    id: 1342,
    title: `Pride and Prejudice`,
    image: `https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Jane Austen`,
        } as Contributor,
      },
    ],
  },
  {
    id: 25525,
    title: `The Works of Edgar Allan Poe, The Raven Edition`,
    image: `https://www.gutenberg.org/cache/epub/25525/pg25525.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Edgar Allan Poe`,
        } as Contributor,
      },
    ],
  },
  {
    id: 27827,
    title: `The Kama Sutra of Vatsyayana`,
    image: `https://www.gutenberg.org/cache/epub/27827/pg27827.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Vatsyayana`,
        } as Contributor,
      },
    ],
  },
  {
    id: 1635,
    title: `Ion`,
    image: `https://www.gutenberg.org/cache/epub/1635/pg1635.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Plato`,
        } as Contributor,
      },
    ],
  },
  {
    id: 84,
    title: `Frankenstein; Or, The Modern Prometheus`,
    image: `https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Mary Wollstonecraft Shelley`,
        } as Contributor,
      },
    ],
  },
  {
    id: 11,
    title: `Alice's Adventures in Wonderland`,
    image: `https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Lewis Carroll`,
        } as Contributor,
      },
    ],
  },
  {
    id: 58975,
    title: `Index of Project Gutenberg Works on Black History`,
    image: `https://www.gutenberg.org/cache/epub/58975/pg58975.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Various`,
        } as Contributor,
      },
    ],
  },
  {
    id: 514,
    title: `Little Women`,
    image: `https://www.gutenberg.org/cache/epub/514/pg514.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Louisa May Alcott`,
        } as Contributor,
      },
    ],
  },
  {
    id: 1080,
    title: `A Modest Proposal`,
    image: `https://www.gutenberg.org/cache/epub/1080/pg1080.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Jonathan Swift`,
        } as Contributor,
      },
    ],
  },
  {
    id: 44082,
    title: `The History of Modern Painting, Volume 3 (of 4)`,
    image: `https://www.gutenberg.org/cache/epub/44082/pg44082.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Richard Muther`,
        } as Contributor,
      },
    ],
  },
  {
    id: 158,
    title: `Emma`,
    image: `https://www.gutenberg.org/cache/epub/158/pg158.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Jane Austen`,
        } as Contributor,
      },
    ],
  },
  {
    id: 2701,
    title: `Moby Dick; Or, The Whale`,
    image: `https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Herman Melville`,
        } as Contributor,
      },
    ],
  },
  {
    id: 98,
    title: `A Tale of Two Cities`,
    image: `https://www.gutenberg.org/cache/epub/98/pg98.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Charles Dickens`,
        } as Contributor,
      },
    ],
  },
  {
    id: 1661,
    title: `The Adventures of Sherlock Holmes`,
    image: `https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Arthur Conan Doyle`,
        } as Contributor,
      },
    ],
  },
  {
    id: 2542,
    title: `Et dukkehjem. English`,
    image: `https://www.gutenberg.org/cache/epub/2542/pg2542.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Henrik Ibsen`,
        } as Contributor,
      },
    ],
  },
  {
    id: 844,
    title: `The Importance of Being Earnest: A Trivial Comedy for Serious People`,
    image: `https://www.gutenberg.org/cache/epub/844/pg844.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Oscar Wilde`,
        } as Contributor,
      },
    ],
  },
  {
    id: 215,
    title: `The Call of the Wild`,
    image: `https://www.gutenberg.org/cache/epub/215/pg215.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Jack London`,
        } as Contributor,
      },
    ],
  },
  {
    id: 16,
    title: `Peter Pan`,
    image: `https://www.gutenberg.org/cache/epub/16/pg16.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `J. M.  Barrie`,
        } as Contributor,
      },
    ],
  },
  {
    id: 205,
    title: `Walden, and On The Duty Of Civil Disobedience`,
    image: `https://www.gutenberg.org/cache/epub/205/pg205.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Henry David Thoreau`,
        } as Contributor,
      },
    ],
  },
  {
    id: 345,
    title: `Dracula`,
    image: `https://www.gutenberg.org/cache/epub/345/pg345.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Bram Stoker`,
        } as Contributor,
      },
    ],
  },
  {
    id: 219,
    title: `Heart of Darkness`,
    image: `https://www.gutenberg.org/cache/epub/219/pg219.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Joseph Conrad`,
        } as Contributor,
      },
    ],
  },
  {
    id: 1952,
    title: `The Yellow Wallpaper`,
    image: `https://www.gutenberg.org/cache/epub/1952/pg1952.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Charlotte Perkins Gilman`,
        } as Contributor,
      },
    ],
  },
  {
    id: 16328,
    title: `Beowulf: An Anglo-Saxon Epic Poem`,
    image: `https://www.gutenberg.org/cache/epub/16328/pg16328.cover.medium.jpg`,
    description: ``,
  },
  {
    id: 4300,
    title: `Ulysses`,
    image: `https://www.gutenberg.org/cache/epub/4300/pg4300.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `James Joyce`,
        } as Contributor,
      },
    ],
  },
  {
    id: 1232,
    title: `Il Principe. English`,
    image: `https://www.gutenberg.org/cache/epub/1232/pg1232.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Niccolò Machiavelli`,
        } as Contributor,
      },
    ],
  },
  {
    id: 76,
    title: `Adventures of Huckleberry Finn`,
    image: `https://www.gutenberg.org/cache/epub/76/pg76.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Mark Twain`,
        } as Contributor,
      },
    ],
  },
  {
    id: 174,
    title: `The Picture of Dorian Gray`,
    image: `https://www.gutenberg.org/cache/epub/174/pg174.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Oscar Wilde`,
        } as Contributor,
      },
    ],
  },
  {
    id: 43,
    title: `The Strange Case of Dr. Jekyll and Mr. Hyde`,
    image: `https://www.gutenberg.org/cache/epub/43/pg43.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Robert Louis Stevenson`,
        } as Contributor,
      },
    ],
  },
  {
    id: 5740,
    title: `Tractatus Logico-Philosophicus`,
    image: `https://www.gutenberg.org/cache/epub/5740/pg5740.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Ludwig Wittgenstein`,
        } as Contributor,
      },
    ],
  },
  {
    id: 5200,
    title: `Metamorphosis`,
    image: `https://www.gutenberg.org/cache/epub/5200/pg5200.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Franz Kafka`,
        } as Contributor,
      },
    ],
  },
  {
    id: 61568,
    title: `When They Were Girls`,
    image: `https://www.gutenberg.org/cache/epub/61568/pg61568.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Rebecca Deming Moore`,
        } as Contributor,
      },
    ],
  },
  {
    id: 2600,
    title: `War and Peace`,
    image: `https://www.gutenberg.org/cache/epub/2600/pg2600.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `graf Leo Tolstoy`,
        } as Contributor,
      },
    ],
  },
  {
    id: 45,
    title: `Anne of Green Gables`,
    image: `https://www.gutenberg.org/cache/epub/45/pg45.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `L. M.  Montgomery`,
        } as Contributor,
      },
    ],
  },
  {
    id: 1260,
    title: `Jane Eyre: An Autobiography`,
    image: `https://www.gutenberg.org/cache/epub/1260/pg1260.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Charlotte Brontë`,
        } as Contributor,
      },
    ],
  },
  {
    id: 1400,
    title: `Great Expectations`,
    image: `https://www.gutenberg.org/cache/epub/1400/pg1400.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Charles Dickens`,
        } as Contributor,
      },
    ],
  },
  {
    id: 74,
    title: `The Adventures of Tom Sawyer`,
    image: `https://www.gutenberg.org/cache/epub/74/pg74.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Mark Twain`,
        } as Contributor,
      },
    ],
  },
  {
    id: 61564,
    title: `Attitude`,
    image: `https://www.gutenberg.org/cache/epub/61564/pg61564.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Hal Clement`,
        } as Contributor,
      },
    ],
  },
  {
    id: 1184,
    title: `The Count of Monte Cristo, Illustrated`,
    image: `https://www.gutenberg.org/cache/epub/1184/pg1184.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Alexandre Dumas`,
        } as Contributor,
      },
    ],
  },
  {
    id: 376,
    title: `A Journal of the Plague Year`,
    image: `https://www.gutenberg.org/cache/epub/376/pg376.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Daniel Defoe`,
        } as Contributor,
      },
    ],
  },
  {
    id: 2591,
    title: `Grimms' Fairy Tales`,
    image: `https://www.gutenberg.org/cache/epub/2591/pg2591.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Jacob Grimm`,
        } as Contributor,
      },
      {
        type: ContributionType.Author,
        contributor: {
          name: `Wilhelm Grimm`,
        } as Contributor,
      },
    ],
  },
  {
    id: 57490,
    title: `Index of the Project Gutenberg Works of H. G. Wells`,
    image: `https://www.gutenberg.org/cache/epub/57490/pg57490.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `H. G.  Wells`,
        } as Contributor,
      },
    ],
  },
  {
    id: 120,
    title: `Treasure Island`,
    image: `https://www.gutenberg.org/cache/epub/120/pg120.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Robert Louis Stevenson`,
        } as Contributor,
      },
    ],
  },
  {
    id: 30240,
    title: `The Big Trip Up Yonder`,
    image: `https://www.gutenberg.org/cache/epub/30240/pg30240.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Kurt Vonnegut`,
        } as Contributor,
      },
    ],
  },
  {
    id: 36,
    title: `The War of the Worlds`,
    image: `https://www.gutenberg.org/cache/epub/36/pg36.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `H. G.  Wells`,
        } as Contributor,
      },
    ],
  },
  {
    id: 160,
    title: `The Awakening, and Selected Short Stories`,
    image: `https://www.gutenberg.org/cache/epub/160/pg160.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Kate Chopin`,
        } as Contributor,
      },
    ],
  },
  {
    id: 28860,
    title: `The Memoirs, Correspondence, And Miscellanies, From The Papers Of Thomas Jefferson`,
    image: `https://www.gutenberg.org/cache/epub/28860/pg28860.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Jefferson`,
        } as Contributor,
      },
    ],
  },
  {
    id: 46,
    title: `A Christmas Carol in Prose; Being a Ghost Story of Christmas`,
    image: `https://www.gutenberg.org/cache/epub/46/pg46.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Charles Dickens`,
        } as Contributor,
      },
    ],
  },
  {
    id: 135,
    title: `Les Misérables`,
    image: `https://www.gutenberg.org/cache/epub/135/pg135.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Victor Hugo`,
        } as Contributor,
      },
    ],
  },
  {
    id: 20228,
    title: `Noli Me Tangere`,
    image: `https://www.gutenberg.org/cache/epub/20228/pg20228.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `José Rizal`,
        } as Contributor,
      },
    ],
  },
  {
    id: 28054,
    title: `The Brothers Karamazov`,
    image: `https://www.gutenberg.org/cache/epub/28054/pg28054.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Fyodor Dostoyevsky`,
        } as Contributor,
      },
    ],
  },
  {
    id: 2680,
    title: `Meditations`,
    image: `https://www.gutenberg.org/cache/epub/2680/pg2680.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Emperor of Rome Marcus Aurelius`,
        } as Contributor,
      },
    ],
  },
  {
    id: 996,
    title: `Don Quixote`,
    image: `https://www.gutenberg.org/cache/epub/996/pg996.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Miguel de Cervantes Saavedra`,
        } as Contributor,
      },
    ],
  },
  {
    id: 2852,
    title: `The Hound of the Baskervilles`,
    image: `https://www.gutenberg.org/cache/epub/2852/pg2852.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Arthur Conan Doyle`,
        } as Contributor,
      },
    ],
  },
  {
    id: 61567,
    title: `Stonehenge, a Temple Restor'd to the British Druids`,
    image: `https://www.gutenberg.org/cache/epub/61567/pg61567.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `William Stukeley`,
        } as Contributor,
      },
    ],
  },
  {
    id: 2554,
    title: `Prestuplenie i nakazanie. English`,
    image: `https://www.gutenberg.org/cache/epub/2554/pg2554.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Fyodor Dostoyevsky`,
        } as Contributor,
      },
    ],
  },
  {
    id: 61572,
    title: `General History Of Civilisation In Europe, From The Fall Of The Roman Empire Till The French Revolut`,
    image: `https://www.gutenberg.org/cache/epub/61572/pg61572.cover.medium.jpg`,
    description: ``,
  },
  {
    id: 2500,
    title: `Siddhartha`,
    image: `https://www.gutenberg.org/cache/epub/2500/pg2500.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Hermann Hesse`,
        } as Contributor,
      },
    ],
  },
  {
    id: 2814,
    title: `Dubliners`,
    image: `https://www.gutenberg.org/cache/epub/2814/pg2814.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `James Joyce`,
        } as Contributor,
      },
    ],
  },
  {
    id: 408,
    title: `The Souls of Black Folk`,
    image: `https://www.gutenberg.org/cache/epub/408/pg408.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `W. E. B.  Du Bois`,
        } as Contributor,
      },
    ],
  },
  {
    id: 3207,
    title: `Leviathan`,
    image: `https://www.gutenberg.org/cache/epub/3207/pg3207.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Thomas Hobbes`,
        } as Contributor,
      },
    ],
  },
  {
    id: 244,
    title: `A Study in Scarlet`,
    image: `https://www.gutenberg.org/cache/epub/244/pg244.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Arthur Conan Doyle`,
        } as Contributor,
      },
    ],
  },
  {
    id: 768,
    title: `Wuthering Heights`,
    image: `https://www.gutenberg.org/cache/epub/768/pg768.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Emily Brontë`,
        } as Contributor,
      },
    ],
  },
  {
    id: 7370,
    title: `Second Treatise of Government`,
    image: `https://www.gutenberg.org/cache/epub/7370/pg7370.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `John Locke`,
        } as Contributor,
      },
    ],
  },
  {
    id: 1497,
    title: `The Republic`,
    image: `https://www.gutenberg.org/cache/epub/1497/pg1497.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Plato`,
        } as Contributor,
      },
    ],
  },
  {
    id: 3600,
    title: `Essays of Michel de Montaigne — Complete`,
    image: `https://www.gutenberg.org/cache/epub/3600/pg3600.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Michel de Montaigne`,
        } as Contributor,
      },
    ],
  },
  {
    id: 58585,
    title: `The Prophet`,
    image: `https://www.gutenberg.org/cache/epub/58585/pg58585.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Kahlil Gibran`,
        } as Contributor,
      },
    ],
  },
  {
    id: 1998,
    title: `Also sprach Zarathustra. English`,
    image: `https://www.gutenberg.org/cache/epub/1998/pg1998.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Friedrich Wilhelm Nietzsche`,
        } as Contributor,
      },
    ],
  },
  {
    id: 25344,
    title: `The Scarlet Letter`,
    image: `https://www.gutenberg.org/cache/epub/25344/pg25344.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Nathaniel Hawthorne`,
        } as Contributor,
      },
    ],
  },
  {
    id: 61562,
    title: `The Complete Collection of Pictures and Songs`,
    image: `https://www.gutenberg.org/cache/epub/61562/pg61562.cover.medium.jpg`,
    description: ``,
  },
  {
    id: 55,
    title: `The Wonderful Wizard of Oz`,
    image: `https://www.gutenberg.org/cache/epub/55/pg55.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `L. Frank  Baum`,
        } as Contributor,
      },
    ],
  },
  {
    id: 1064,
    title: `The Masque of the Red Death`,
    image: `https://www.gutenberg.org/cache/epub/1064/pg1064.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Edgar Allan Poe`,
        } as Contributor,
      },
    ],
  },
  {
    id: 203,
    title: `Uncle Tom's Cabin`,
    image: `https://www.gutenberg.org/cache/epub/203/pg203.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Harriet Beecher Stowe`,
        } as Contributor,
      },
    ],
  },
  {
    id: 23700,
    title: `The Decameron of Giovanni Boccaccio`,
    image: `https://www.gutenberg.org/cache/epub/23700/pg23700.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Giovanni Boccaccio`,
        } as Contributor,
      },
    ],
  },
  {
    id: 4363,
    title: `Beyond Good and Evil`,
    image: `https://www.gutenberg.org/cache/epub/4363/pg4363.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Friedrich Wilhelm Nietzsche`,
        } as Contributor,
      },
    ],
  },
  {
    id: 61574,
    title: `Selenium cells`,
    image: `https://www.gutenberg.org/cache/epub/61574/pg61574.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Thomas William Benson`,
        } as Contributor,
      },
    ],
  },
  {
    id: 8800,
    title: `An Index of The Divine Comedy`,
    image: `https://www.gutenberg.org/cache/epub/8800/pg8800.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Dante Alighieri`,
        } as Contributor,
      },
    ],
  },
  {
    id: 1001,
    title: `Divine Comedy, Longfellow's Translation, Hell`,
    image: `https://www.gutenberg.org/cache/epub/1001/pg1001.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Dante Alighieri`,
        } as Contributor,
      },
    ],
  },
  {
    id: 1250,
    title: `Anthem`,
    image: `https://www.gutenberg.org/cache/epub/1250/pg1250.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Ayn Rand`,
        } as Contributor,
      },
    ],
  },
  {
    id: 33283,
    title: `Calculus Made Easy`,
    image: `https://www.gutenberg.org/cache/epub/33283/pg33283.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Silvanus P.  Thompson`,
        } as Contributor,
      },
    ],
  },
  {
    id: 3825,
    title: `Pygmalion`,
    image: `https://www.gutenberg.org/cache/epub/3825/pg3825.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Bernard Shaw`,
        } as Contributor,
      },
    ],
  },
  {
    id: 521,
    title: `The Life and Adventures of Robinson Crusoe`,
    image: `https://www.gutenberg.org/cache/epub/521/pg521.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Daniel Defoe`,
        } as Contributor,
      },
    ],
  },
  {
    id: 766,
    title: `David Copperfield`,
    image: `https://www.gutenberg.org/cache/epub/766/pg766.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Charles Dickens`,
        } as Contributor,
      },
    ],
  },
  {
    id: 236,
    title: `The Jungle Book`,
    image: `https://www.gutenberg.org/cache/epub/236/pg236.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Rudyard Kipling`,
        } as Contributor,
      },
    ],
  },
  {
    id: 41,
    title: `The Legend of Sleepy Hollow`,
    image: `https://www.gutenberg.org/cache/epub/41/pg41.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Washington Irving`,
        } as Contributor,
      },
    ],
  },
  {
    id: 730,
    title: `Oliver Twist`,
    image: `https://www.gutenberg.org/cache/epub/730/pg730.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Charles Dickens`,
        } as Contributor,
      },
    ],
  },
  {
    id: 10,
    title: `The King James Version of the Bible`,
    image: `https://www.gutenberg.org/cache/epub/10/pg10.cover.medium.jpg`,
    description: ``,
  },
  {
    id: 113,
    title: `The Secret Garden`,
    image: `https://www.gutenberg.org/cache/epub/113/pg113.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Frances Hodgson Burnett`,
        } as Contributor,
      },
    ],
  },
  {
    id: 34901,
    title: `On Liberty`,
    image: `https://www.gutenberg.org/cache/epub/34901/pg34901.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `John Stuart Mill`,
        } as Contributor,
      },
    ],
  },
  {
    id: 61557,
    title: `The Red Reign: The True Story of an Adventurous Year in Russia`,
    image: `https://www.gutenberg.org/cache/epub/61557/pg61557.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Kellogg Durland`,
        } as Contributor,
      },
    ],
  },
  {
    id: 140,
    title: `The Jungle`,
    image: `https://www.gutenberg.org/cache/epub/140/pg140.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Upton Sinclair`,
        } as Contributor,
      },
    ],
  },
  {
    id: 23,
    title: `Narrative of the Life of Frederick Douglass, an American Slave`,
    image: `https://www.gutenberg.org/cache/epub/23/pg23.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Frederick Douglass`,
        } as Contributor,
      },
    ],
  },
  {
    id: 1399,
    title: `Anna Karenina`,
    image: `https://www.gutenberg.org/cache/epub/1399/pg1399.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `graf Leo Tolstoy`,
        } as Contributor,
      },
    ],
  },
  {
    id: 20203,
    title: `Autobiography of Benjamin Franklin`,
    image: `https://www.gutenberg.org/cache/epub/20203/pg20203.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Benjamin Franklin`,
        } as Contributor,
      },
    ],
  },
  {
    id: 161,
    title: `Sense and Sensibility`,
    image: `https://www.gutenberg.org/cache/epub/161/pg161.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Jane Austen`,
        } as Contributor,
      },
    ],
  },
  {
    id: 972,
    title: `The Devil's Dictionary`,
    image: `https://www.gutenberg.org/cache/epub/972/pg972.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Ambrose Bierce`,
        } as Contributor,
      },
    ],
  },
  {
    id: 209,
    title: `The Turn of the Screw`,
    image: `https://www.gutenberg.org/cache/epub/209/pg209.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Henry James`,
        } as Contributor,
      },
    ],
  },
  {
    id: 47629,
    title: `Ang "Filibusterismo" (Karugtóng ng Noli Me Tangere)`,
    image: `https://www.gutenberg.org/cache/epub/47629/pg47629.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `José Rizal`,
        } as Contributor,
      },
    ],
  },
  {
    id: 6130,
    title: `The Iliad`,
    image: `https://www.gutenberg.org/cache/epub/6130/pg6130.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Homer`,
        } as Contributor,
      },
    ],
  },
  {
    id: 21279,
    title: `2 B R 0 2 B`,
    image: `https://www.gutenberg.org/cache/epub/21279/pg21279.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Kurt Vonnegut`,
        } as Contributor,
      },
    ],
  },
  {
    id: 5827,
    title: `The Problems of Philosophy`,
    image: `https://www.gutenberg.org/cache/epub/5827/pg5827.cover.medium.jpg`,
    description: ``,
    contributions: [
      {
        type: ContributionType.Author,
        contributor: {
          name: `Bertrand Russell`,
        } as Contributor,
      },
    ],
  }
] as Book[];

export default books;
