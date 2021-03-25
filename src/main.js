let html = document.querySelector('#demo');  //在js中获取名为demo的容器
let style = document.querySelector('#style')
let string = `/*你好，我是一名前端新人
接下来我要加样式了
我要加的样式是*/
body{
    color: green;
}
/*然后，我还要准备一个div*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我要把这个div变成一个八卦
首先要让它变成一个圆圈
并加上阴影*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
是一黑一白的*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*接下来还要弄两个神秘的东西*/
#div1::before{
    width:100px;
    height:100px;
    background:#000;
    left:50%;
    transform:translate(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    background:#fff;
    bottom:0%;
    left:50%;
    transform:translate(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 99%);
}
`
let string2 = ""
let n = -1
let step = () =>{
    setTimeout(() =>{
    n = n + 1;
    if(string[n] === "\n"){
        string2 = string2 + '<br>';
    }else if(string[n] === " "){
        string2 = string2 + '&nbsp';
    }
    else
    {
    string2 = string2 + string[n];
    }
    html.innerHTML = string2
    style.innerHTML = string.substring(0,n);
    window.scrollTo(0,99999);
    demo.scrollTo(0,99999);
    if(n < string.length - 1){
        step();
    }else{}
},10)
}
step()