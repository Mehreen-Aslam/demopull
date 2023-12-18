let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turn = true; //plyerx plyero
const winpttren = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turn) {
      box.innerText = "o";
      turn = false;
    } else {
      box.innerText = "x";
      turn = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const checkwinner = () => {
  for (let pttren of winpttren) {
    // console.log(pttren[0], pttren[1], pttren[2]);
    // console.log(
    //   boxes[pttren[0]].innerText,
    //   boxes[pttren[1]].innerText,
    //   boxes[pttren[2]],
    //   innerText
    // );
    let post1=boxes[pttren[0]].innerText;
    let post2=boxes[pttren[1]].innerText;
    let post3=boxes[pttren[2]].innerText;
    if(post1 != ""&& post2 != "" &&post3!=""){
        if(post1===post2 && post2===post3){
            console.log("winner",post1);  
        }
    }

  }
};
