// focus and blur on input field
// /////////////////////////////////////////
document.getElementById('text-1').addEventListener('focus',function(){

    // console.log('woww');
})
document.getElementById('text-1').addEventListener('blur',function(){

    // console.log('blurr');
})


// /////////////////////////////////////////
// delete confirmation portion
document.getElementById('text-1').addEventListener('keyup',function(event){
    const deleteConfirmation =event.target.value;

    if(deleteConfirmation === 'delete'){
        const btnDelete= document.getElementById('btn-delete');
        btnDelete.removeAttribute('disabled');
    }
    else{
        const btnDelete= document.getElementById('btn-delete');
        btnDelete.setAttribute('disabled',true);
    }
//     console.log(event.target.value);
})

// delete confirmation message and clear input field

document.getElementById('btn-delete').addEventListener('click',function(){
    const paragraphContent= document.getElementById('paragraph-content');
    paragraphContent.innerText='Repository deleted successfully';
    document.getElementById('text-1').value='';
    
    })