var toggleList = document.getElementById('toggleList');
var list = document.querySelector('.list');
var descriptionInput = document.querySelector('input.description');
var descriptionParagraph = document.querySelector('p.description');
var descriptionButton = document.querySelector('button.description');
var addItemInput = document.querySelector('input.addItemInput');
var addItemButton = document.querySelector('button.addItemButton');
// var removeItemButton = list.querySelector('button.removeItemButton');
// var listItems = document.getElementsByTagName('li');
var listUl = document.querySelector('ul');
var mybutton = document.getElementById('myButton');

// for (let i = 0; i < listItems.length; i++) {

  listUl.addEventListener('click', function(event){
    if (event.target.tagName == 'BUTTON') {
      // event.target.textContent = event.target.textContent.toUpperCase();
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
  });
  // list.addEventListener('mouseout', function(event){
  //     if (event.target.tagName == 'LI') {
  //         event.target.textContent = event.target.textContent.toLowerCase();
  //     }
  // });
// }

toggleList.addEventListener('click', function(){
    if(list.style.display == 'none'){
        toggleList.textContent = 'Hide List'
        list.style.display = 'block';
    }else{
        toggleList.textContent = 'Show List'
        list.style.display = 'none';
    }

});

descriptionButton.addEventListener('click', function(){
    descriptionParagraph.textContent = descriptionInput.value + ':';
    descriptionInput.value = '';
});

addItemButton.addEventListener('click', function(){
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

mybutton.addEventListener('click', function(){

  innerHTML.style.background = 'lightblue';
});
// removeItemButton.addEventListener('click', function(){
//   let ul = document.getElementsByTagName('ul')[0];
//   let li = document.querySelector('li:last-child');
//   ul.removeChild(li);
// });
