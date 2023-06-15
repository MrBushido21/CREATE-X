const formComment = document.querySelector('.form-comment__form');
const emailComment = document.querySelector('.comment-mail');
const nameComment = document.querySelector('.comment-name');
const textComment = document.querySelector('.comment-textarea');
const commentsBox = document.querySelector('.comments__comments-box');

formComment.addEventListener('submit', function(event) {
    let nameValue = nameComment.value;
    let textValue = textComment.value;
    
    commentsBox.insertAdjacentHTML (
        "beforeend",
        `
        <div class="comments__item">
                        <div class="comments__user">
                            <div class="comments__name">${nameValue}</div>
                            <time datetime="2020-07-15">July 15, 2020</time>
                        </div>
                        <div class="comments__comment">
                            <p>${textValue}</p>
                            <div class="comments__reply">
                                <img src="./images/news-article/Vector (9).svg" alt="">
                                <span>Reply</span>
                            </div>
                        </div>
                    </div>
        `
    );
    
    nameComment.value = '';   
    emailComment.value = '';
    textComment.value = '';

    event.preventDefault()

})

