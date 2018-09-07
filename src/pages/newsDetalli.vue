<template>
	<div class="Warper rb" >
		<Header />	
		<div v-show='loading' class="loading" :style="{height:fullHeight + 'px'}">
 			<div class="sk-wave">
		        <div class="sk-rect sk-rect1"></div>
		        <div class="sk-rect sk-rect2"></div>
		        <div class="sk-rect sk-rect3"></div>
		        <div class="sk-rect sk-rect4"></div>
		        <div class="sk-rect sk-rect5"></div>
		      </div>
 		</div>
		<div class="Topwarper" v-for="(ii,id ) in data">
 			<div class="Topwarp mw rb color">
 				<div class="shadowText color">
					<p class="back">最新资讯</p>
					<p class="forword">{{ii.title}}</p>
					<p class="subtext"><span>{{ii.created_at}}</span> &nbsp;&nbsp; | &nbsp;&nbsp; <span>{{ii.author}}</span></p>
				</div>
 			</div>
 		</div>

 		<div class="articleWarp  Warper" v-for="(ii,id ) in data">
			<div class="articlewarp warp rb">
				<div class="article rb">
		 			<div class="float bb rb">
		 				<span @click='returnNews' class="close pointer">
		 					<img src="/pc/img/close.png" alt="">
		 				</span>
		 				
		 				<div class="contentText" v-html='ii.content' v-highlight>
		 					
		 				</div>

		 				<div class="switchPage rb">
		 					<div style="color:rgba(124,124,124,1);" v-show='!last' class="Left  bb  rb grey">← 上一篇 已经是第一篇文章</div>
		 					<div  @click="changePage(0)"  v-show='last' class="Left  bb  rb  white">← 上一篇 {{last ? last.title : '已经是第一篇文章'}} </div>

		 					<div style="color:rgba(124,124,124,1);" v-show='!next' class="Right bb  rb grey">已经是最后一篇文章 下一篇  →</div>
		 					<div @click="changePage(1)"  v-show='next' class="Right white  bb rb ">{{next ? next.title : '已经是最后一篇文章'}} 下一篇 →</div>

		 				</div>
		 			</div>

		 			
		 		</div>

		 		

			</div>
		</div>
 		
		<div class="FooterSubWarp rb Warper">
 			<div class="warp rb">
 				<p class="fz14 center"> © 2014 成都子奇科技有限公司 蜀ICP备13026114号-7</p>
 			</div>
 		</div>


	</div>
</template>

<script>
	import Header from '../components/header'
	import axios from 'axios'
	export default{
		data(){
			return({
				pageNum:0,//第几页
				totlesNum:3,//总共几页,
				data:null,
				last:'',
				next:'',
				fullHeight:'',
				loading:true,
			})
		},
		methods:{
			returnNews(){//返回列表2
				this.$router.push('/news')
			},
			changePage(type){//切换文章
				if(type == 0){
					this.$router.push(`/newsDealis/${this.last.id}`)
					// axios.get(`${href}/api/post/${this.last.id}`)
					// 	.then(r=>{
					// 		console.log(r.data)
					// 		this.data = [r.data.data]
					// 		this.last = r.data.last
					// 		this.next = r.data.next
					// 		document.documentElement.scrollTop = 0
	  		// 				document.body.scrollTop = 0
					// 	})
				}else{
					this.$router.push(`/newsDealis/${this.next.id}`)

					// axios.get(`${href}/api/post/${this.next.id}`)
					// 	.then(r=>{
					// 		console.log(r.data)
					// 		this.data = [r.data.data]
					// 		this.last = r.data.last
					// 		this.next = r.data.next
					// 		document.documentElement.scrollTop = 0
	  		// 				document.body.scrollTop = 0
					// 	})
				}
			}
		},
		components:{
			Header
		},
		watch:{
			'$route'(){

				this.fullHeight = document.documentElement.clientHeight
			  	window.onresize = ()=>{
			  		this.fullHeight = document.documentElement.clientHeight
			  	}
			  	this.loading = true

				axios.get(`${href}/api/post/${this.$route.params.id}`)
					.then(r=>{
						this.loading = false
						document.documentElement.scrollTop = 0
	  					document.body.scrollTop = 0
						this.data = [r.data.data]
						this.last = r.data.last
						this.next = r.data.next
						setTimeout(()=>{
						var aaa = document.getElementsByTagName('img')
							for(var i in aaa){
								if(aaa[i].className != 'nones'){
									aaa[i].style.maxWidth = '100%'
								}
							}
						},1000)

				})
			}
		},
		created(){
		  	// if(!localStorage.loadingss || localStorage.loadingss != 1 ){
		  	// 	this.loading = true
		  	// }else{
		  	// 	this.loading = false
		  	// }
		  },
		mounted(){

			// setTimeout(()=>{
		 //  		this.loading = false
		 //  		localStorage.loadingss = 1
		 //  	},2000)
			this.fullHeight = document.documentElement.clientHeight
		  	window.onresize = ()=>{
		  		this.fullHeight = document.documentElement.clientHeight
		  	}

			setTimeout(()=>{
				this.loading = false
				var aaa = document.getElementsByTagName('img')
					for(var i in aaa){
						if(aaa[i].className != 'nones'){
							aaa[i].style.maxWidth = '100%'
						}
					}
				},1000)
					document.documentElement.scrollTop = 0
	  				document.body.scrollTop = 0
			// console.log(document.getElementsByClassName('float')[0].style)
			axios.get(`${href}/api/post/${this.$route.params.id}`)
				.then(r=>{
					this.data = [r.data.data]
					this.last = r.data.last
					this.next = r.data.next

			})


		}
	}

