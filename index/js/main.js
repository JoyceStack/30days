//日期控件选择日期
function datechanged(value) {
    console.log(value);
}

//页面初始化
function initial() {

}

//点击确认按钮逻辑
function btnClick(id) {
    var data = readData();
}

//读取当前已打卡数据 
//NOTE: 1
function readData() {
    var recordsString = window.localStorage.records; // string，将localstorge里的数据读出来
    if (recordsString) {
        //在数据不为空时,转化为数组返回
        var data = JSON.parse(recordsString);
        return data;
    } else {
        //数据为空，直接创建一个有默认值数组返回
        var defaultData = [{
            startDay: "",
            currentDay: "",
            days: 0
        }, {
            startDay: "",
            currentDay: "",
            days: 0
        }, {
            startDay: "",
            currentDay: "",
            days: 0
        }, {
            startDay: "",
            currentDay: "",
            days: 0
        }, {
            startDay: "",
            currentDay: "",
            days: 0
        }];
        return defaultData;
    }


}

//更新数据到界面
function updateToUI(data) {
    

}

//设置日期控件为今天
function setDateToday() {

}

// 在界面增加打卡数据
function modifyData() {

}

//写入数据到数据库
function saveData(data) {
    var dataString = JSON.stringify(data);
    window.localStorage.records = dataString;
}

// initial();
test();

// TEST:  functions
function test() {
    var data = readData();
    console.log(data);
    data[0].startDay = "1011";
    saveData(data);
    data = readData();   
    data = readData();
    console.log(data);
}

function btnClick2(id) {
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