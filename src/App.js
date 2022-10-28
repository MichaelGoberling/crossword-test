import logo from './logo.svg';
import './App.css';

import Crossword from '@jaredreisinger/react-crossword';

/**
 * 
 * ---------------
 * |     1 2 3 4 |
 * | 5   D O V E |
 * | 6   I W I N |
 * | 7 O X I D E |
 * | 8 W I N E   |
 * | 9 L E G O   |
 * ---------------
 * 
 * Clues: 
 * 1 Big name in paper cups 
 * 2 Needing to pay 
 * 3 YouTube Upload
 * 4 Opposite of WSW 
 * 5 Victorious shout 
 * 6 Nitrous ___ (laughing gas)
 * 7 Rose or Chardonnay 
 * 8 Maker of billions of bricks each year 
 */

const data = {
  down: {
    1: {
      clue: 'Head on a swivel',
      answer: 'OWL',
      row: 2,
      col: 0,
    },
    2: {
      clue: 'Big name in paper cups',
      answer: 'DIXIE',
      row: 0,
      col: 1,
    },
    3: {
      clue: 'Needing to pay',
      answer: 'OWING',
      row: 0,
      col: 2,
    },
    4: {
      clue: 'YouTube Upload',
      answer: 'VIDEO',
      row: 0,
      col: 3,
    },
    5: {
      clue: 'Opposite of WSW',
      answer: 'ENE',
      row: 0,
      col: 4,
    }
  },
  across: {
    5: {
      clue: 'three minus two',
      answer: 'DOVE',
      row: 0,
      col: 1,
    },
    6: {
      clue: 'Victorious shout',
      answer: 'IWIN',
      row: 1,
      col: 1,
    },
    7: {
      clue: 'Nitrous ____',
      answer: 'OXIDE',
      row: 2,
      col: 0,
    },
    8: {
      clue: 'Rose or Chardonnay',
      answer: 'WINE',
      row: 3,
      col: 0,
    },
    9: {
      clue: 'Maker of billions of bricks a year',
      answer: 'LEGO',
      row: 4,
      col: 0,
    },
  }
};

function App() {
  return (
    <div className="App">
      <div className="Header">
        <p>Crossword Test</p>
      </div>
      <div className="Crossword">

        <Crossword data={data} onCrosswordCorrect={() => {console.log("You win!")}} />;
      </div>
    </div>
  );
}

export default App;
