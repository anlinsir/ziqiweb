<template>
	<div class="Warper rb">
		<Header />	
		<div class="Topwarper">
 			<div class="Topwarp mw rb color">
 				<div class="shadowText color">
					<p class="back">最新资讯</p>
					<p class="forword">为什么要用区块链代替数据库？</p>
					<p class="subtext"><span>2018-03-02</span> &nbsp;&nbsp; | &nbsp;&nbsp; <span>子奇科技</span></p>
				</div>
 			</div>
 		</div>

 		<div class="articleWarp  Warper">
			<div class="articlewarp warp rb">
				<div class="article rb">
		 			<div class="float bb rb">
		 				<span @click='returnNews' class="close pointer">
		 					<img src="/static/img/close.png" alt="">
		 				</span>
		 				<img src="/static/img/pic5.png" >
		 				<div class="contentText">
		 					我看到初入该领域的投资新手总是在询问这些问题，不管是针对具体项目，还是作为一般问题。因此我就想我要尝试着写一个关于代币应用以及使用区块链的合理性的详细而又基础的解释。

							基本上，区块链体现了很多博弈论以及激励模型。为了让区块链网络变得有价值或者说让它变得有用，网络中必须有参与者，如果只有我和你使用比特币的话，那么比特币网络毫无价值，因为没有太多实用性的贫瘠的网络中不存在太大的价值。

							为了招揽参与者，网络中需要有一些用来吸引他们的激励措施，最常见的方法就是通过发行或者奖励给予参与者网络中使用的代币，参与者越多的话，其（代币）分散程度就越高。 <br>
							我看到初入该领域的投资新手总是在询问这些问题，不管是针对具体项目，还是作为一般问题。因此我就想我要尝试着写一个关于代币应用以及使用区块链的合理性的详细而又基础的解释。

							基本上，区块链体现了很多博弈论以及激励模型。为了让区块链网络变得有价值或者说让它变得有用，网络中必须有参与者，如果只有我和你使用比特币的话，那么比特币网络毫无价值，因为没有太多实用性的贫瘠的网络中不存在太大的价值。

							为了招揽参与者，网络中需要有一些用来吸引他们的激励措施，最常见的方法就是通过发行或者奖励给予参与者网络中使用的代币，参与者越多的话，其（代币）分散程度就越高。
							我看到初入该领域的投资新手总是在询问这些问题，不管是针对具体项目，还是作为一般问题。因此我就想我要尝试着写一个关于代币应用以及使用区块链的合理性的详细而又基础的解释。

							基本上，区块链体现了很多博弈论以及激励模型。为了让区块链网络变得有价值或者说让它变得有用，网络中必须有参与者，如果只有我和你使用比特币的话，那么比特币网络毫无价值，因为没有太多实用性的贫瘠的网络中不存在太大的价值。

							为了招揽参与者，网络中需要有一些用来吸引他们的激励措施，最常见的方法就是通过发行或者奖励给予参与者网络中使用的代币，参与者越多的话，其（代币）分散程度就越高。
							我看到初入该领域的投资新手总是在询问这些问题，不管是针对具体项目，还是作为一般问题。因此我就想我要尝试着写一个关于代币应用以及使用区块链的合理性的详细而又基础的解释。

							基本上，区块链体现了很多博弈论以及激励模型。为了让区块链网络变得有价值或者说让它变得有用，网络中必须有参与者，如果只有我和你使用比特币的话，那么比特币网络毫无价值，因为没有太多实用性的贫瘠的网络中不存在太大的价值。

							为了招揽参与者，网络中需要有一些用来吸引他们的激励措施，最常见的方法就是通过发行或者奖励给予参与者网络中使用的代币，参与者越多的话，其（代币）分散程度就越高。
							为了招揽参与者，网络中需要有一些用来吸引他们的激励措施，最常见的方法就是通过发行或者奖励给予参与者网络中使用的代币，参与者越多的话，其（代币）分散程度就越高。
							我看到初入该领域的投资新手总是在询问这些问题，不管是针对具体项目，还是作为一般问题。因此我就想我要尝试着写一个关于代币应用以及使用区块链的合理性的详细而又基础的解释。

							基本上，区块链体现了很多博弈论以及激励模型。为了让区块链网络变得有价值或者说让它变得有用，网络中必须有参与者，如果只有我和你使用比特币的话，那么比特币网络毫无价值，因为没有太多实用性的贫瘠的网络中不存在太大的价值。

							为了招揽参与者，网络中需要有一些用来吸引他们的激励措施，最常见的方法就是通过发行或者奖励给予参与者网络中使用的代币，参与者越多的话，其（代币）分散程度就越高。
		 				</div>

		 				<div class="switchPage rb">
		 					<div style="color:rgba(124,124,124,1);" v-show='pageNum == 0' class="Left  bb  rb grey">← 上一篇 已经是第一篇文章</div>
		 					<div  @click="changePage(0)"  v-show='pageNum != 0' class="Left  bb  rb  white">← 上一篇 在区块链上建立可更新的智慧合约 </div>

		 					<div style="color:rgba(124,124,124,1);" v-show='pageNum == totlesNum - 1' class="Right bb  rb grey">已经是最后一篇文章 下一篇  →</div>
		 					<div @click="changePage(1)"  v-show='pageNum != totlesNum -1 ' class="Right white  bb rb ">运行在区块链上的交易所 下一篇 →  →</div>

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

	export default{
		data(){
			return({
				pageNum:0,//第几页
				totlesNum:3,//总共几页
			})
		},
		methods:{
			returnNews(){//返回列表2
				this.$router.push('/news')
			},
			changePage(type){//切换文章
				if(type == 0){
					this.pageNum --
				}else{
					this.pageNum ++
				}
			}
		},
		components:{
			Header
		},
		mounted(){
			console.log(document.getElementsByClassName('float')[0].style)
		}
	}

</script>


<style scoped lang="scss">
	
	.Warper{
		.Topwarper{
			height: 436px;
			background-image: url('/static/img/otherBg.png');
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
					min-height: 1000px;
					position: relative;
					>.float{
						min-height: 1000px;
						width: 100%;
						top:-150px;
						padding: 43px 47px 0;
						min-height: 1000px;
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
							font-size:16px;
							font-family:MicrosoftYaHei;
							font-weight:400;
							color:rgba(51,51,51,1);
							line-height:36px;
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