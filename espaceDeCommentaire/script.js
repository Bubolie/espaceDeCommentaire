let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let message = document.getElementById("message");

let commentBox = document.createElement("div");
let commentBorderBox = document.createElement("div");
let nameComment = document.createElement("h3");
let commentArea = document.createElement("div");
let comment = document.createElement("p");

// Creation de l'architecture à inclure
function addComment() {
  let commentBoxList = document.getElementById("comment-list");
  commentBoxList.appendChild(commentBox);
  commentBox.appendChild(commentBorderBox);
  commentBorderBox.appendChild(nameComment);
  let nameCommentTexte = document.createTextNode(firstName + " " + lastName);
  nameComment.appendChild(nameCommentTexte);
  commentBorderBox.appendChild(commentArea);
  commentArea.appendChild(comment);
  let commentText = document.createTextNode(message);
  comment.appendChild(commentText);
  styleComment();
}

function styleComment() {
  commentBox.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
  commentBorderBox.classList.add(
    "flex-1",
    "py-10",
    "border-t",
    "border-gray-200"
  );
  nameComment.classList.add("font-medium", "text-gray-900");
  commentArea.classList.add(
    "prose",
    "prose-sm",
    "mt-4",
    "max-w-none",
    "text-gray-500"
  );
}

const button = document.querySelector("button");
button.addEventListener("click", submit(Event));
console.log(Event)

// button.removeEventListener("click", submit());

let errorMessage = document.getElementById("error-message");
function verifyForm() {
  if (firstName.value === "" || lastName.value === "" || message.value === "") {
    errorMessage.style.display = "bloc";
  } else {
    errorMessage.style.display = "none";
  }
}
