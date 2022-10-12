let apiKey = "157ebf38c83e0a07e56607df955d91bb";
let col = document.getElementById("movie-list")


let getData = async () => {
    let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=1`)
    let movie = await response.json() 
    let print=""
    movie.results.forEach(item => {
        console.log(item)
        print += 

        `<div class = "col-md-4"> 
        <div class="card mb-4"> 
        <img class="card-img-top" src="https://image.tmdb.org/t/p/original/${item.poster_path}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.vote_average}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">${item.release_date}</small>
          </div>
          </div>
          </div>`
        col.innerHTML = print
    }) 
}

getData()


let form = document.getElementsByClassName("d-flex")[0];
let input = document.getElementsByClassName("form-control")[0];


let dataSearch = async (inputUser) => {
  
    let response = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${inputUser}&page=1`)
    let movie = await response.json()
    let print = ""
    movie.results.forEach(item => {
              console.log(item)
              print += 
              `<div class = "col-md-4"> 
              <div class="card mb-5" > 
              <img class="card-img-top" src="https://image.tmdb.org/t/p/original/${item.poster_path}" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.vote_average}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">${item.release_date}</small>
                </div>
                </div>
                </div>`
              col.innerHTML = print
          }) 
  } 

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputUser = input.value;
  dataSearch(inputUser)
  form.reset();
} ); 