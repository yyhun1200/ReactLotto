"use strict";

class Lotto {
  min = 1;
  max = 45;

  makeRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  makeSelectedNumber(array) {
    let selectArray = [];
    while (selectArray.length < 6) {
      const number = this.makeRandomNumber(0, array.length);
      if (selectArray.indexOf(array[number]) === -1) {
        selectArray.push(array[number]);
      }
    }
    selectArray.sort((a, b) => a - b);
    return selectArray;
  }
}

export default Lotto;
