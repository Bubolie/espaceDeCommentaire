let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let message = document.getElementById("message");
const button = document.querySelector("button");

button.addEventListener("click", submitComment);

function submitComment(e) {
  e.preventDefault();
  const errorMessage = document.getElementById("error-message");
  if (firstName.value === "" || lastName.value === "" || message.value === "") {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    addComment();
    clearInput();
  }
}

function addComment() {
  let commentBoxList = document.getElementById("comment-list");
  let commentBox = document.createElement("div");
  commentBox.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
  commentBoxList.appendChild(commentBox);
  
  let commentBorderBox = document.createElement("div");
  commentBorderBox.classList.add("flex-1", "py-10", "border-t", "border-gray-200");
  commentBox.appendChild(commentBorderBox);

  let nameComment = document.createElement("h3");
  nameComment.classList.add("font-medium", "text-gray-900");
  commentBorderBox.appendChild(nameComment);

  let nameCommentTexte = document.createTextNode(firstName.value + " " + lastName.value);
  nameComment.appendChild(nameCommentTexte);

  let commentArea = document.createElement("div");
  commentArea.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");
  commentBorderBox.appendChild(commentArea);

  let comment = document.createElement("p");
  commentArea.appendChild(comment);

  let commentText = document.createTextNode(message.value);
  comment.appendChild(commentText);
}

function clearInput() {
  (firstName.value = ""), (lastName.value = ""), (message.value = "");
}
