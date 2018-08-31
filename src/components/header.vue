<template>
    <div class="Warper  HeaderWarper">
      <div class="warp  header">

        <h1 class="pointer">
          <a class="lh pointer" href="#" title="子奇科技">
            <span>子奇科技</span>
          </a>
        </h1>  
        <!-- header图标 -->
        <ul class="flexB ">
          <li class="fz14 pointer color" v-for="(ii,id) in [
            {
              text:'首页'
            },
            {
              text:'技术服务'
            },
            {
              text:'业务内容'
            },
            {
              text:'最新资讯'
            },
            {
              text:'案例展示'
            },
            {
              text:'BizPay'
            }
           

          ]">{{ii.text}}</li>
          <li class="bgc color linkWe center fz14 pointer">联系我们</li>
        </ul>


      </div>


    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.HeaderWarper{
    position: fixed;
    // position: sticky;
    top:0;
    z-index: 2;
    .header{
      height: 70px;
      >h1{
        margin-right: 200px;
        float: left;
        >a{
          background-image: url('/static/img/headerLogo.png');
          transform: translateY(12px);
          width: 162px;

          >span{
            visibility: hidden;
          }
        }
      }
      >ul{
        width: 720px;
        height: 70px;
        line-height: 70px;
        float: left;
        >li{
          color: var(--color);
          &:hover{
            color: #6c6792;
          }
        }
        >.linkWe{
         width:97px;
         height:30px;
         border-radius:15px;
         line-height: 30px;
         transform: translateY(18px);

        }
      }
    }
  }
</style>
