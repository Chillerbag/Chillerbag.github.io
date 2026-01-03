// manually ran for now with node.

const fs = require('fs');
try {
    let files = fs.readdirSync('./resources/blog_posts');
    files = files.filter((val) => val != 'posts.json');
    console.log(files);

    fs.writeFileSync('./resources/blog_posts/posts.json', JSON.stringify(files));
    console.log('success!');
} catch (err) {
    console.error('Error reading files: ' + files);
}