const fetchPosts = async () => {
    try {
        const response = await fetch("https://nodejs-mysql-api-testing.onrender.com/api/v1/posts")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

fetchPosts();