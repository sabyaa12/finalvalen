// const changeText = document.querySelector("#change-text");

// let changedtext = changeText.addEventListener("click", function() {
//   changeText.textContent = "wallllah";
// });
// const changedText = document.querySelector("#changedText");

// changedText.addEventListener("click", function() {
//     changedText.textContent = "please";
//   });
const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});