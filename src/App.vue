<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
  font-family: MicrosoftYaHei, 'Open Sans', sans-serif ,PingFang SC,Helvetica Neue,Hiragino Sans GB,Microsoft Yahei,WenQuanYi Micro Hei,sans-serif;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
html,body{
  width: 100%;
  height: 100%;
}
.color{
  --color: #fff;
    
}
.white{
  color: #fff;
}
.bgc{
  --bgc: -webkit-linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1)); /* Firefox 3.6 - 15 */
    background: linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1)); /* 标准的语法（必须放在最后） */
}
.center{
  text-align: center;
}
.pointer{
  cursor: pointer;
}
.transition{
      transition: all .5s;
}
.rb{
  border: 0px solid transparent;
}
.lh{
  display: inline-block;
}
.bb{
  box-sizing: border-box;
}
.flex{
    display: flex;
  
}
.flexA{
    display: flex;
    justify-content: space-around;
}
.flexB{
  display: flex;
  justify-content: space-between;
}
.fz12{
  font-size: 12px;
}
.fz14{
  font-size: 14px;
}
.fz16{
  font-size: 16px;
}
.fz18{
  font-size: 18px;
}
.fz20{
  font-size: 20px;
}
.fwb{
  font-weight: bold;
}
.fw400{
  font-weight: 400;
}
.img{
  background-image: url('/pc/img/server.png');
}
.box{
  border-radius: 50%;
}
canvas {
  position: absolute;
  width: 100%;
  height: 100%;

}

ul li{
  list-style: none;
}
a{
  color: #000;
  text-decoration: none;
}
input , button , textarea{
  outline: none;
  background-color: #fff;
  border:none;
}

.my-bullet-active{
  background:rgba(44,40,96,1) !important;
  opacity: 1 !important;
}

.Warper{
  width: 100%;
  min-height: 20px;
  
  >.warp{
    width: 1100px;
    min-height: 20px;
    margin: auto;

  }
}

.Topwarper{
  width: 100%;
}
.mw{
  width: 1100px;
  margin: auto;
}

.Bigtitle{
  font-size: 48px;

}
.positionCenter{
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.shadowText{
  color: var(--color);
  position: relative;
    margin-top: 122px;
    margin-bottom: 77px;
  >.back{
    position: absolute;
    bottom: 0;
    font-size: 60px;
    z-index: -1;
    font-weight: bold;
    color:rgba(73,76,137,0.4);
  }
  >.forword{
    font-weight: bold;
    font-size: 32px;

  }
  
}


.Left{
  float: left;
}
.Right{
  float: right;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.flipInY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
}
@keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

.flipOutY {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipOutY;
  animation-name: flipOutY;
}




@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn  ;
}



@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}



</style>
