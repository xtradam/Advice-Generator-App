const adviceNumber = document.querySelector("#adviceNumber");
const adviceQuote = document.querySelector("#adviceQuote");
const button = document.querySelector("#adviceButton");

const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    adviceNumber.innerText = data.slip.id;
    adviceQuote.innerText = data.slip.advice;
};

getAdvice();

button.addEventListener("click", () => getAdvice());
