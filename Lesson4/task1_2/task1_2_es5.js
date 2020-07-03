'use strict';

function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
}

function AttachedPost(author, text, date){
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function(){
    this.highlighted = true;
}


let new_post = new Post('Ivan', 'hello', '30.06.2020');
new_post.edit('Hello! My name is Ivan');

console.log(new_post);

let new_post2 = new AttachedPost('Alex', 'Hello Ivan!', '30.06.2020');
console.log(new_post2);

new_post2.edit('Hello Ivan! Nice to meet you');
new_post2.makeTextHighlighted();
console.log(new_post2);

