window.onload = function() {
    if(sessionStorage.getItem("Visitername")){
        document.getElementById("ALL").style.display="block";
    }else{
        alert("Visit Error 未登陆无法访问");
        window.location.href = "../HTML/index.html";
    }
}