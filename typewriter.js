// setTimeout(() => {
//   const sentence = "hello there from lighthouse labs";
//   for (char of sentence) {
//     process.stdout.write(char);
//   }
// }, 1000);
const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  const letter = sentence[i];

  setTimeout(() => {
    console.log(letter);
  }, 1000 * (i + 1));
}
