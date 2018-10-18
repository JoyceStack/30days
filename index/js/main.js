function datechanged(value) {
    console.log(value);
}

function initial() {
    console.log("ok")
}

function submitClick(id) {
    console.log(`${id} click`)
}

function btnClick(id) {
    var spanDay = document.getElementById("day" + id); // 找到元素

    var nextDays = Number(spanDay.innerHTML) + 1;

    var divInnerProgress = document.getElementById("innerProgress" + id);
    var startDay = document.getElementById("startDay" + id);
    var endDay = document.getElementById("endDay" + id);

    spanDay.innerHTML = nextDays;
    var percentage = nextDays / 0.3;

    var progressStyle = "width: " + percentage + "%";
    console.log(progressStyle);

    //document.getElementById("tr").className = "styleclass";//styleclass为新的属性值
    //document.getElementById("tr").setAttribute("class","styleclass");
    divInnerProgress.setAttribute("style", progressStyle);
    if (nextDays < 9) {
        spanDay.setAttribute("class", "badge badge-danger");
        divInnerProgress.setAttribute("class", "progress-bar progress-bar-striped bg-danger");
        startDay.setAttribute("class", "badge badge-pill badge-danger");
        endDay.setAttribute("class", "badge badge-pill badge-danger");
    } else if (nextDays < 18) {
        spanDay.setAttribute("class", "badge badge-warning");
        divInnerProgress.setAttribute("class", "progress-bar progress-bar-striped bg-warning");
        startDay.setAttribute("class", "badge badge-pill badge-warning");
        endDay.setAttribute("class", "badge badge-pill badge-warning");

    } else {
        spanDay.setAttribute("class", "badge badge-success");
        divInnerProgress.setAttribute("class", "progress-bar progress-bar-striped bg-success");
        startDay.setAttribute("class", "badge badge-pill badge-success");
        endDay.setAttribute("class", "badge badge-pill badge-success");
    }
    if (nextDays >= 30) {
        alert("Congratulations!You have achieved the goal!");

    }

}


initial();