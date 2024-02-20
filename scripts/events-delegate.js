// to create item

document.getElementById('btn-add').addEventListener('click',function(){

    const delegateUList = document.getElementById('delegateList');
    const li=document.createElement('li');
    li.innerText='brand new item';
    li.classList.add('items');
    delegateUList.appendChild(li);

 })

//  remove a child from parent Node
document.getElementById('delegateList').addEventListener('click',function(events){
    events.target.parentNode.removeChild(events.target);

})



// remove items from list.........it will be worked for existing items only.new item cannot change.
// const items= document.getElementsByClassName('items');
// for(const item of items){
//  // console.log(item.innerText);
//  item.addEventListener('click',function(events){
//      item.remove('events');
//  })
// }

