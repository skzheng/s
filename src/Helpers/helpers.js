import WordsArray from './Words';



const randomWords = (num) => {
  let res = [];
  
  while(num > 0){
    let ind = Math.floor(Math.random() * WordsArray.length);
    res = res.concat(WordsArray.splice(ind, 1));
    num--;
  }
  
  return res;
}

export {
  randomWords
}