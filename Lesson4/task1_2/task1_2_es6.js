'use strict';


class Post {
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }
    
    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date){
        super(author,text,date);
        this.highlighted = false;
    }
    
    makeTextHighlighted() {
        this.highlighted = true;
    }
}



let new_post = new Post('Ivan', 'hello', '30.06.2020');
new_post.edit('Hello! My name is Ivan');

console.log(new_post);

let new_post2 = new AttachedPost('Alex', 'Hello Ivan!', '30.06.2020');
console.log(new_post2);

new_post2.edit('Hello Ivan! Nice to meet you');
new_post2.makeTextHighlighted();
console.log(new_post2);

