import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Server is ready</h1>')
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          id: 1,
          title: "Tech Support",
          content: "Why don't programmers like nature? It has too many bugs."
        },
        {
          id: 2,
          title: "Algorithm Humor",
          content: "An optimist says the glass is half full. A pessimist says it's half empty. A programmer says the glass is twice as large as it needs to be."
        },
        {
          id: 3,
          title: "Debugging",
          content: "Why do programmers prefer dark mode? Because the light attracts bugs!"
        },
        {
          id: 4,
          title: "Binary Joke",
          content: "There are 10 kinds of people in the world: those who understand binary and those who don't."
        },
        {
          id: 5,
          title: "Recursion",
          content: "To understand recursion, you must first understand recursion."
        }
    ];      
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, (req, res) => {
    console.log(`server is running at http://localhost:${port}`)
});