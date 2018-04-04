import Words from './Words';



const randomWord = (num) => {
  let res = [];
  
  while(num > 0){
    let ind = Math.floor(Math.random() * Words.length);
    res.push(Words.splice(ind, 1));
    num--;
  }
  
  return res;
}

export {
  shuffleWords
}