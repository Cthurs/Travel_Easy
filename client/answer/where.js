var draw = false;
var preX, preY;
var ctx;
var num = 3;
// window.location.reload();
window.onload = function(){
    var canvas = document.getElementById("can");
    ctx = canvas.getContext("2d");
    ctx.strokeStyle = "black";

    // 선 그리기 작업 ----------------------------------
    //canvas.onmousedown = func1; 같은 뜻이다
    canvas.addEventListener("mousedown", func1, false);
    canvas.addEventListener("mouseup", func2, false);
    canvas.addEventListener("mousemove", func3, false);

    //선 색상 팔레트에서 선택하기 ----------------------
    //var pals = document.getElementsByName("pal")[0];
    //alert(pals.length);
    document.getElementsByName("pal")[0].onclick = function(){
        funcColor(0);
    }
    document.getElementsByName("pal")[1].onclick = function(){
        funcColor(1);
    }
    document.getElementsByName("pal")[2].onclick = function(){
        funcColor(2);
    }
    document.getElementsByName("pal")[3].onclick = function(){
        funcColor(3);
    }
    //화면 초기화
    document.getElementById("clear").onclick = function() {
        //alert("clear");
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    //지우개
    document.getElementById("eraser").onclick = function(){
        ctx.strokeStyle = "white";
        num += 17;
    }

}
function func1(event){
    //console.log(event.offsetX, " ", event.offsetY);
    draw = true;
    preX = event.offsetX;  //page는 브라우저 좌표 기준 , offset는 캔버스 좌표 기준
    preY =event.offsetY;
}
function func2(event){
    draw = false;
}
function func3(event){
    if(draw == true){
        //console.log(event.offsetX, " ", event.offsetY);
        ctx.beginPath();
        ctx.moveTo(preX, preY); //해당 좌표로 이동
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.lineWidth = num;
        ctx.stroke(); //선이 그려짐
        preX = event.offsetX;
        preY = event.offsetY; // 이전 값을 다시 준다. 자유곡선
        ctx.closePath();
    }
}
function funcColor(i) {
    //alert("good");
    ctx.strokeStyle = document.getElementsByName("pal")[i].getAttribute("value");
    num = 3;
}