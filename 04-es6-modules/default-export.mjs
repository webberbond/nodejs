async function getData(url) {
    const res = await fetch(url)
    const posts = res.json()
    return posts
}

export default getData
