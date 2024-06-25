window.onload = function() {
    if(sessionStorage.getItem("Visitername")){
        document.getElementById("ALL").style.display="block";
    }else{
        alert("Visit Error 未登陆无法访问");
        window.location.href = "../HTML/index.html";
    }
}

function hasClass(element, className) {
    return element.classList.contains(className);
}

/*--------------------------------------------------------------------------*/

//及时删除防止占位
setTimeout(function(){
    var tt=document.getElementById("temp");
    tt.parentNode.removeChild(tt);
}, 2000); 


/*-------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------*/

function change1(){
    var boards = document.getElementsByClassName("board");
    for (var i = 0; i < boards.length; i++) {
        boards[i].style.zIndex = '-10';
    }
    var bod = document.getElementById("bod1");
    bod.style.zIndex = '10'; 

    //利用添加类会重新执行，让动画再次加载
    if(hasClass(bod,'ANIM')){
        bod.classList.remove('ANIM');
        console.log("?");
    }
    if(hasClass(bod,'ANIM2')){
        bod.classList.remove('ANIM2');
        
    }
    // 强制浏览器重新绘制
    void bod.offsetWidth;
    bod.classList.add('ANIM2');
}

function change2(){
    var boards = document.getElementsByClassName("board");
    for (var i = 0; i < boards.length; i++) {
        boards[i].style.zIndex = '-10';
    }
    var bod = document.getElementById("bod2");
    bod.style.zIndex = '10'; 

    //利用添加类会重新执行，让动画再次加载
    if(hasClass(bod,'ANIM')){
        bod.classList.remove('ANIM');
    }
    if(hasClass(bod,'ANIM2')){
        bod.classList.remove('ANIM2');
    }
    // 强制浏览器重新绘制
    void bod.offsetWidth;
    bod.classList.add('ANIM2');
}
function change3(){
    var boards = document.getElementsByClassName("board");
    for (var i = 0; i < boards.length; i++) {
        boards[i].style.zIndex = '-10';
    }
    var bod = document.getElementById("bod3");
    bod.style.zIndex = '10'; 

    //利用添加类会重新执行，让动画再次加载
    if(hasClass(bod,'ANIM')){
        bod.classList.remove('ANIM');
    }
    if(hasClass(bod,'ANIM2')){
        bod.classList.remove('ANIM2');
    }
    // 强制浏览器重新绘制
    void bod.offsetWidth;
    bod.classList.add('ANIM2');
}
function change4(){
    var boards = document.getElementsByClassName("board");
    for (var i = 0; i < boards.length; i++) {
        boards[i].style.zIndex = '-10';
    }
    var bod = document.getElementById("bod4");
    bod.style.zIndex = '10'; 

    //利用添加类会重新执行，让动画再次加载
    if(hasClass(bod,'ANIM')){
        bod.classList.remove('ANIM');
    }
    if(hasClass(bod,'ANIM2')){
        bod.classList.remove('ANIM2');
    }
    // 强制浏览器重新绘制
    void bod.offsetWidth;
    bod.classList.add('ANIM2');
}
function change5(){
    var boards = document.getElementsByClassName("board");
    for (var i = 0; i < boards.length; i++) {
        boards[i].style.zIndex = '-10';
    }
    var bod = document.getElementById("bod5");
    bod.style.zIndex = '10'; 

    //利用添加类会重新执行，让动画再次加载
    if(hasClass(bod,'ANIM')){
        bod.classList.remove('ANIM');
    }
    if(hasClass(bod,'ANIM2')){
        bod.classList.remove('ANIM2');
    }
    // 强制浏览器重新绘制
    void bod.offsetWidth;
    bod.classList.add('ANIM2');
}

/*-------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function() {
    var button1 = document.getElementById("bt1");
    button1.addEventListener("click", function() {
        window.location.href = "../HTML/history.html";
    });
    var button2 = document.getElementById("bt2");
    button2.addEventListener("click", function() {
        window.location.href = "../HTML/section.html";
    });
    var button3 = document.getElementById("bt3");
    button3.addEventListener("click", function() {
        window.location.href = "../HTML/research.html";
    });
    var button4 = document.getElementById("bt4");
    button4.addEventListener("click", function() {
        window.location.href = "../HTML/experiment.html";
    });
    var button5 = document.getElementById("bt5");
    button5.addEventListener("click", function() {
        window.location.href = "../HTML/more.html";
    });
});
