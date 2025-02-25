const express = require('express');
const app = express();
const PORT = 3000;

const quotes = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Fusce ultrices nunc quis lectus tempor tincidunt.",
    "Nunc dictum massa maximus est efficitur, tempus elementum neque tristique.",
    "Suspendisse in nulla ultrices, auctor urna in, auctor velit.",
    "Aliquam feugiat orci nec lectus porttitor pellentesque."]

app.get("/random-quote", (req, res)=> {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.json({ quote: randomQuote });
});

app.listen(PORT, ()=>{
    console.log("Serveur sur port" + PORT)
})