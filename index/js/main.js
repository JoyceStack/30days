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
    var spanDay01 = document.getElementById("day01"); // 找到元素
    var divInnerprogress01 = document.getElementById("innerprogress01");
    var nextDays = Number(spanDay01.innerHTML) + 1;

    spanDay01.innerHTML = nextDays;
    var percentage = nextDays / 0.3;

    var progressStyle = "width: " + percentage + "%";
    console.log(progressStyle);

    //document.getElementById("tr").className = "styleclass";//styleclass为新的属性值
    //document.getElementById("tr").setAttribute("class","styleclass");
    divInnerprogress01.setAttribute("style", progressStyle);
    if (nextDays < 9) {
        spanDay01.setAttribute("class", "badge badge-danger");
        divInnerprogress01.setAttribute("class", "progress-bar progress-bar-striped bg-danger");

    } else
    if (nextDays < 18) {
        spanDay01.setAttribute("class", "badge badge-warning");
        divInnerprogress01.setAttribute("class", "progress-bar progress-bar-striped bg-warning");
    } else {
        spanDay01.setAttribute("class", "badge badge-success");
        divInnerprogress01.setAttribute("class", "progress-bar progress-bar-striped bg-success");
    }
    if (nextDays >= 30) {
        alert("Congratulations!You have achieved the goal!");

    }

}


initial();