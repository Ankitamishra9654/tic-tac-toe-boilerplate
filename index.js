const result = document.getElementById("result");
const boxes = document.getElementsByClassName("box");
const button = document.getElementById("button");
let xArr = [];
let yArr = [];

let text = "O";
button.onclick = () => {
  location.reload();
};
let finalresult = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [0, 4, 8],
  [2, 5, 8],
];

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", handleclick);
}
let flag1 = false;
let count = 0;

function handleclick(e) {
  if (!e.target.innerText) {
    count++;
    text = text == "O" ? "X" : "O";
    text == "X" ? xArr.push(e.target.id - 1) : yArr.push(e.target.id - 1);
    e.target.innerHTML = `<h2>${text}</h2>`;
    let arr = text == "X" ? xArr : yArr;
    checkwin(finalresult, arr, text);
    console.log(xArr, yArr);
    // checkresult()
  }
  if (count == 9 && flag1 == false) {
    showresult("Draw");
  }
}

// function checkresult(){
//     if(boxes[0].innerText+boxes[1].innerText+boxes[2].innerText=="XXX" ||
//      boxes[3].innerText+boxes[4].innerText+boxes[5].innerText=="XXX"||
//      boxes[6].innerText+boxes[7].innerText+boxes[8].innerText=="XXX"||
//      boxes[0].innerText+boxes[3].innerText+boxes[6].innerText=="XXX" ||
//      boxes[1].innerText+boxes[4].innerText+boxes[7].innerText=="XXX"||
//      boxes[2].innerText+boxes[5].innerText+boxes[8].innerText=="XXX"||
//      boxes[2].innerText+boxes[4].innerText+boxes[6].innerText=="XXX"){
//        showresult("X")
//        flag == true
//     }else if ( boxes[0].innerText+boxes[1].innerText+boxes[2].innerText=="OOO"||
//     boxes[3].innerText+boxes[4].innerText+boxes[5].innerText=="OOO"||
//     boxes[6].innerText+boxes[7].innerText+boxes[8].innerText=="OOO"||
//     boxes[0].innerText+boxes[3].innerText+boxes[6].innerText=="OOO"||
//     boxes[1].innerText+boxes[4].innerText+boxes[7].innerText=="OOO"||
//     boxes[1].innerText+boxes[5].innerText+boxes[8].innerText=="OOO"||
//     boxes[2].innerText+boxes[4].innerText+boxes[6].innerText=="OOO"){
//        showresult("O")
//         flag == true
//     }
// }

function showresult(char) {
  message.innerText = char == "Draw" ? `${char}` : `${char} Won`;
  result.style.visibility = "visible";
}

function checkwin(finalresult, arr, text) {
  // console.log(finalresult,arr,text)
  let count = 0;
  let flag = [];
  for (let i = 0; i < finalresult.length; i++) {
    if (Array.isArray(finalresult[i])) {
      checkwin(finalresult[i], arr, text);
    } else {
      if (arr.includes(finalresult[i])) {
        count++;
        flag.push(true);
      } else {
        flag.push(false);
      }
    }
  }

  if (count == 3 && flag.every((ele) => ele == true)) {
    flag1 = true;
    showresult(text);
  }
}