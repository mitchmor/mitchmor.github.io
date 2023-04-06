const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

async function getQuote() {
  const apiEndpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

  try {
    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const quote = await response.json();
    console.log(quote);

    const triviaQuestion = quote.question;
    const triviaAnswer = quote.answer;
    displayQuote(triviaQuestion, triviaAnswer);
  } catch (error) {
    console.error('Error fetching quote:', error);
    alert('Error fetching quote: ' + error);
  }
}

function displayQuote(triviaQuestion, triviaAnswer) {
  const quoteTextElement = document.querySelector('#js-quote-text');
  quoteTextElement.innerHTML = `${triviaQuestion}<br><br>${triviaAnswer}`;
}

document.addEventListener('DOMContentLoaded', getQuote);
