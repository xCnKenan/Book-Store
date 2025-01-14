function init() {
  getFromLocalStorage();
  render();
  updateImg();
}

function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
  let myArr = JSON.parse(localStorage.getItem("books"));
  if (myArr == null) {
    books != myArr;
  } else {
    books = myArr;
  }
}

function render() {
  let contentRef = document.getElementById("content");
  for (let booksIndex = 0; booksIndex < books.length; booksIndex++) {
    let book = books[booksIndex];
    contentRef.innerHTML += getTemplate(booksIndex);
    for (
      let indexComment = 0;
      indexComment < book.comments.length;
      indexComment++
    ) {
      let commentField = `commentField_${booksIndex}`;
      let refComments = document.getElementById(commentField);
      let comment = book.comments[indexComment];
      refComments.innerHTML += getTemplateComments(comment);
    }
  }
  saveToLocalStorage();
}

function sendMessage(booksIndex) {
  let inputPlace = `inputField_${booksIndex}`;
  let inputFieldRef = document.getElementById(inputPlace);
  let inputRef = inputFieldRef.value;
  let commentField = `commentField_${booksIndex}`;
  let refComments = document.getElementById(commentField);
  let newComment = { name: "Default User", comment: inputRef };
  if (inputFieldRef.value <= 0) {
    inputFieldRef.value = "";
  } else {
    refComments.innerHTML += getTemplateCommentsNew(newComment);
    books[booksIndex].comments.push(newComment);
    inputFieldRef.value = "";
    refComments.scrollTop = refComments.scrollHeight;
  }
  saveToLocalStorage();
}

function likeButton(booksIndex) {
  let likePlace = `getlike_${booksIndex}`;
  let likeRef = document.getElementById(likePlace);
  let sum = books[booksIndex].likes;
  if (books[booksIndex].liked === true) {
    //get boolean of liked
    sum--;
    books[booksIndex].liked = false;
  } else if (books[booksIndex].liked === false) {
    sum++;
    books[booksIndex].liked = true;
  }
  books[booksIndex].likes = sum;
  likeRef.innerHTML = getLike(booksIndex, sum);
  updateImg();
}

function likeButtonDefault(booksIndex) {
  let likePlace = `getlike_${booksIndex}`;
  let likeRef = document.getElementById(likePlace);
  let sum = books[booksIndex].likes;
  if (books[booksIndex].liked === true) {
    sum--;
    books[booksIndex].liked = false;
  } else if (books[booksIndex].liked === false) {
    sum++;
    books[booksIndex].liked = true;
  }
  books[booksIndex].likes = sum;
  likeRef.innerHTML = getLikeDefault(booksIndex, sum);
  updateImg();
}

function updateImg() {
  for (let booksIndex = 0; booksIndex < books.length; booksIndex++) {
    let book = books[booksIndex];
    let imgRef = `likedImg_${booksIndex}`;
    let contentImg = document.getElementById(imgRef);
    if (book.liked === true) {
      contentImg.src = "assets/icons/heart-liked.png";
      contentImg.classList.add("liked");
      contentImg.classList.remove("notLiked");
    } else if (book.liked === false) {
      contentImg.src = "assets/icons/heart.png";
      contentImg.classList.remove("liked");
      contentImg.classList.add("notLiked");
    }
    saveToLocalStorage();
  }
}
