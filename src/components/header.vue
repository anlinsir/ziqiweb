<template>
    <div :class="scrollMove" class="Warper  HeaderWarper">
      <div class="warp  header">

        <h1 class="pointer">
          <a class="lh pointer" href="#" title="子奇科技">
            <span>子奇科技</span>
          </a>
        </h1>  
        <!-- header图标 -->
        <ul class="flexB ">
          <li @click='toSomePages(id)' :class="NavActive == id ? 'NavActive' : ''"  class="fz14 pointer color" v-for="(ii,id) in [
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
      msg: 'Welcome to Your Vue.js App',
      scrollMove:'',
      NavActive:0,
    }
  },
  methods:{
    toSomePages(id){
      if(id == 3){
        this.$router.push('/news')
      }else if(id == 0){
          this.$router.push('/')
      }
    }
  },
  mounted(){
    window.onscroll = ()=>{
      if(document.documentElement.scrollTop > 1){
        this.scrollMove = 'Headermove'
      }else{
        this.scrollMove = ''

      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Headermove{

  background-color: #232455;
}
.HeaderWarper{
    position: fixed;
    /*// position: sticky;*/
     transition: all 1s;
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
          transition: all .5s;
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
