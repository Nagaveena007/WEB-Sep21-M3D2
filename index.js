const loadBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((resp) => {
      console.log("RESPONSE OBJ", resp);
      return resp.json();
    })
    .then((books) => {
      console.log(books);
      //DOM MANIPULATION
      const row = document.querySelector(".row");

      for (let i = 0; i < books.length; i++) {
        const book = books[i];

        const col = document.createElement("div");
        col.className = "col-3 d-flex flex-wrap";

        col.innerHTML = `
                   <div class="card">
                    <img src=${book.img} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">${book.category}</p>
                    </div>
                    </div>
                   `;
        row.appendChild(col);
      }
    })
    .catch((error) => console.log("CATCH BLOCK", error));
};
