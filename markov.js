/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    this.words = text.split(/[ \r\n]+/);
    // MORE CODE HERE
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // MORE CODE HERE
    let chains = new Map();

    for (let i = 0; i < this.words.length; i++) {
      let currWord = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (chains.has(currWord)) {
        chains.get(currWord).push(nextWord);
      } else {
        chains.set(currWord, [nextWord]);
      }
    }
    this.chains = chains;
    // console.log(Array.from(this.chains.keys()))
  }
  /** return random text from chains */

  getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  getText(numWords = 100) {
    // MORE CODE HERE
    // make array of keys
    let possibleWords = Array.from(this.chains.keys());
    let possibleNextWords;
    let possibleWord = this.getRandomWord(possibleWords);
    let possibleNextWord;
    let result = [];
    
    while (result.length <= numWords && possibleWord !== null) {
      result.push(possibleNextWord);
      possibleNextWords = this.chains.get(possibleWord); // eval to array of possibleNextWords for key
      debugger;
      possibleNextWord = this.getRandomWord(possibleNextWords);
      possibleWord = possibleNextWord;
    }
    // console.log(randomKey);
    // console.log(this.chains.values(randomKey));
    return result.join(" ");
    // while the current key is not null and length of output < numWords
      // grab a random key from array of keys
        // find a random value from the array of values for that key
          // value becomes the next key
  }
}
let mm = new MarkovMachine("the cat in the hat in the dog");
console.log(mm.getText());
