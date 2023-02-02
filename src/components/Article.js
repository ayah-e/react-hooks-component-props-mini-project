import React from 'react';

function Article(props){
    let minutes = props.minutes;
    let emoji = '☕️';
    let emojiCount = Math.ceil(minutes/5)*5;

    if (minutes >= 30) {
        emoji = '🍱';
        emojiCount = Math.ceil(minutes/10)*10;
    }

    const emojis = emoji.repeat(emojiCount/5);

    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.date ||"January 1, 1970"}</small>
            <small> {emojis} {minutes} min read</small>
            <p>{props.preview}</p>
        </article>
    )
}

export default Article;