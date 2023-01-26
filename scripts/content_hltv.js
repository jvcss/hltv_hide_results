document.addEventListener("DOMContentLoaded", function () {
  //save the value of the checkbox
  document
    .getElementById("checkboxHLTV")
    .addEventListener("change", function () {
      chrome.storage.sync.set({ checkboxValue: this.checked }, function () {
        console.log("Value saved: " + this.checked);
      });
    });
});
document.querySelectorAll(".blind-icon").forEach(function (el) {
    
console.log("TD > > ", td);
  el.addEventListener("click", function () {
    var td = document.getElementsByClassName("result-score");
    for (let i = 0; i < td.length; i++) {
      td[i].classList.toggle("hide");
    }
  });
});
