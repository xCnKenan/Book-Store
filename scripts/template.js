function getTemplate(booksIndex) {
  return `<div class="template">
    
                    <div class="title">
                        <h1>${books[booksIndex].name}</h1>
                    </div>
    
                    <div class="imgSection">
                        <img src="assets/img/owl.png" alt="">
                    </div>
    
                    <div class="priceLikeSection">
                        <p class="priceTag">${books[booksIndex].price}€</p>
    
                        <div id="getlike_${booksIndex}" class="likeSection">
                            <p>${books[booksIndex].likes}</p>
                            <img id="likedImg_${booksIndex}" class="notLiked" onclick="likeButton(${booksIndex})" src="assets/icons/heart.png" alt="">
                        </div>
                    </div>
    
                    <div class="infoBook" id="infoBook">
                        <table>
                            <tbody>
                            <tr>
                                <td>Author</td>
                                <td>: ${books[booksIndex].author}</td>
                            </tr>
                            <tr>
                                <td>Erscheinungsjahr</td>
                                <td>: ${books[booksIndex].publishedYear}</td>
                            </tr>
                            <tr>
                                <td>Genre</td>
                                <td>: ${books[booksIndex].genre}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
    
                    <div id="commentSection" class="commentSection">
                        <h2>Kommentare</h2>
                            <div class="commentField" id="commentField_${booksIndex}">
                              
                            </div>
                    </div>

                        <div class="commentType">
                            <input id="inputField_${booksIndex}" type="text" placeholder="Kommentar für ${books[booksIndex].author} hinzufügen ...">
                            <img onclick="sendMessage(${booksIndex})" src="assets/icons/send.png" alt="send">
                        </div>
                </div>`;
}

function getTemplateComments(comment) {
  return `<table >
                  <tbody>
                      <tr>
                          <td class="userTitle">${comment.name}</td>
                          <td>${comment.comment}</td>
                      </tr>
                  </tbody>
              </table>`;
}

function getTemplateCommentsNew(newComment) {
  return `<table >
                  <tbody>
                      <tr>
                          <td class="userTitle">${newComment.name}</td>
                          <td>${newComment.comment}</td>
                      </tr>
                  </tbody>
              </table>`;
}

function getLike(booksIndex, sum) {
  let heartImage = books[booksIndex].liked ? "heart-liked.png" : "heart.png";
  return `<p id="getlike_${booksIndex}">${sum}</p>
            <img id="likedImg_${booksIndex}" class="liked" onclick="likeButtonDefault(${booksIndex})" src="assets/icons/${heartImage}" alt="">`;
}

function getLikeDefault(booksIndex, sum) {
  let heartImage = books[booksIndex].liked ? "heart-liked.png" : "heart.png";
  return `<p id="getlike_${booksIndex}">${sum}</p>
            <img id="likedImg_${booksIndex}" class="notLiked" onclick="likeButton(${booksIndex})" src="assets/icons/${heartImage}" alt="">`;
}