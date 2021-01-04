// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; //(1)
  let b = 10; //(1)
  let c = 50; //(1)

  //O(n)
  for (let i = 0; i < input; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;
  }

  //O(n)
  for (let j = 0; j < input; j++) {
    let p = j * 2; //(n)
    let q = j * 2; //(n)
  }
  let whoAmI = "I don't know"; //(1)
}
//Answer: 4 + 5n = O(n)
