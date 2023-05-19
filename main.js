function getNewcard() {
    document.querySelector("#InputFlashCard").style.display = "block";
}

function getSelctNewcard() {
    document.querySelector("#InputFlashCard").style.display = "none";
}
function CreateFlash() {
    const question = document.querySelector("#Question").value;
    const answer = document.querySelector("#Answer").value;

    let newFlashcard = document.createElement("div");
    let newQuestion = document.createElement("h2");
    let newAnswers = document.createElement("h2");

    newFlashcard.className = "newFlashcard";
    newQuestion.className = "newQuestion";
    newAnswers.className = "newAnswers";

    newFlashcard.appendChild(newAnswers);
    newFlashcard.appendChild(newQuestion);
    document.querySelector("#newFlashcards").appendChild(newFlashcard);

    newQuestion.textContent = question;
    newAnswers.textContent = answer;

    newFlashcard.addEventListener("click", function transform() {
        if (newAnswers.style.display == "none") {
            newAnswers.style.display = "flex";
        } else {
            newAnswers.style.display = "none";
        }
    });
}
function getSelectCard() {
    document.querySelector("#newFlashcards").innerHTML = "";
}
