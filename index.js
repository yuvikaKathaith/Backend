require('dotenv').config()
const express = require('express')
const app = express()

const githubData = {
    "login": "yuvikaKathaith",
    "id": 139555240,
    "node_id": "U_kgDOCFFxqA",
    "avatar_url": "https://avatars.githubusercontent.com/u/139555240?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/yuvikaKathaith",
    "html_url": "https://github.com/yuvikaKathaith",
    "followers_url": "https://api.github.com/users/yuvikaKathaith/followers",
    "following_url": "https://api.github.com/users/yuvikaKathaith/following{/other_user}",
    "gists_url": "https://api.github.com/users/yuvikaKathaith/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/yuvikaKathaith/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/yuvikaKathaith/subscriptions",
    "organizations_url": "https://api.github.com/users/yuvikaKathaith/orgs",
    "repos_url": "https://api.github.com/users/yuvikaKathaith/repos",
    "events_url": "https://api.github.com/users/yuvikaKathaith/events{/privacy}",
    "received_events_url": "https://api.github.com/users/yuvikaKathaith/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Yuvika Kathaith",
    "company": null,
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 20,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-07-14T11:43:28Z",
    "updated_at": "2024-09-21T13:32:00Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>user is required to login</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>Chai aur backend</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})