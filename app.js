var slide_index = 1;
slidesDisplay(slide_index);
function nextSlide(a) {
slidesDisplay(slide_index += a);
}
function currentSlide(a) {
slidesDisplay(slide_index = a);
}
function slidesDisplay(a) {
var i;
var slides = document.getElementsByClassName("showSlider");
if (a > slides.length) { slide_index = 1 }
if (a < 1) { slide_index = slides.length }
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slides[slide_index - 1].style.display = "block";
}
