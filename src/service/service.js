class Lotto {
  min = 1;
  max = 45;

  initArray = (function () {
    let array = [];

    for (let i = 1; i <= 45; i++) {
      array.push(i);
    }
    return array;
  })();

  makeRandomNumber(min = 1, max = 45) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  makeSelectedNumber(included) {
    let selectArray = [];
    if (included === undefined) {
      while (selectArray.length < 6) {
        const number = this.makeRandomNumber();
        if (selectArray.indexOf(number) === -1) {
          selectArray.push(number);
        }
      }
    } else {
      while (selectArray.length < 6) {
        const number = this.makeRandomNumber();
        if (
          included.indexOf(number) !== -1 &&
          selectArray.indexOf(number) === -1
        ) {
          selectArray.push(number);
        }
      }
    }

    selectArray.sort((a, b) => a - b);

    return selectArray;
  }
}

export default Lotto;
