window.onload = function() {
    if(sessionStorage.getItem("Visitername")){
        document.getElementById("ALL").style.display="block";
    }else{
        alert("Visit Error 未登陆无法访问");
        window.location.href = "../HTML/index.html";
    }
}

let left = document.querySelector(".button-left")
let right = document.querySelector(".button-right")
let m = document.querySelectorAll(".min")
let simgs = document.querySelector(".simgs")
let index = 0
let time
//移位
function position(){
    simgs.style.left = (index * -100) + "%"
}
//下标增加
function add(){
    if( index>=m.length - 1){
        index=0
    }else{
        index++;
    }
}
//下标减小
function desc(){
    if(index<1){
        index=m.length-1
    }else{
        index--;
    }
}
//自动轮播
function timer(){
    time = setInterval(()=>{
        index++;
        desc()
        add()
        position()
    },3000)
}
//监测两个按钮的事件，实现切换
left.addEventListener("click",()=>{
    desc()
    position()
    clearInterval(time)
    timer()
})
right.addEventListener("click",()=>{
    add()
    position()
    clearInterval(time)
    timer()
})
for(let i=0;i<m.length;i++){
    m[i].addEventListener("click",() => {
        //点了谁就把下标换成谁
        index=i;
        position();
        clearInterval(time)
        timer()
    })
}
timer()
