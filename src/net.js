

async function getPost(id, fetch)
{
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const res = await fetch(url);
    if(res == false) {
        console.log(`Error: ${res.status}`); 
    }
    return res.json();
}

module.exports = { getPost};