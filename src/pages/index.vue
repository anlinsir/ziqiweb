<template>
 	<div class="Warper">
 		<Header />

 		<div @click.self='displayBlockShow = !displayBlockShow' v-show='displayBlockShow' class="displayBlock" :style="{height:fullHeight + 'px'}">
 			<span @click='displayBlockShow = !displayBlockShow' class="lh outside close pointer "><img src="/static/img/close.png" ></span>

 			 <transition
			    name="custom-classes-transition"
			    enter-active-class="animated flipInY"
			    leave-active-class="animated flipOutY"
			  >
	 			<div v-show='displayBlockShowSub' class="subDisplayBlock">
		 			<span @click='turnLeft' class="lh outside leftarr pointer "><img src="/static/img/left.png" ></span>

		 			<span class="lh outside rightarr pointer "><img src="/static/img/right.png" ></span>

	 				<div class="Toparea bb">
	 					<dl class="flex">
	 						<dt>
	 							<img src="/static/img/indexlogo.png" >
	 						</dt>
	 						<dd>
	 							<p class="tit fz18 fwb">搜多多 </p>
	 							<p class="dir fz14">数字资产行情</p>

	 						</dd>
	 					</dl>

	 					<div class="btnGroup Right">
	 						<button @click="backLeft = backLeft == '0px' ? '-85px' : '0px' " :style="{backgroundColor:backLeft == '0px' ? '' : '#f6f6f6' }" class="Show">APP下载</button>
	 						<button :style="{left:backLeft}" class="back"></button>
	 						<button>官网链接</button>
	 					</div>
	 				</div>

	 				<div class="BigImg rb">
	 					<img src="/static/img/pic1.png">
	 				</div>
	 				<div class="subImgsChoose bb">
	 					<ul class="flex">
	 						<li class="rb" v-for="(ii,id) in ['/static/img/pic2.png','/static/img/pic3.png','/static/img/pic4.png']">
	 							<img :src="ii" alt="">
	 						</li>
	 					</ul>
	 				</div>
	 			</div>
	 		  </transition>

 		</div>


 		<ul class="aside">
 			<li @click="AisdeClick(id)" :style="{backgroundPosition:ii.imgP ,backgroundColor:id == 0 ? 'rgba(255,255,255)' : 'rgba(82,62,162,1)' }" class=" pointer" v-for="(ii,id) in [{imgP:'center 15px'},{imgP:'center -37px'},{imgP:'center -89px'}]">

 				<span class="bb" v-if='id == 1'>
 					<img src="">
 					<span class="fz12 center lh">关注微信公众号</span>
 				</span>
 			</li>
 		</ul>

 		<div class="Topwarper">
 			<div class="Topwarp mw rb color">
 				<div class="positionCenter center">
 					<p class="Bigtitle">创新的区块链技术解决方案与 <br> 一站式应用落地孵化</p>
 					<p class="smatitle">您值得托付的区块链孵化器</p>
 				</div>
 			</div>
 		</div>
 		<!-- top 文字 -->

 		
		<div class="section1Warper  Warper">
			<div class="section1 warp rb">
				<ul class="flexB">

				  
					<li class="pl">

						<div class="shadowText color">
							<p class="back">服务技术</p>
							<p class="forword">服务技术</p>

						</div>
						<p class="fz18 white">
							时代前沿的区块链 <br>
							技术服务内容
						</p>

						<!-- <div class="seversChose">
							<span @click="switcher(id)" :class="section1ShowSub == id ? 'section1ShowSub lh pointer center' : 'lh pointer center' " class="lh pointer center" v-for="(ii,id) in 4">{{id + 1}}</span>
						</div> -->
						<div style="margin-top: 89px;" class="swiper-pagination"></div>

					</li>
					<!-- 选择板块 -->
					<div class="swiper-container" id='sb'>
					    <div class="swiper-wrapper">
					        <li class="swiper-slide center" v-for="(ii,id) in [
					        	{
					        		imgPoint:'-11px -86px',
					        		title:'根链平台及以太坊智能合约',
					        		deriction:'实施智能合约以让合约在根链平台及以太坊自动执行。我们可以从定义开始为您撰写智能合约代码。'
					        	},
					        	{
					        		imgPoint:'-395px -86px',
					        		title:'区块链技术',
					        		deriction:'使用基于密码的技术来储存不可变数据。我们可以帮助您选择适合此技术的程序。'
					        	},
					        	{
					        		imgPoint:'-11px -560px',
					        		title:'智能合约审计',
					        		deriction:'在您将智能合同部署到区块链时，安全缺陷、不当行为和效率低下会带来高昂的代价。我们帮助公司写出可靠的智能合约代码。'
					        	},
					        	{
					        		imgPoint:' -404px -565px',
					        		title:'超级账本',
					        		deriction:'金融、保健、零售、制造等区块链发展。'
					        	},
					        	{
					        		imgPoint:'-11px -1044px',
					        		title:'私人区块链',
					        		deriction:'在您的机构或公司实施私人区块链。'
					        	},
					        	{
					        		imgPoint:'-397px -1046px',
					        		title:'货币兑换',
					        		deriction:'开发安全可靠的加密货币兑换。'
					        	},
					        	{
					        		imgPoint:'-15px -1533px',
					        		title:'付款网关',
					        		deriction:'接受加密货币并即时将之转换为您的优选货币或将之存至您的钱包。'
					        	},
					        	{
					        		imgPoint:'-394px -1533px',
					        		title:'钱包',
					        		deriction:'保护传统钱包和多重签名钱包以确保安全。'
					        	},
					        	{
					        		imgPoint:'-4px -1999px',
					        		title:'履约保证',
					        		deriction:'在满足特定条件时释放加密货币付款。'
					        	},
					        	{
					        		imgPoint:'-387px -2011px',
					        		title:'众筹',
					        		deriction:'允许个人和组织接受全世界对其项目的投入或投资。'
					        	},
					        	{
					        		imgPoint:'-15px -2481px',
					        		title:'训练',
					        		deriction:'教您的团队理解区块链技术并为接下来的动作作准备。'
					        	},
					        	{
					        		imgPoint:'-395px -2487px',
					        		title:'匿名化',
					        		deriction:'使用额外匿名化措施，如混币，以保障隐私。'
					        	},
					        ]">
								<p class="img"  style="height: 217px;" :style="{backgroundPosition:ii.imgPoint}"></p>
								<p class="fwb fz18 center white" style="margin-bottom:40px;">{{ii.title}}</p>
								<p class="w266 white fz14 lh ">
									{{ii.deriction}}
								</p>
							</li>
					    </div>
					   
					</div>
				   
					
					<!-- <li>
						<p class="img" style="height: 217px;background-position: -391px -86px;"></p>
						<p class="fwb fz18 center white" style="margin-bottom:43px;">区块链技术</p>
						<p class="w266 white fz14">
							使用基于密码的技术来储存不可变数据。我们可以帮助您选择适合此技术的程序。
						</p>
					</li> -->

				</ul>
			</div>		
		</div>
 		<!-- section1 -->
 		<div class="section2Warper  Warper">
 			<div class="section2 warp rb">
 				<dl class="flex">
 					<dt>
 						<div class="shadowText color">
							<p class="back">业务内容</p>
							<p class="forword">业务内容</p>

						</div>
						<p class="fz18">一站式区块链技术及应用落地孵化</p>
 					</dt>
 					<dd class="rb">
 						<ul class="flex">
 							<li v-for="(ii,id) in [
 										{
 											color:'#4466D6',
 											num:'01',
 											title:'区块链项目总咨询与策划',
 											content:'项目总体规划、策略制定、法律问题、令牌设计和发行'
 										},
 										{
 											color:'#4EC8B8',
 											num:'02',
 											title:'创新的区块链技术支持',
 											content:'令牌、钱包、智能合约、交易所等区块链系统的技术实现'
 										},
 										{
 											color:'#6496E3',
 											num:'03',
 											title:'项目整体包装与发行',
 											content:'网站及宣传页制作、白皮书撰写、交易所上线及令牌推广'
 										},
 										{
 											color:'#3D3075',
 											num:'04',
 											title:'区块链项目投资策略',
 											content:'全球A级项目投资策略及渠道提供'
 										},
 								]">
 								<div class="left Left">
 									<div :style="{backgroundColor:ii.color}" class="box"></div>
 									<div class="trans fz12 fwb">{{ii.num}}</div>
 								</div>
 								<div class="right Left">
 									<p class="titles fwb">{{ii.title}}</p>
 									<p class="content fz14">{{ii.content}}</p>
 								</div>
 							</li>
 							

 						</ul>
 					</dd>
 				</dl>
 			</div>	
 		</div>
 		<!-- section2 -->
 		<div class="section3Warper  Warper">
 			<div class="section3 warp ">
 				<div class="shadowText  center">
					<p class="back">案例展示</p>
					<p class="forword">案例展示</p>
				</div>

				<ul class="flexB">
					<swiper :options="swiperOption" ref="mySwiper">
					<swiper-slide class="li" v-for='(i,d) in 8' >
						<div @click="showDislpay" class="hover transition">
							<div class="bottom bb">
								<p class="white name ">搜多多SOUDUODUO</p>
								<p class="fz16 white ">数字资产行情</p>
								<img class="Right box" src="/static/img/button.png" alt="">
							</div>
						</div>
					</swiper-slide>
					</swiper>
					<!-- <div class="swiper-pagination swiper-paginationsss"  slot="pagination"></div> -->
				</ul>



 			</div>
 		</div>
 		<!-- section3 -->
 		<div class="section4Warper rb Warper">
 			<div class="section4 warp rb">
 				<div class="shadowText  center">
					<p class="back">最新资讯</p>
					<p class="forword white">最新资讯</p>
				</div>

				<ul class="flexB">
					<li class="rb bb white">
						<p class="title fz18 fwb">如何扩展以太坊：分片原理解释</p>
						<p class="content fz14">
							<span class="lh">首先让我们看看分片系统的结构。首先，在特定分片上被称为校对器（Collator）的节点的任务是创建校对块（Collation），校对块是一种包含关于所涉及分片的重要信息的特定结构。</span>
							<span >超级节点将把所有分片中的校对块放到以太坊区块链中将要添加的区块中。通过汇总他们的校验头来维护所有分片的状态。 </span>
						</p>
						<p class="seeAll fz14">阅读全文 ></p>
					</li>
					<li class="rb bb white">
						<p class="title fz18 fwb">智能合约灵活升级</p>
						<p class="content fz14">
							<span class="lh">以太坊智能合约具有很强的不变性，使得我们能够构建完全防篡改的应用程序，任何个人、公司或政府都不能篡改数据（信息）。每个参与者都遵循相同的规则，并且这些规则永远都不会改变。</span>
							<span >但是，说到底，这些规则都是由人创造的。而人类总是偶然会犯一点错误的。我们不可能从第一天就看到未来发展的完整画面，并构造一个完全不需要适配或改进的完美系统。 </span>
						</p>
						<p class="seeAll fz14">阅读全文 ></p>
					</li>
					<li class="rb bb white">
						<p class="title fz18 fwb">积分联盟与区块链债务</p>
						<p class="content fz14">
							<span class="lh">在合规的框架下，区块链本身能做的事情并不多，区块链积分是很多人看见的值得去尝试的一个方向。比如莫名其妙估值15亿的趣链，就有一个区块链积分专利，众安保险也有一个积分解决方案。</span>
							<span >积分的本质是债务，这也很符合区块链的初心：分布式账本。本来就是记账的，从来处理债务实在是太适合不过了。  </span>
						</p>
						<p class="seeAll fz14 ">阅读全文 ></p>
					</li>

				</ul>

				<div class="none center">
					<button class="fz18 white pointer">更多资讯</button>
				</div>


 			</div>
 		</div>
 		<!-- section4 -->
 		<div class="section5Warper bb rb Warper">
 			<div class="section5 warp rb">
 				
 				<div class="left  Left">
 					<div class="shadowText  " style="margin-top:30px;">
						<p style="color:rgba(228,228,242,0.4);" class="back">公司信息</p>
						<p class="forword ">公司信息</p>
					</div>
					<p class="info">
						<strong>成都子奇科技有限公司</strong>2014年成立于中国成都，注册资金500万元，2017年挂牌天府股权交易中心，股票代码：811290。</p>
					<p class="info2">我们是狂热的链圈技术从业者、是创新的区块链技术解决方案商和商业应用落地孵化器，为您提供区块链一站式项目孵化、开发、上线、推广、发行、投资等服务。</p>

					<ul class="flex">
						<li @mouseleave='lineChangeLeave()' @mouseenter="lineFalseChange(id,0)" @click='lineChenge(id)' :class="cityChoose == id ? ' pointer fz16 center transition' : ' pointer fz16 center transition'"  v-for="(ii,id) in ['中国','瑞典','日本']">{{ii}}</li>
						<li  :style="{left:left}" class="line transition"></li>
					</ul>

					<div class="loaction">
						<p class="fwb fz16">成都子奇科技有限公司 总部</p>
						<p class="loactionInfo">
							<span>地址: 四川成都市高新区天府大道天华路天府软件园B区3栋4F-V06</span><br>
							<span>电话: 400-0288-767；18508233623</span><br>
							<span>Q Q: 1834633402</span><br>
							<span>邮箱: shxiao918@gmail.com</span>
						</p>
					</div>

					<div class="map rb">
						<div id="container" style="width:100%; height:100%"></div>
					</div>

 				</div>
 				<div class="right Right">
 					<div class="shadowText  " style="margin-top:30px;">
						<p style="color:rgba(228,228,242,0.4);" class="back">业务咨询</p>
						<p class="forword ">业务咨询</p>
						<span class="lh fz14">填写以下内容发送给我们，我们将在24小时内联系您</span>
					</div>

					<form>
						<input type="text"   placeholder="成都某某某科技有限公公司" />
						<input type="text"  placeholder="您的姓名(必填)" />
						<input type="text"  placeholder="联系电话(必填)" />
						<input type="text"  placeholder="微信号(必填)" />
						<input type="text"  placeholder="标题" />
						<textarea placeholder="咨询内容……"></textarea>
						<button class="pointer">发 送</button>
					</form>




 				</div>

 			</div>		
 		</div>
 		<!-- section5 -->


 		<Footer />


 	</div>
