const quotes = [
  "Be yourself; everyone else is already taken. ― Oscar Wilde",
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. ― Marilyn Monroe",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "So many books, so little time. ― Frank Zappa",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ― Albert Einstein",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ― Bernard M. Baruch",
  "You've gotta dance like there's nobody watching , Love like you'll never be hurt , Sing like there's nobody listening , And live like it's heaven on earth. ― William W. Purkey",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams. ― Dr. Seuss",
  "You only live once, but if you do it right, once is enough. ― Mae West",
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.textContent = quotes[randomIndex];
}