</script>


<style scoped lang="scss">
.loading{
	position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    background-color: #fff;
    justify-content: center;
	.sk-wave {
  margin: 40px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px; }
  .sk-wave .sk-rect {
    background-color: #1F2351;
    height: 100%;
    width: 6px;
    display: inline-block;
    -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
            animation: sk-waveStretchDelay 1.2s infinite ease-in-out; }
  .sk-wave .sk-rect1 {
    -webkit-animation-delay: -1.2s;
            animation-delay: -1.2s; }
  .sk-wave .sk-rect2 {
    -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s; }
  .sk-wave .sk-rect3 {
    -webkit-animation-delay: -1s;
            animation-delay: -1s; }
  .sk-wave .sk-rect4 {
    -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s; }
  .sk-wave .sk-rect5 {
    -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s; }
	@-webkit-keyframes sk-waveStretchDelay {
	  0%, 40%, 100% {
	    -webkit-transform: scaleY(0.4);
	            transform: scaleY(0.4); }
	  20% {
	    -webkit-transform: scaleY(1);
	            transform: scaleY(1); } }
	@keyframes sk-waveStretchDelay {
	  0%, 40%, 100% {
	    -webkit-transform: scaleY(0.4);
	            transform: scaleY(0.4); }
	  20% {
	    -webkit-transform: scaleY(1);
	            transform: scaleY(1); } }
}
	
	.Warper{
		.Topwarper{
			height: 436px;
			background-image: url('/pc/img/otherBg.png');
			background-repeat: no-repeat;
			background-position: center; 
			>.Topwarp{
				position: relative;
				height: 436px;
				color: var(--color);
				overflow: hidden;
				.shadowText{
					text-align: center;
					margin-top: 150px;
					>.back{
						color:rgba(73,76,137,.4);
						position: absolute;
						left: 0;
						right: 0;
						margin: auto;
						z-index: 1;
					}
					>.forword{
						color:#fff;
						font-weight: normal;
						position: relative;
						z-index: 2;
					 }
					 >.subtext{
						position: absolute;
						left: 0;
						top:20px;
						right: 0;
						font-size:16px;
						font-size:16px;
						font-family:MicrosoftYaHei;
						font-weight:400;
						color:rgba(170,168,205,1);
						line-height:72px;
					 }
					margin-bottom: 19px;
				}
				
			}
			
		}
		>.articleWarp{
			>.articlewarp{
				margin-bottom: 100px;
				>.article{
					width: 100%;
					min-height: 500px;
					position: relative;
					>.float{
						min-height: 500px;
						width: 100%;
						top:-150px;
						padding: 43px 47px 0;
						min-height: 500px;
						background-color: #fff;
						margin-bottom: 88px;
						border-radius:10px;
						box-shadow:0px 7px 79px 0px rgba(45,47,93,0.15);
						transform: translateY(-120px);
						>.close{
							width: 30px;
							height: 30px;
							position: absolute;

							right: 0;
							top:-120px;
							z-index: 3;
							>img{
								width: 100%;
								height: 100%;
							}
						}
						>img{
							margin-bottom: 66px;
						}
						>.contentText{
							min-height: 1000px;
							font-size:16px;
							font-family:MicrosoftYaHei;
							font-weight:400;
							color:rgba(51,51,51,1);
							line-height:36px;
							>img{
								width: 100%;
							}
						}
						.switchPage{
							width: 100%;
							position: absolute;
							height: 54px;
							margin-left: -46px;
							margin-top: 84px;

							>.Left,.Right{
								width: 530px;
								height: 54px;
								border-radius:27px;
								background:rgba(78,196,195,1);
								cursor: pointer;
								line-height: 54px;
								padding: 0 30px;
								&:active{
									background:rgba(78,196,195,0.8);	
								}

							}
							>.Right{
								text-align: right;
							}
							>.grey{
								background:rgba(229,229,229,1);
								cursor: no-drop;
								&:active{
									background:rgba(229,229,229,1);		
								}
							}
						}
					}
					

				}

			}
		}
		>.FooterSubWarp{
			height: 100px;
			background:#0D0F26;
			margin-top: 103px;
			>.warp{
				height: 100px;
				>p{
					line-height: 100px;
					color:rgba(255,255,255,1);
				}

			}
		}
	}
</style>