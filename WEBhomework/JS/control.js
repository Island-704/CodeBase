window.onload = function() {
    if(sessionStorage.getItem("Visitername")){
        document.getElementById("ALL").style.display="block";
    }else{
        alert("Visit Error 未登陆无法访问");
        window.location.href = "../HTML/index.html";
    }
}

/*---------------------------------------------------------------------*/

/* 星空粒子数量 */
var starCnt = 400;
/* 动画时长 */
var maxTime = 30;
var universe = document.getElementById("universe");
var w = window;
var width = w.innerWidth;
var height = w.innerHeight;

/* 生成 400 个粒子，并无限循环播放 */
for (var i = 0; i < starCnt; i++) {
    var ypos = Math.round(Math.random() * height);
    var stat = document.createElement("div");
    var speed = 1000 * (Math.random() * maxTime + 1);

    /* 设置粒子属性，颜色并加入 universe */
    stat.setAttribute("class", "stat" + (3 - Math.floor(speed / 1000 / 8)));
    stat.style.background = "#ffffff";
    universe.appendChild(stat);

    /* 设置动画 */
    stat.animate(
        [
            // 开始
            {
                transform: "translate3d(" + width + "px," + ypos + "px,0)"
            },
            // 结束
            {
                transform: "translate3d(-" + Math.random() * 256 + "px," + ypos + "px,0)"
            }
        ],
        /* 设置动画属性 */
        {
            delay: Math.random() * -speed,
            duration: speed,
            /* iterations 让动画无限循环 */
            iterations: 1000
        }
    );
}

var nnow=1;
/*--------------------------------------------------------------------------------------------------*/
var p1ro=0;
function cha1(){
    if(p1ro==-1){
        return;
    }else if(p1ro==0){
        p1ro++;
        document.getElementById("pro11").style.backgroundColor="rgba(186, 255, 95, 0.8)";
        document.getElementById("con11").style.opacity="1";
    }else if(p1ro==1){
        p1ro++;
        document.getElementById("pro12").style.backgroundColor="rgba(186, 255, 95, 0.8)";
    }else if(p1ro==2){
        p1ro++;
        document.getElementById("pro13").style.backgroundColor="rgba(186, 255, 95, 0.8)";
        document.getElementById("con12").style.opacity="1";
    }
    if(p1ro==3){
        document.getElementById("put1").innerHTML="Finish";
        document.getElementById("put1").style.backgroundColor="rgb(150, 150, 150)"
        p1ro=-1;
    }
}
function show1(){
    /*改4*/
    for(var i=1;i<=4;i++){
        document.getElementById("bod"+i).style.opacity=0;
        document.getElementById("bod"+i).style.zIndex=-999;
    }
    document.getElementById("bod"+1).style.zIndex=500;
    document.getElementById("bod"+1).style.opacity=1;
    /*复原*/
    document.getElementById("ch"+nnow).style.width="180px";
    document.getElementById("ch"+nnow).style.left="130px";
    document.getElementById("ch"+nnow).style.backgroundColor="rgba(255, 255, 255, 0.5)";
    /*修改*/
    document.getElementById("ch"+1).style.width="220px";
    document.getElementById("ch"+1).style.left="150px";
    document.getElementById("ch"+1).style.backgroundColor="rgba(255, 182, 55, 0.863)";
    nnow=1;
}


/*--------------------------------------------------------------------------------------------------*/
var p2ro=0;
function cha2(){
    if(p2ro==-1){
        return;
    }else if(p2ro==0){
        p2ro++;
        document.getElementById("pro21").style.backgroundColor="rgba(186, 255, 95, 0.8)";
        document.getElementById("con21").style.opacity="1";
    }else if(p2ro==1){
        p2ro++;
        document.getElementById("pro22").style.backgroundColor="rgba(186, 255, 95, 0.8)";
    }else if(p2ro==2){
        p2ro++;
        document.getElementById("pro23").style.backgroundColor="rgba(186, 255, 95, 0.8)";
        document.getElementById("con22").style.opacity="1";
    }
    if(p2ro==3){
        document.getElementById("put2").innerHTML="Finish";
        document.getElementById("put2").style.backgroundColor="rgb(150, 150, 150)"
        p2ro=-1;
    }
}
function show2(){
    /*改4*/
    for(var i=1;i<=4;i++){
        document.getElementById("bod"+i).style.opacity=0;
        document.getElementById("bod"+i).style.zIndex=-999;
    }
    document.getElementById("bod"+2).style.zIndex=500;
    document.getElementById("bod"+2).style.opacity=1;
    /*复原*/
    document.getElementById("ch"+nnow).style.width="180px";
    document.getElementById("ch"+nnow).style.left="130px";
    document.getElementById("ch"+nnow).style.backgroundColor="rgba(255, 255, 255, 0.5)";
    /*修改*/
    document.getElementById("ch"+2).style.width="220px";
    document.getElementById("ch"+2).style.left="150px";
    document.getElementById("ch"+2).style.backgroundColor="rgba(255, 182, 55, 0.863)";
    nnow=2;
}

