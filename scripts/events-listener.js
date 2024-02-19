document.getElementById('btn-update').addEventListener('click',function(){
    // console.log('everything gonna fine');
   const inputField= document.getElementById('input-text-1');
   const inputText=inputField.value;
//    console.log(inputText);
    const defaultText =document.getElementById('defult-text');
    defaultText.innerText=inputText;
    inputField.value='';
})

// another events listener

document.getElementById('btn-update-2').addEventListener('click',function(){
    document.getElementById('headings').innerText=document.getElementById('input-text-1').value;
    document.body.style.backgroundColor='pink';
    document.getElementById('defult-text').innerText='changed headings'
    
})