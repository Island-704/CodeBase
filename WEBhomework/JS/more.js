window.onload = function() {
    if(sessionStorage.getItem("Visitername")){
        document.getElementById("ALL").style.display="block";
    }else{
        alert("Visit Error 未登陆无法访问");
        window.location.href = "../HTML/index.html";
    }
}

function EnTer(){
    var gett=document.getElementById("iiii");
    if(gett.value=="2147483647"){
        window.location.href = "../HTML/entering2.html";
    }else{
        alert("Tips：克里斯腾的密电是 int 范围内的最大质数 2147483647 .");
    }
}