/*--------------------------------------------------------------------------------------------------*/
var p3ro=0;
function cha3(){
    if(p3ro==-1){
        return;
    }else if(p3ro==0){
        p3ro++;
        document.getElementById("pro31").style.backgroundColor="rgba(186, 255, 95, 0.8)";
        document.getElementById("con31").style.opacity="1";
    }else if(p3ro==1){
        p3ro++;
        document.getElementById("pro32").style.backgroundColor="rgba(186, 255, 95, 0.8)";
    }else if(p3ro==2){
        p3ro++;
        document.getElementById("pro33").style.backgroundColor="rgba(186, 255, 95, 0.8)";
        document.getElementById("con32").style.opacity="1";
    }
    if(p3ro==3){
        document.getElementById("put3").innerHTML="Finish";
        document.getElementById("put3").style.backgroundColor="rgb(150, 150, 150)"
        p3ro=-1;
    }
}
function show3(){
    /*改4*/
    for(var i=1;i<=4;i++){
        document.getElementById("bod"+i).style.opacity=0;
        document.getElementById("bod"+i).style.zIndex=-999;
    }
    document.getElementById("bod"+3).style.zIndex=500;
    document.getElementById("bod"+3).style.opacity=1;
    /*复原*/
    document.getElementById("ch"+nnow).style.width="180px";
    document.getElementById("ch"+nnow).style.left="130px";
    document.getElementById("ch"+nnow).style.backgroundColor="rgba(255, 255, 255, 0.5)";
    /*修改*/
    document.getElementById("ch"+3).style.width="220px";
    document.getElementById("ch"+3).style.left="150px";
    document.getElementById("ch"+3).style.backgroundColor="rgba(255, 182, 55, 0.863)";
    nnow=3;
}

/*--------------------------------------------------------------------------------------------------*/
var p4ro=0;
function cha4(){
    if(p4ro==-1){
        return;
    }else if(p4ro==0){
        p4ro++;
        document.getElementById("pro41").style.backgroundColor="rgba(186, 255, 95, 0.8)";
        document.getElementById("con41").style.opacity="1";
    }else if(p4ro==1){
        p4ro++;
        document.getElementById("pro42").style.backgroundColor="rgba(186, 255, 95, 0.8)";
    }else if(p4ro==2){
        p4ro++;
        document.getElementById("pro43").style.backgroundColor="rgba(186, 255, 95, 0.8)";
        document.getElementById("con42").style.opacity="1";
    }
    if(p4ro==3){
        document.getElementById("put4").innerHTML="Finish";
        document.getElementById("put4").style.backgroundColor="rgb(150, 150, 150)"
        p4ro=-1;
    }
}
function show4(){
    /*改4*/
    for(var i=1;i<=4;i++){
        document.getElementById("bod"+i).style.opacity=0;
        document.getElementById("bod"+i).style.zIndex=-999;
    }
    document.getElementById("bod"+4).style.zIndex=500;
    document.getElementById("bod"+4).style.opacity=1;
    /*复原*/
    document.getElementById("ch"+nnow).style.width="180px";
    document.getElementById("ch"+nnow).style.left="130px";
    document.getElementById("ch"+nnow).style.backgroundColor="rgba(255, 255, 255, 0.5)";
    /*修改*/
    document.getElementById("ch"+4).style.width="220px";
    document.getElementById("ch"+4).style.left="150px";
    document.getElementById("ch"+4).style.backgroundColor="rgba(255, 182, 55, 0.863)";
    nnow=4;
}