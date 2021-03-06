const string =`

.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before,.skin *::after{box-sizing: border-box;}

.skin{
    position: relative;
    background: #ffe600;
    min-height: 50vh;
}
.nose{
position: relative;
border: 10px solid black;
border-color:black transparent yellow transparent;
border-bottom: none;
width: 0px;
height: 0px;
left: 50%;
top: 145px;
margin-left: -10px;
z-index: 10;
}
@keyframes wave{
    0%{ transform: rotate(0deg);}
    33%{transform: rotate(15deg);}
    66%{transform: rotate(-15deg);}
    100%{transform: rotate(0deg);}
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 0.3s infinite linear
}
.yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 14px 14px 0 0;
    background-color:black
}
.eye{
    position: absolute;
    border:2px solid #000;
    width: 64px;
    height: 64px;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    border-radius: 50%;
    background: #2e2e2e;
}
.eye::before{
    content: '';
    display: block;
    width: 26px;
    height: 26px;
    position: relative;
    border: 2px solid #000;
    background: #ffffff;
    border-radius: 50%;
    position: relative;
    left: 10px;
    top: 2px;
}
.eye.right{
    transform: translateX(-100px);
}
.eye.left{
    transform: translateX(100px);
}
.mouth{
position:absolute;
width: 200px;
height: 200px;
left: 50%;
top: 170px;
margin-left: -100px;
}
.mouth .up{
   position: relative;
    top: -20px;
    z-index: 1;
}
.mouth .up .lip.left{
    width: 100px;
    height: 30px;
    border: 3px solid black;
    border-radius: 0 0 0 50px;
    position: relative;
    border-top-color: transparent;
    border-right-color: transparent;
    transform: rotate(-15deg) translateX(-53px);
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
}
.mouth .up .lip.right{
    width: 100px;
    height: 30px;
    border: 3px solid black;
    border-radius: 0 0 50px 0;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    transform: rotate(15deg) translateX(53px);
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
}
.mouth .up .lip.left::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    right: -6px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
}
.mouth .up .lip.right::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    left: -6px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
}
.mouth .down{    
    height: 160px;
    width: 100%;
    position: absolute;
    top: 5px;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 1px solid black;
    height: 1000px;
    width: 150px;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius:  0px 0 100px 100px;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    border: 1px solid #ff485f;
    height: 280px;
    width: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    bottom: -155px;
    background: #ff485f;
    border-radius: 150px;
}
.face{
    position: absolute;
    height: 88px;
    width: 88px;
    border: 1px solid red;
    left: 50%;
    top: 200px;
    z-index: 3;
    margin-left: -44px;
}
.face >img {
    position: absolute;
    top: 50%;   
    left: 50%;
}
.face.left >img{
    transform: rotateY(180deg);
    transform-origin: 0 0;
}
.face.left{
    transform: translateX(-170px);
    background: #ff0000;
    border-radius: 50%;
}
.face.right{
    transform: translateX(170px);
    background: #ff0000;
    border-radius: 50%;

}
`
export default string