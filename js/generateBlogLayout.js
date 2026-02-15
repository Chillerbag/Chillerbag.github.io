class BlogPost {
    constructor(title, date, content) {
        this.title = title;
        this.date = date;
        this.content = content;
    }
}

const posts = [];
let curPostIndex = 0;
let isDay = true;
let angle = 0;
let startAngle = 0;
let currentOpChange = -0.1;
let currentOpacity = 1;

const blogDiv = document.querySelector('.blog-layout');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');
const sunMoon = document.querySelector('.day-night-cycle');
nextButton.addEventListener("click", () => changePostButton(-1));
prevButton.addEventListener("click", () => changePostButton(1));


async function generatePosts() {
    try {
        let response = await fetch('./resources/blog_posts/posts.json')
        if (!response.ok) {
            throw new Error('Failed to extract posts');
        }
        posts.push(...(await response.json()));
        renderSinglePost(posts[0]);

    } catch (err) {
        console.log('Error, failure to retrieve posts: ' + err);
    }
}

function changePostButton(addIndex) {
    // start rotating the sun to moon etc.
    if (curPostIndex + addIndex >= 0 && curPostIndex + addIndex <= (posts.length - 1)) {
        curPostIndex += addIndex;
        renderSinglePost(posts[curPostIndex]);
        dayTimeCycle();
    }
}

function dayTimeCycle() {
    let post = document.querySelector('.blog-post');
    let mainBg = document.querySelector('.main-content');
    let originalPos = sunMoon.getBoundingClientRect();
    
    if (!isDay) {
        sunMoonAnimation(originalPos.left, originalPos.top);
        post.style.animationName = 'blog-post-to-day';
        post.style.animationPlayState = 'running';
        mainBg.style.animationName = 'main-bg-to-day';
        mainBg.style.animationPlayState = 'running';
        isDay = true;
    } else {
        sunMoonAnimation(originalPos.left, originalPos.top);
        post.style.animationName = 'blog-post-to-night';
        post.style.animationPlayState = 'running';
        mainBg.style.animationName = 'main-bg-to-night';
        mainBg.style.animationPlayState = 'running';
        isDay = false;
    }
}

function sunMoonAnimation() {
    let radius = 100; 
    let speed = Math.PI / 120;
    
    angle += speed;

    let x = radius * Math.cos(angle);
    let y = radius * -Math.sin(angle) * 3; 

    sunMoon.style.transform = `translate(${x}px, ${y}px)`;
    currentOpacity += currentOpChange;

    currentOpacity = Math.min(Math.max(currentOpacity, 0), 1);
    sunMoon.style.opacity = currentOpacity;

    if (Math.abs(angle % Math.PI - Math.PI / 2) < 0.05) {
        sunMoon.src = isDay ? 'resources/icon_buttons/sun_icon.gif' : 'resources/icon_buttons/moon_icon.gif';
        currentOpChange = -currentOpChange;
    }

    if (angle < startAngle + Math.PI) {
        requestAnimationFrame(sunMoonAnimation);
    } else {
        startAngle = angle; 
        angle = startAngle; 
        currentOpChange = -currentOpChange;
        currentOpacity = 1;
    }
}

async function renderSinglePost(post) {
    // check if there is a blog-post in the dom first. 
    let existingPost = document.querySelectorAll('.blog-post');

    const regex = new RegExp('^(\\S*)\\s+(.*)$');

    // load post
    const blogPost = new BlogPost();
    let postMatches = post.match(regex);
    blogPost.date = new Date(postMatches[1]);
    // lol hacky
    blogPost.title = postMatches[2].slice(0, -4);
    let response = await fetch(`./resources/blog_posts/${post}`)

    if (!response.ok) {
        throw new Error(`Failed to read post content for ${postMatches[2]}`);
    } else {
        const content = await response.text();
        blogPost.content = content;
    }

    if (existingPost.length == 0) {
        const postEl = document.createElement('article');
        postEl.className = 'blog-post';
        postEl.innerHTML = `
            <h1>${blogPost.title}</h1>
            <br></br>
            <h2>${blogPost.date.toDateString()}<h2>
            <hr></hr> 
            <p>${blogPost.content}</p>
        `;
        blogDiv.appendChild(postEl);    
    } else {
        existingPost[0].innerHTML = `
            <h1>${blogPost.title}</h1>
            <br></br>
            <h2>${blogPost.date.toDateString()}<h2>
            <hr></hr> 
            <p>${blogPost.content}</p>
        `;
    }

    if (curPostIndex == 0) {
        nextButton.classList.toggle('hide-button');
    } else {
        nextButton.classList.remove('hide-button');
    }

    if (curPostIndex == (posts.length - 1)) {
        prevButton.classList.toggle('hide-button');
    } else {
        prevButton.classList.remove('hide-button');
    }


}

generatePosts();



