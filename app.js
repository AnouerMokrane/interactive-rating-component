let ratingEle = document.querySelectorAll("ul li");
const btn = document.querySelector(".btn");
const ratingState = document.querySelector(".rating-state");
const thankState = document.querySelector(".thank-state");
let ratingResult = document.querySelector(".result");

ratingEle = Array.from(ratingEle);

ratingEle.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    // remove active class from all elemenets
    ratingEle.forEach((ele) => {
      ele.classList.remove("active");
    });
    // add active class to current element
    e.currentTarget.classList.add("active");

    if ((ele.className = "active")) {
      ratingResult.innerHTML = `You selected ${ele.textContent} out of ${ratingEle.length}`;
    }
  });
});

btn.addEventListener("click", () => {
  ratingState.classList.add("hide");
  thankState.classList.add("show");
});