</template>

<script>
	import Header from '../components/header'
	import Footer from '../components/footer'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { lazyAMapApiLoaderInstance } from 'vue-amap';
	 
	export default {
	  
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App',
	      cityChoose:0,
	      left:'10px',
	      flaseLeft:'',
	      section1Show:0,//显示
	      section1ShowSub:0,//选择
	      swiperOption: {
       			slidesPerView :2,
				spaceBetween: 30,  
				slidesPerGroup: 2,  
				loopFillGroupWithBlank: true,//在loop模式下，为group填充空白slide  
    	  },
    	  backLeft:'0px',
    	  fullHeight:'',
    	  displayBlockShow:false,
    	  displayBlockShowSub:true,
    	  map:'',
    	  marker:'',

	    }
	  },
	  methods:{
	  	 	
	  		turnLeft(){
	  			this.displayBlockShowSub = false
	  			setTimeout(()=>{
	  				this.displayBlockShowSub = true
	  			},2000)
	  		},
	  		showDislpay(){//
	  			this.displayBlockShow = !this.displayBlockShow

	  		},
	  		AisdeClick(id){
	  			switch (id){
	  				case 0:
	  					document.documentElement.scrollTop = 0
	  					document.body.scrollTop = 0
	  					break;
	  				case 1:

	  					break;
	  				case 2:

	  					break;
	  			}
	  		},
		  	lineChangeLeave(){
		  		this.left = this.flaseLeft
		  	},
		  	lineFalseChange(id,num){
		  		this.flaseLeft = this.left
		  		
			  		if(id == 0){
			  			this.left = '10px'
			  		}else if(id == 1){
			  			this.left = '83px'
			  		}else if(id == 2){
			  			this.left = '157px'
			  		}

		  	},	
		  	lineChenge(id){
		  		this.cityChoose =  id
		  		if(id == 0){
		  			this.left = '10px'
		  		}else if(id == 1){
		  			this.left = '83px'
		  		}else if(id == 2){
		  			this.left = '157px'
		  		}
		  		this.flaseLeft = this.left	
		  	}
	  },
	  components:{
	  	Header ,
	  	Footer,
	  	swiper,
    	swiperSlide
	  },
	  mounted(){
	  	this.fullHeight = document.documentElement.clientHeight
	  	window.onresize = ()=>{
	  		this.fullHeight = document.documentElement.clientHeight
	  	}

	  	lazyAMapApiLoaderInstance.load().then(() => {
	        this.map = new AMap.Map('container', {
	        	center: new AMap.LngLat(104.0701200000,30.5445100000),
	        	zoom:16,
	        });
	       	var marker = new AMap.Marker({
			    position:[104.0701200000,30.5445100000],
			    map: this.map,
			    bubble:true,
			    animation:"AMAP_ANIMATION_DROP",
			    title:'成都子奇科技有限公司'
			    //draggable:true,
			});
			var msg_label = "成都子奇科技有限公司";
			marker.setLabel({
			    offset: new AMap.Pixel(-45,-30), //显示位置
			    content: msg_label //显示内容
			});
	      });
	  		


	  	setTimeout(()=>{
	  		var mySwiper = new Swiper ('#sb', {
			   	slidesPerView :2,
				spaceBetween: 30,  
				slidesPerGroup: 2,  
				loopFillGroupWithBlank: true,//在loop模式下，为group填充空白slide  
			   	 pagination: {
			      el: '.swiper-pagination',
			      clickable :true,
			      renderBullet: function (index, className) {
			          return '<span style="display:inline-block;width:26px;height:26px;margin-right:8px;outline:none;line-height:26px;" class="' + className + ' white  ">' + (index + 1) + '</span>';
			        },

			    },
			   

			  })       
	  	},200)
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.displayBlock{
	position: fixed;
	width: 100%;
	z-index: 20;
	top:0;
	overflow: auto;
	background-color: rgba(0,0,0,.4);
	.outside{
		position: absolute;
		color: #fff;
	}
	.close{
		width: 30px;
		height: 30px;

		right: 38px;
		top:48px;
	}
	.leftarr{
		left: -41px;
		top:50%;
	}
	.rightarr{
		right: -41px;
		top:50%;	
	}
	.subDisplayBlock{
		position: relative;
		width: 850px;
		min-height: 500px;
		background:rgba(255,255,255,1);
		border-radius:10px;
		margin: auto;
		// margin-top: 46px;
		>.Toparea{
			width: 100%;
			height: 115px;
			padding:26px 20px 0 43px;
			>dl{

				float: left;
				>dt{
					width: 60px;
					height: 60px;
					margin-right: 21px;
					>img{
						width: 36px;
						height: 36px;
					}
				}
				>dd{
					>.tit{

					}
					>.dir{
						color:rgba(98,98,98,1);
					}
				}
			}
			>.btnGroup{
				position: relative;
				>.back{
					position: absolute;
					left: 0;
					z-index: 1;
					transition:all .5s;
					background: url('/static/img/android.png') 15px center,url('/static/img/ios.png') 60px center;
					background-repeat: no-repeat;
				}
				>.Show{
					position: relative;
					z-index: 2;

				}
				>.Show:hover +.back{
					left: -85px;
				}

				>button{
					width:110px;
					height:38px;
					background:rgba(255,255,255,1);
					border:1px solid rgba(229,229,229,1);
					border-radius:19px;
					font-size:14px;
					color:rgba(136,135,135,1);
					margin-right: 20px;
					cursor: pointer;
				}
			}

		}
		>.BigImg{
			width: 100%;
			height: 640px;
			>img{
				width: 100%;
				height: 100%;
			}
		}
		>.subImgsChoose{
			width: 100%;
			height: 192px;

			padding: 43px 0 0 49px;
			>ul{
				>li{
					width: 147px;
					height: 111px;
					margin-right: 28px;
					cursor: pointer;
					>img{
						width: 100%;
						height: 100%;
					}
				}
			}

		}

	}
}
.Warper{
	.aside{
		position: fixed;
		right: 39px;
		width: 36px;
		min-height: 100px;
		bottom:100px;
		z-index: 10;
		transition:all 1s;
		>li{
			border-radius: 50%;
			width: 36px;
			height: 36px;
			margin-bottom: 14px;
			background-color:rgba(82,62,162,1);
			box-shadow:0px 8px 13px 0px rgba(92,87,132,0.15);
			position: relative;
			background-image: url('/static/img/asideImg.png');
			background-repeat: no-repeat;

			&:hover{
				background-color:rgba(82,62,162,.4);	
			}
			&:hover >span{
				display: inline-block;
			}
			>span{

				display: none;
				position: absolute;
				top:-35px;
				left: -133px;
				width: 108px;
				height: 114px;
				background-color: #fff;
				border-radius:10px;
				padding: 5px;
				box-shadow:0px 8px 13px 0px rgba(92,87,132,0.15);
				>img{
					width: 83px;
					height: 83px;
					margin-left: 7px;
				}
				>.center{
					margin-left: 5px;
				}
				&::after{
					content:'';
					
					border: 10px solid  #fff;
					border-bottom: 10px solid  transparent;
					border-right: 10px solid  transparent;
					position: absolute;
					right: -20px;
					top: 50%;
					transform: translateY(-80%);
					border-top: 10px solid  transparent;
					border-left: 10px solid  #fff;


				}
			}
		}
	}
	.section1ShowSub{
		background:linear-gradient(112deg,rgba(255,255,255,1),rgba(80,82,126,1));
	}
	.swiper-pagination{
		.swiper-pagination-bullet{
			width: 26px !important;
			height: 26px !important;
			transition: all .5s !important;
			border-radius: 50% !important;
			line-height: 26px !important;
		}	
	}

	.Topwarper{
		height: 679px;
		background-image: url('/static/img/indexbg.png');
		background-repeat: no-repeat;
		background-position: center; 
		>.Topwarp{
			position: relative;
			height: 679px;
			color: var(--color);
			>.positionCenter{
				width: 632px;
				height: 50px;
				line-height:68px;
				top: -200px;
				>.smatitle{
					color: #B9CCF8;
					font-size: 24px;
				}
			}
		}
		
	}
	>.section1Warper{
		height: 275px;
		margin-bottom: 138px;
		>.section1{
			height: 275px;
			position: relative;
			>ul{
				width: 100%;
				position: absolute;
				top:-160px;
				>.pl{
					padding-left: 30px;
				}
				>.flex{
					width: 687px;
				}
				.swiper-container{
					width: 723px;
				}
				.swiper-wrapper{
					>:nth-child(2n + 1){
						margin-left: 50px;
					}
				}


				.swiper-slide,.pl{
					width:320px !important;
					height:431px;
					background:#222454;
					opacity:0.95;
					border-radius:10px;
					box-shadow:0px 7px 35px 0px rgba(45,47,93,0.63);
					margin-right: 30px;
					box-sizing: border-box;
					>.w266{
						width: 266px;
						margin-left: 8px;
						line-height:36px;
					}
					>p{

						line-height:30px;
					}
					
				}

			}

		}
	}
	>.section2Warper{
		height: 402px;
		>.section2{
			height: 402px;
			>dl{
				>dt{
					width: 289px;
					margin-right: 93px;
					>.shadowText{
						>.back{color:rgba(228,228,242,0.6);}
						>.forword{color:#333333; }
						margin-bottom: 19px;
					}
					>.fz18{
						color:rgba(147,147,147,1);
						line-height:30px;	
					}
				}
				>dd{
					width: 712px;
					>ul{
					    width: 100%;
						flex-wrap: wrap;
						>li{
							width: 50%;
							margin-bottom: 41px;
							>.left{
								width: 13px;
								margin-right: 30px;
								>.box{
									width: 12px;
									height: 12px;
									background-color: #4466D6;
								}
								>.trans{
									margin-top: 25px;
									transform: rotateZ(270deg); 
								}
							}
							>.right{
								margin-top: 35px;
								>.titles{
									font-size: 16px;
									color:rgba(51,51,51,1);
								}
								>.content{
									margin-top: 19px;
									width: 286px;
									color:rgba(110,110,110,1);
								}
							}
						}
					}
				}
			}
		}
	}
	>.section3Warper{
		height: 751px;
		>.section3{
			height: 751px;
			padding-top: 107px;
			>.shadowText{
				margin-bottom: 71px;
				 margin-top: 0px;
				>.back{
					color:rgba(228,228,242,0.5);
					left: 0;
					right: 0;
					margin: auto;
				}
				>.forword{
					color:rgba(51,51,51,1);
				}
			}
			>ul{
				width: 1100px;
				.li{
					border-radius:10px;
					height: 347px;
					width: 537px;
					position: relative;
					overflow: hidden;
					background-image: url('/static/img/displayLi.png');
					background-position: center center;

					>.hover{
						position: absolute;
						bottom: -347px;
						width:537px;
						height:347px;
						background:linear-gradient(0deg,rgba(47,41,99,1),rgba(24,24,24,0));
						border-radius:10px;
						box-shadow:0px 7px 43px 0px rgba(45,47,93,0.1);
						>.bottom{
							position: absolute;
							bottom: 40px;
							width: 100%;
							height: 62px;
							padding-left: 28px;
							font-size:22px;
							>.name{
								margin-bottom: 18px;
							}
							>.Right{
								transform: translateY(-77px) translateX(0px);
								
							
							}
						}
					}
					&:hover .hover{
						bottom: 0px;
						cursor: pointer;
					}
				}
			}
		}
	}
	>.section4Warper{
		height: 839px;
		background-image: url('/static/img/indexSubBg.png');
		background-repeat: no-repeat;
		background-position: center;
		overflow: hidden; 
		>.section4{
			height: 839px;
			overflow: hidden;
			>.shadowText{
				margin-bottom: 61px;
				margin-top: 71px;

				>.back{
					z-index: 0;
					left: 0;
					right: 0;
					margin: auto;
					color:rgba(73,76,137,.4);
				}
				>.forword{
					font-weight: 400;
					position: relative;
					z-index: 1;
				}
			}
			>ul{
				width: 100%;
				>li{
					width: 335px;
					height: 478px;
					padding: 40px 0 0 28px;
					border-radius:10px;
					background-color: #1F1F4B;
					position: relative;

					>.title{
						margin-bottom: 40px;
					}
					>.content{
						color:rgba(206,209,228,1);
						width: 270px;
						line-height:28px;
						>.lh{
							margin-bottom: 30px;
						}
					}
					>.seeAll{
						position: absolute;
						bottom:30px;
						color:rgba(206,209,228,1);
						&:hover{
							text-decoration: underline;
							cursor: pointer;
						}
					}
				}
			}
			>.none{
				margin-top: 58px;
				>button{
					width:234px;
					height:54px;
					background:linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1));
					border-radius:27px;
					box-shadow:0px 7px 21px 0px rgba(117,219,199,0.27);
				}
			}
		}
	}
	>.section5Warper{
		height: 1239px;
		margin-bottom: 126px;
		>.section5{
			padding-top: 102px;
			height: 1239px;
			>.left{
				width: 466px;
				>.shadowText{
					margin-bottom: 55px;
				}
				>.info,.info2{
					font-size:16px;
					line-height:36px;
					color:rgba(61,61,61,1);
					margin-bottom: 50px;
				}
				>ul{
					width: 100%;
					border-bottom:1px solid #CFEAE9;
					height: 52px;
					padding-left: 10px;
					line-height: 52px;
					position: relative;

					>.line{
						position: absolute;
						bottom: -1px;
						width: 54px;
						left: 0px;
						height: 1px;
						background-color: #54CBC5;
					}
					>.cityChoose{
						border-bottom: 1px solid #54CBC5;
					}

					>li{
						width: 54px;
						margin-right: 20px;
						height: 52px;
						color:rgba(87,87,87,1);
						
					}
					
				}
				>.loaction{
					width: 102%;
					margin-top: 37px;
					padding-left: 35px;
					margin-bottom: 43px;
					>.fwb{
						margin-bottom: 36px;
					}
					>.loactionInfo{
						color: #4D4D4D;
						line-height:36px;
					}

				}
				>.map{
					width: 461px;
					height: 329px;

				}
			}
			>.right{
				width: 540px;
				>.shadowText{
					>.fz14{
						position: absolute;
						color:rgba(135,135,135,1);
						right: 66px;
    					top: 17px;
					}
				}
				>form{
					width: 100%;
					>input{
						width:540px;
						height:66px;
						border:1px solid rgba(238,238,238,1);
						color:rgba(24,24,24,1);
						border-radius:10px;
						margin-bottom: 22px;
						transition: all .5s;
						padding-left: 31px;
						&::placeholder{
							color:rgba(181,181,181,1);
						}
						&:focus{
							border:1px solid rgba(84,203,197,1);
							box-shadow:6px 7px 21px 0px rgba(132,234,213,0.19);
							transform: translateY(-1px);
						}
					}
					>textarea{
						width:540px;
						height:388px;	
						background:rgba(255,255,255,1);
						border:1px solid rgba(238,238,238,1);
						padding:  25px 0 0 31px;
						border-radius:10px;
						transition: all .5s;
						resize: none;
						margin-bottom: 23px;
						&::placeholder{
							color:rgba(181,181,181,1);
						}
						&:focus{
							border:1px solid rgba(84,203,197,1);
							box-shadow:6px 7px 21px 0px rgba(132,234,213,0.19);
							transform: translateY(-1px);
						}
					}
					>button{
						width:234px;
						height:54px;
						background:linear-gradient(112deg,rgba(48,157,180,1),rgba(109,235,209,1));
						border-radius:27px;
						box-shadow:0px 7px 21px 0px rgba(117,219,199,0.27);

						font-size:18px;
						font-family:MicrosoftYaHei;
						font-weight:400;
						color:rgba(255,255,255,1);
						line-height:54px;
					}
				}
			}
		}
	}
}

</style>
