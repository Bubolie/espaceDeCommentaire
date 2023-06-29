let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let message = document.getElementById("message");
let button = document.querySelector("button");

button.addEventListener("click", submitComment);

let errorMessage = document.getElementById("error-message");
function submitComment(e) {
  e.preventDefault();
  if (firstName.value === "" || lastName.value === "" || message.value === "") {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    addComment();
    clearInput();
  }
}

function addComment() {
  let commentBox = document.createElement("div");
  commentBox.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
  let commentBorderBox = document.createElement("div");
  commentBorderBox.classList.add("flex-1", "py-10", "border-t", "border-gray-200");
  let nameComment = document.createElement("h3");
  nameComment.classList.add("font-medium", "text-gray-900");
  let commentArea = document.createElement("div");
  commentArea.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");
  let comment = document.createElement("p");

  let commentBoxList = document.getElementById("comment-list");
  commentBoxList.appendChild(commentBox);
  commentBox.appendChild(commentBorderBox);
  commentBorderBox.appendChild(nameComment);
  
  let nameCommentTexte = document.createTextNode(firstName.value + " " + lastName.value);
  nameComment.appendChild(nameCommentTexte);
  commentBorderBox.appendChild(commentArea);
  commentArea.appendChild(comment);
  
  let commentText = document.createTextNode(message.value);
  comment.appendChild(commentText);
  
}

function clearInput() {
  (firstName.value = ""), (lastName.value = ""), (message.value = "");
}
