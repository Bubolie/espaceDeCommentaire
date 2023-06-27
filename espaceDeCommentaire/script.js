let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let message = document.getElementById("message");

// Creation de l'architecture à inclure

let commentBox = document.createElement("div");
let commentBorderBox = document.createElement("div");
let nameComment = document.createElement("h3");
let commentArea = document.createElement("div");
let comment = document.createElement("p");

let commentBoxList = document.getElementById("comment-list");
commentBoxList.appendChild(commentBox);
commentBox.appendChild(commentBorderBox);
commentBorderBox.appendChild(nameComment);
let nameCommentTexte = document.createTextNode("Name");
nameComment.appendChild(nameCommentTexte);
commentBorderBox.appendChild(commentArea);
commentArea.appendChild(comment);
let commentText = document.createTextNode("Commentary");
comment.appendChild(commentText);

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
  )
  