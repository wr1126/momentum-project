const quotes = [
    {
        quote: `Do not go gentle into that good night.<br>Rage, rage against the dying of the light.`,
        author: "Dylan Marlais Thomas"
    },
    {
        quote: `We are not human beings having a spiritual experience;<br>we are spiritual beings having a human experience.`,
        author: "Teilhard de Chardin"
    },
    {
        quote: `There is a crack in everything.<br> That's how the light gets in.`,
        author: "Leonard Cohen"
    },
    {
        quote: `Sometimes you don't get what you want<br>because you deserve better.`,
        author: "unknown"
    }
];
const quote = document.querySelector("#quote span");
const randomQuote = quotes[Math.floor((Math.random()) * quotes.length)];
quote.innerHTML = `${randomQuote.quote}<br><br>${randomQuote.author}`;