const ratingCard = document.querySelector('section:first-of-type');
const thankYouCard = document.querySelector('section:last-of-type');
const ratingCardSubmitBtn = document.querySelector('section:first-of-type button');

const ratingCardInputs = document.querySelectorAll("section:first-of-type span")
const result = document.querySelector("section:last-of-type p:first-of-type");

let inputValue;

ratingCardSubmitBtn.addEventListener("click", () => {
    ratingCard.style.display = "none";
    thankYouCard.style.display = "flex";
})

ratingCardInputs.forEach((input) => {
    input.addEventListener("click", () => {
        ratingCardInputs.forEach((input) => {
            input.dataset.selected = "false";
        })
        input.dataset.selected = "true";

        inputValue = input.textContent;
        result.textContent = `You selected  ${inputValue ? inputValue : 0} out of 5`;
    })
})