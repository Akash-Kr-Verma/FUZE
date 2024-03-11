const movielist = document.querySelector(".carousel");
const arrowBins = document.querySelectorAll(".movie-latest .next, .movie-latest .back");
const firstCardWidth = movielist.querySelector(".item").offsetWidth;

let isDragging = false, startX, startScrollLeft;


arrowBtns.forEach(btn => {
   btn.addEventListener("click", () =>{
    movielist.scrollLeft = btn.id === "left" ? -firstCardWidth : firstCardWidth;
   })
});

const dragStart = (e) => {
    isDragging = true;
    movielist.classList.add("dragging");
    
    startX=e.pageX;
    startScrollLeft= movielist.scrollLeft;
}