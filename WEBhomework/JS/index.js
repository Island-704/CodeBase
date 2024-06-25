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

/*--------------------------------------------------------------------------------------------------*/

/* 切换表单，同时切换背景图片 */

function showRegisterForm() {
    document.getElementById("LOGIN").style.display = "none";
    document.getElementById("REGISTER").style.display = "block";
    document.querySelector(".background-image").style.backgroundImage = "url('../IMAGE/B.jpg')"; 
    
}

function showLoginForm() {
    document.getElementById("REGISTER").style.display = "none";
    document.getElementById("LOGIN").style.display = "block";
    document.querySelector(".background-image").style.backgroundImage = "url('../IMAGE/A.jpg')";
}

/*--------------------------------------------------------------------------------------------------*/

/*借鉴打字机模板，实现动态语句*/

document.addEventListener("DOMContentLoaded", function() {
    const typingContainer = document.getElementById('abc');
    
    /*以下代码以const和let代替var，作用域变更为块级*/

    /*数组保存打印语句*/
    const texts = ["欢 迎 访 问 莱 茵 生 命 官 网", "您 即 将 访 问 莱 茵 数 据 库"," 请 您 先 以 访 问 者 的 权 限 登 陆"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 200; // 设定的打字速度
  
    function type() {
      const currentText = texts[textIndex];
      const currentChar = currentText.substring(0, charIndex);
  
      typingContainer.textContent = currentChar;
        /* 分别处理当前打印的每一种情况 */
      if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        delay = 100;
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        delay = 50;
      } else if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        delay = 1000; // 完整显示一段时间
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = 250;
      }
  
      setTimeout(type, delay);
    }
  
    type();
  });
  
/*-----------------------------------------------------------------------------*/

/*登录注册*/
function reg() {
    var Name = document.getElementById("Name").value;
    var Pass1 = document.getElementById("Pass1").value;
    var Pass2 = document.getElementById("Pass2").value;
    if (Name == "") {
        alert("Name Empty 用户名为空");
        return false;
    }
    if (Pass1 == "" || Pass2 == "") {
        alert("Password Empty 密码为空");
        return false;
    }
    if (Pass1 != Pass2) {
        alert("Password Different 两次密码不一致！");
        return false;
    }
    /*保存账号*/
    localStorage.setItem(Name, Pass1);
    alert("Register Successfully 注册成功！");
    document.getElementById("REGISTER").style.display="none";
    document.getElementById("LOGIN").style.display="block";
}

function log() {
    var visitername = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    if (visitername == "" || pass == "") {
        alert("Input Empty 输入为空");
        return false;
    }
    // 检查用户名是否存在于 localStorage
    var storedPass = localStorage.getItem(visitername);
    if (storedPass) {
        // 检查密码是否匹配
        if (pass == storedPass) {
            sessionStorage.setItem("Visitername", visitername);
            window.location.href = "../HTML/entering.html";
        } else {
            alert("Password Error 密码错误");
        }
    } else {
        alert("Name No Found 该用户名未注册");
    }
}

/*-----------------------------------------------------------------------------*/

