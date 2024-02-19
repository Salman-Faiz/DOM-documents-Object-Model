document.getElementById('btn-post').addEventListener('click',function(){

    // console.log('ALL right')

    const textArea= document.getElementById('text-area-1');
    const textAreaText=textArea.value;
    // console.log(textAreaText);
    const commentsSection = document.getElementById('comments-section');
    const newComment =document.createElement('p');
    newComment.innerText=textAreaText;
    commentsSection.appendChild(newComment);
    textArea.value='';
})