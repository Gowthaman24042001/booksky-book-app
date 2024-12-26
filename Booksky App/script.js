//Add book first
// open Add + button and then open popup

var addbutton = document.querySelector(".add-button");
addbutton.addEventListener("click", function(){
    var popup = document.querySelector(".popup-box");
    var overlay = document.querySelector(".overlay");
    popup.style.display="block";
    overlay.style.display="block";
})
var closebutton = document.getElementById("cancel-book");
closebutton.addEventListener("click", function(){
    var popup = document.querySelector(".popup-box");  
    var overlay = document.querySelector(".overlay"); 
    popup.style.display="none";
    overlay.style.display="none";
})

// // delete book function 
// var bookdelete =document.getElementById("book-delete");
// bookdelete.addEventListener("click", function(){
//     var book =document.querySelector(".book-box");
//     book.style.display="none"
// })

// Add the book in conatiner
// Addbook button, input-book name, input-book author, input-book price, input-book description

var conatiner = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var bookname = document.getElementById("book-name");
var bookauthorname = document.getElementById("book-author-name");
var bookprice =  document.getElementById("book-price");
var bookdescription = document.getElementById("book-description");

 addbook.addEventListener("click", function(){
   var div = document.createElement('div');
   div.setAttribute("class","book-box");
   div.innerHTML=`<h1>${bookname.value}</h1> 
   <h4>${bookauthorname.value}</h4> 
   <h6>${bookprice.value}</h6>
   <p>${bookdescription.value}</p>
   <button class="delete-button"> Delete </button>`;
   conatiner.append(div);

   //Attach event listener to the delete button
   var deleteButton = div.querySelector(".delete-button");
   deleteButton.addEventListener("click", deletebook);

  // Hide the popup and overlay after adding the book
  var popup = document.querySelector(".popup-box");  
  var overlay = document.querySelector(".overlay"); 
  popup.style.display="none";
  overlay.style.display="none";
 })

 //Delete book function
 function deletebook(event){
    event.target.parentNode.remove();
 }