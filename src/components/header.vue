<template>
    <div :class="scrollMove" class="Warper  HeaderWarper">
      <div class="warp  header">

        <h1 class="pointer">
          <a @click='toSomePages(0)' class="lh pointer" href="#" title="子奇科技">
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
            // {
            //   text:'BizPay'
            // }
           

          ]">{{ii.text}}</li>
          <li @click='toSomePages(6)'  class="bgc color linkWe center fz14 pointer">联系我们</li>
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
      this.NavActive = id
      if(id == 0){
        this.$router.push('/')
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }
      if(id == 1){
        this.$router.push('/')
        document.documentElement.scrollTop = 363.6363525390625
        document.body.scrollTop = 363.6363525390625
      }
      if(id == 2){
        this.$router.push('/')
        document.documentElement.scrollTop = 1000
        document.body.scrollTop = 1000
      }
      if(id == 4){
        this.$router.push('/')
        document.documentElement.scrollTop = 1454
        document.body.scrollTop = 1454
      }
      if(id == 6){
        this.$router.push('/')
        document.documentElement.scrollTop = 3087.272705078125
        document.body.scrollTop = 3087.272705078125
      }
      if(id == 3){
        this.$router.push('/news')
      }else if(id == 0){
          this.$router.push('/')
      }
    }
  },
  mounted(){
    if(this.$route.name == 'news' || this.$route.name == 'newsDealis'){
       this.NavActive = 3
    }
    if(document.documentElement.scrollTop > 1){
         this.scrollMove = 'Headermove'
    }else{
       this.scrollMove = ''
    }
    window.onscroll = ()=>{
      // console.log(document.documentElement.scrollTop)
      if(document.documentElement.scrollTop > 1 || document.body.scrollTop > 1){
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
    z-index: 170;
    .header{
      height: 70px;
      >h1{
        margin-right: 200px;
        float: left;
        >a{
          background-image: url('/pc/img/headerLogo.png');
          background-repeat: no-repeat;
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
        >.NavActive{
          color: #6DEBD1;
        }
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
