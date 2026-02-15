// manually ran for now with node.

const fs = require('fs');
try {
    let files = fs.readdirSync('./resources/blog_posts');
    files = files.filter((val) => val != 'posts.json');

    // whatever, just slice the string and conv to date.
    files = files.sort((date1, date2) => new Date(date2.slice(0, 10)) - new Date(date1.slice(0, 10)));
    console.log(files);

    fs.writeFileSync('./resources/blog_posts/posts.json', JSON.stringify(files));
    console.log('success!');
} catch (err) {
    console.error('Error reading files: ' + files);
}