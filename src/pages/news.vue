<template>
	<div class="NewWarp Warper rb">
		<Header />
		<div class="Topwarper">
 			<div class="Topwarp mw rb color">
 				<div class="shadowText color">
					<p class="back">最新资讯</p>
					<p class="forword">最新资讯</p>
					<p class="subtext">行业一手消息，最先知道</p>
				</div>
 			</div>
 		</div>

 		<div class="newsList rb Warper">
 			<div class="warp rb">
 				<ul class="flexB">
 					
 					<li @click="toDealis(ii.id)" class="rb " v-for="(ii,id) in newList">
 						<div class="top rb">
 							<img :src="ii.cover_src ? ii.cover_src : '/pc/img/M_pic6.png'" alt="">
 							<span class="lh fz12 white center ">{{ii.created_at.slice(0,10)}}</span>
 						</div>

 						<div class="bom center">
 							<p class="title fz18 fwb ">{{ii.title}}</p>
 							<button>阅读文章</button>
 						</div>
 					</li>
 				</ul>

 				<div class="switchPage rb">
 					<div style="color:rgba(124,124,124,1);" v-show='pageNum == 1' class="Left  bb  rb grey">← 上一页 </div>
 					<div  @click="changePage(0)"  v-show='pageNum != 1' class="Left  bb  rb  white">← 上一页 </div>

 					<div style="color:rgba(124,124,124,1);" v-show='pageNum == totlesNum ' class="Right bb  rb grey">下一页  →</div>
 					<div @click="changePage(1)"  v-show='pageNum != totlesNum  ' class="Right white  bb rb ">下一页  →</div>

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
				totlesNum:3,//总共几页
				newList:[]
			})
		},
		methods:{
			toDealis(id){//去详情页面
				this.$router.push(`/newsDealis/${id}`)

			},
			changePage(type){
				if(type == 0){
					this.pageNum --
					axios.get(`${href}/api/post?&page=${Number(this.pageNum)}&limit=6`)
						.then(r=>{
							this.newList = r.data.list
							this.totlesNum = Math.ceil(r.data.count/6)	
							this.pageNum =r.data.current
							document.documentElement.scrollTop = 0
	  						document.body.scrollTop = 0
						})
				}else{
					this.pageNum ++
					axios.get(`${href}/api/post?&page=${Number(this.pageNum)}&limit=6`)
						.then(r=>{
							this.newList = r.data.list
							this.totlesNum = Math.ceil(r.data.count/6)	
							this.pageNum =r.data.current
							document.documentElement.scrollTop = 0
	  						document.body.scrollTop = 0
						})

					
				}
			}
		},
		components:{
			Header
		},
		mounted(){
			document.documentElement.scrollTop = 0
	  						document.body.scrollTop = 0
			axios.get(`${href}/api/post?&page=1&limit=6`)
				.then(r=>{
					this.newList = r.data.list
					this.totlesNum = Math.ceil(r.data.count/6)	
					this.pageNum =r.data.current
			})
		}

	}
</script>


<style scoped lang="scss">
	.NewWarp{
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
						font-family:MicrosoftYaHei;
						font-weight:400;
						color:rgba(170,168,205,1);
						line-height:72px
					 }
					margin-bottom: 19px;
				}
				
			}
			
		}
		>.newsList{
			>.warp{
				min-height: 1000px;
				position: relative;
				>ul{
					width: 100%;
					flex-wrap: wrap;
					position: absolute;
					top:-150px;
					>li{
						width: 335px;
						height: 431px;
						background-color: #fff;
						margin-bottom: 82px;
						border-radius:10px;
						transition:all .5s;
						box-shadow:0px 7px 79px 0px rgba(45,47,93,0.25);
						&:hover {
							margin-top: -20px;
						}
						&:hover button{
							color: #fff !important;
							background:linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1)) !important;

						}
						>.top{
							position: relative;
							width: 100%;
							border-radius:8px;
							height: 222px;
							>img{
								width: 100%;
								height: 100%;
								border-radius:8px;
							}
							>span{
								width:106px;
								height:24px;
								background:#3D2F74;
								border-radius:12px;
								position: absolute;
								bottom: -12px;
								left: 50px;
								line-height: 24px;
							}	
						}
						>.bom{
							margin-top: 37px;
							>.title{

							}
							>button{
								margin-top: 51px;
								width:234px;
								height:54px;
								border:1px solid rgba(229,229,229,1);
								border-radius:27px;
								color:rgba(117,117,117,1);
								font-size: 16px;
								cursor: pointer;
								background:#fff;
								transition:all .5s;
							}
						}
					}
				}
				>.switchPage{
					width: 100%;
					position: absolute;
					bottom: 0;
					height: 54px;
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
