let maxScreenWidth = 2035;
let minScreenWidth = 375;
let objMaxWidth = 70;
let objMinWidth = 50;

let resultA = (objMaxWidth - objMinWidth) / (maxScreenWidth - minScreenWidth);
let resultB = objMaxWidth - resultA * maxScreenWidth;
console.log(
  "--sh-" +
    objMaxWidth +
    "-" +
    objMinWidth +
    ": calc(" +
    (resultA * 100).toFixed(2) +
    "vw + " +
    resultB.toFixed(2) +
    "px);"
);
