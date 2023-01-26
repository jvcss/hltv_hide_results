/*var parent = document.querySelectorAll(".a-reset");

parent.forEach((tableData) => {
  tableData.addEventListener("mouseover", function (e) {
    if (e.target && e.target.closest("table>tbody>tr>td.result-score")) {
      e.target.querySelectorAll("span").forEach((spam) => {
        spam.classList.remove("score-won");
        spam.classList.remove("score-lost");
      });
    }
  });

  tableData.addEventListener("mouseout", function (e) {
    if (e.target && e.target.closest("table>tbody>tr>td.result-score")) {
      e.target.querySelectorAll("span").forEach((spam) => {
        spam.classList.add("score-won");
        spam.classList.add("score-lost");
      });
    }
  });
});*/
/*
var td = document.querySelectorAll(".result-score");

var a_td = document.querySelectorAll(".a-reset");

a_td.forEach((tableData) => {
  tableData.addEventListener("mouseover", function (e) {
    if (e.target && e.target.closest("table>tbody>tr>td.result-score")) {
      console.log(
        "result-score ! > ",
        e.target.closest("table>tbody>tr>td.result-score")
      );
    }
  });
  tableData.addEventListener("mouseout", function (e) {
    if (e.target && e.target.closest("table>tbody>tr>td")) {
      console.log("OUT ! > ", e.target);
    }

    //e.target.classList.add("result-score");
    //td[i].style.visibility = "hidden!important";
  });
});


for (let i = 0; i < td.length; i++) {

  a_td[i]
  .addEventListener("mouseover", function () {

    td[i].classList.remove("result-score");

    td[i].style.width = "40px";
    td[i].style.fontWeight = "700";
    td[i].style.textAlign = "center";
    td[i].style.paddingLeft = "10px";
    td[i].style.paddingRight = "10px";
    //td[i].style.visibility = "visible";
    //console.log("TD >>> ", td[i]);
  });

  a_td[i]
  .addEventListener("mouseout", function () {
    td[i].classList.add("result-score");
    //td[i].style.visibility = "hidden!important";
  });
}
*/
