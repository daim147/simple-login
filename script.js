const labels = document.querySelectorAll(".form-control label");


labels.forEach(label => {
  label.innerHTML =  label.textContent
  .split("")
  .map((letter, index) => `<span style="transition-delay: ${index * 50}ms">${letter}</span>`)
        .join("")
})



// function test(letter, index){
//     // (letter, index) =>
//         `<span>${letter}</span>`
// }

// (letter, index) =>
//         `<span>${letter}</span>`