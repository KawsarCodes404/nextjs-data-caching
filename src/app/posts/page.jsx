
const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

const getPosts3 = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) {
        throw new error('Failed to fetch posts');
    }

    return res.json();
}

const getPosts2 = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        return res.json();
    }
    catch (error) {
        throw new error('Failed to fetch posts');
    }
}

const PostPage = async () => {

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    // const posts = await res.json();

    const posts = await getPosts();

    return (
        <div>
            <h2>Hellos Posts: {posts.length}</h2>
        </div>
    );
};

export default PostPage;