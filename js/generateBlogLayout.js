class BlogPost {
    constructor(title, date, content) {
        this.title = title;
        this.date = date;
        this.content = content;
    }
}

const blogDiv = document.querySelector('.blog-layout');

async function generatePosts() {
    try {
        let response = await fetch('./resources/blog_posts/posts.json')
        if (!response.ok) {
            throw new Error('Failed to extract posts');
        }
        const posts = await response.json();
        const regex = new RegExp('^(\\S*)\\s+(.*)$');
        for (const post of posts) {
            // decompose filename and content into a BlogPost
            const blogPost = new BlogPost();
            let postMatches = post.match(regex);
            blogPost.date = new Date(postMatches[1]);
            // lol hacky
            blogPost.title = postMatches[2].slice(0, -4);
            response = await fetch(`./resources/blog_posts/${post}`)
            if (!response.ok) {
                throw new Error(`Failed to read post content for ${postMatches[2]}`);
            } else {
                const content = await response.text();
                blogPost.content = content;
                renderSinglePost(blogPost);
            }
        }
    } catch (err) {
        console.log('Error, failure to retrieve posts: ' + err);
    }
}

function renderSinglePost(post) {
    const postEl = document.createElement('article');
    postEl.className = 'blog-post';
    // todo - insert and do html and css for this. 
    postEl.innerHTML = `
        <h1>${post.title}</h1>
        <br></br>
        <h2>${post.date.toDateString()}<h2>
        <hr></hr> 
        <p>${post.content}</p>
    `
    blogDiv.appendChild(postEl);
}

generatePosts();



