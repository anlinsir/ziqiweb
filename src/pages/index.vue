<template>
 	<div class="Warper">
 		<Header />

 		<div v-if='loading' class="loading" :style="{height:fullHeight + 'px'}">
 			<div class="sk-wave">
		        <div class="sk-rect sk-rect1"></div>
		        <div class="sk-rect sk-rect2"></div>
		        <div class="sk-rect sk-rect3"></div>
		        <div class="sk-rect sk-rect4"></div>
		        <div class="sk-rect sk-rect5"></div>
		      </div>
 		</div>



 		<div v-for="(ii,id) in zhezhao" @click.self='closeZhezhao()' v-show='displayBlockShow' class="displayBlock" :style="{height:fullHeight + 'px'}">
 			<div class="sk-wave">
		        <div class="sk-rect sk-rect1"></div>
		        <div class="sk-rect sk-rect2"></div>
		        <div class="sk-rect sk-rect3"></div>
		        <div class="sk-rect sk-rect4"></div>
		        <div class="sk-rect sk-rect5"></div>
		      </div>
 			<span @click='closeZhezhao' class="lh outside close pointer "><img src="/pc/img/close.png" ></span>

 			 <transition
			    name="custom-classes-transition"
			    enter-active-class="animated fadeIn"
			    leave-active-class="animated fadeOut"
			  >
	 			<div v-show='displayBlockShowSub' class="subDisplayBlock">
		 			<span v-show='some > 0 ' @click='turnLeft' class="lh outside leftarr pointer "><img src="/pc/img/left.png" ></span>

		 			<span v-show='some >= 0 && some < anliLIst.length-1 ' @click='turnRight' class="lh outside rightarr pointer "><img src="/pc/img/right.png" ></span>

	 				<div class="Toparea bb">
	 					<dl class="flex">
	 						<dt>
	 							<img v-if='ii.icon' :src="ii.icon" >
	 						</dt>
	 						<dd>
	 							<p class="tit fz18 fwb">{{ii.name}} </p>
	 							<p class="dir fz14">{{ii.tiny_info}}</p>

	 						</dd>
	 					</dl>

	 					<div class="btnGroup Right">
	 						<button @click="backLeft = backLeft == '0px' ? '-85px' : '0px' " :style="{backgroundColor:backLeft == '0px' ? '' : '#f6f6f6' }" class="Show">APP下载</button>

	 						<button :style="{left:backLeft}" class="back">
	 								<span class="lh" style="width:20px;height:20px;translateX(-18px) translateY(3px)" @click="and(ii.android_app)"></span>
	 								<span class="lh" style="width:20px;height:20px;translateX(4px) translateY(3px);" @click="ios(ii.ios_app)" ></span>

	 						</button>


	 						<button>
	 							<span @click="websit(ii.website)">官网链接</span>
	 						</button>
	 					</div>
	 				</div>

	 				<div class="BigImg rb">
	 					<img :src="bigIMGSHow" v-if='bigIMGSHow'>
	 				</div>
	 				<div class="subImgsChoose bb">
	 					<ul class="flex">
	 						<li class="rb" v-for="(i,d) in ii.images">
	 							<img @click='bigIMGSHow = i' :src="i" alt="">
	 						</li>
	 					</ul>
	 				</div>
	 			</div>
	 		  </transition>

 		</div>


 		<ul class="aside">
 			<li @click="AisdeClick(id)" :style="{backgroundPosition:ii.imgP ,backgroundColor:id == 0 ? 'rgba(255,255,255)' : 'rgba(82,62,162,1)' }" class=" pointer" v-for="(ii,id) in [{imgP:'center 13px'},{imgP:'center -37px'},{imgP:'center -89px'}]">

 				<span class="bb" v-if='id == 1'>
 					<img src="/pc/img/ercode.png">
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
				<ul style="margin-left:20px" class="flexB">

				  
					<li class="pl" style="margin-right:0;">

						<div class="shadowText color">
							<p style="bottom:-6px;" class="back">技术方案</p>
							<p class="forword">技术方案</p>

						</div>
						<p class="fz18 white">
							企业级区块链方案 <br>
							及行业场景
						</p>

						<!-- <div class="seversChose">
							<span @click="switcher(id)" :class="section1ShowSub == id ? 'section1ShowSub lh pointer center' : 'lh pointer center' " class="lh pointer center" v-for="(ii,id) in 4">{{id + 1}}</span>
						</div> -->
						<div style="margin-top: 89px;" id='pages' class="swiper-pagination"></div>

					</li>
					<!-- 选择板块 -->
					<div style="height:505px;transform: translateX(-40px);" class="swiper-container" id='sb'>
					    <div class="swiper-wrapper">
					        <li style="margin-right:40px;" class="swiper-slide center" v-for="(ii,id) in [
					        	{
					        		imgPoint:'-11px -86px',
					        		title:'数字资产',
					        		deriction:'基于区块链平台提供票据的资产化数字能力（发行、转让、贴现、兑付等），可应用于数字票据、共享积分、优惠券、数字TOKEN、股权登记等业务场景。'
					        	},
					        	{
					        		imgPoint:'-395px -86px',
					        		title:'鉴证证明',
					        		deriction:'基于超级账本(hyperledger)搭建区块链鉴证证明服务平台，可应用于知识产权、保单保全、公益捐赠、个人和企业资质证明等业务场景。'
					        	},
					        	{
					        		imgPoint:'-11px -560px',
					        		title:'共享账本',
					        		deriction:'基于区块链共享账本技术，为商业银行、登记及清算机构、交易所、保险等各类型金融机构提供创新的综合支付清算业务解决方案。'
					        	},
					        	{
					        		imgPoint:' -404px -565px',
					        		title:'智能合约',
					        		deriction:'基于超级账本(hyperledger)、以太坊（Ethereum）智能合约的编写，可应用于贸易款项交割、航空延误险、自行车租赁、房屋共享等合同自动执行的场景。'
					        	},
					        	{
					        		imgPoint:'-11px -1044px',
					        		title:'分享经济',
					        		deriction:'基于超级账本(hyperledger)的区块链可信网络互助服务，可以为用户加入互助平台的真实性、用户身份认证真实性、互助事件发生的真实性等各个环节提供真实性证明。'
					        	},
					        	{
					        		imgPoint:'-397px -1046px',
					        		title:'防伪溯源',
					        		deriction:'区块链技术结合防伪标签和物联网设备，能够防止人为因素造成的数据源造假，确保产品信息真实唯一，可溯源，防篡改，实时监控审核商品身份、商品动态、商品流向。'
					        	},
					        	{
					        		imgPoint:'-15px -1533px',
					        		title:'信息安全',
					        		deriction:'提供弹性、易用、安全、智能的企业信息安全防御体系，从网络层，系统层，应用层，数据层和业务层进行全方位保障。'
					        	},
					        	{
					        		imgPoint:'-394px -1533px',
					        		title:'区块链游戏',
					        		deriction:'基于以太坊（Ethereum）DAPP智能合约的区块链游戏，可应用于区块链菠菜类、站岗类、棋牌类、宠物养成、加密名人、加密资产等区块链游戏场景。'
					        	},
					        	{
					        		imgPoint:'-4px -1999px',
					        		title:'区块链商城',
					        		deriction:'基于超级账本(hyperledger)、以太坊（Ethereum）的区块链技术，打造去中心化电商生态体系，通过打通数字资产与实体商业的价值对接，实现商业服务的区块链转型。'
					        	},
					        	{
					        		imgPoint:'-387px -2011px',
					        		title:'数字钱包',
					        		deriction:'基于主流链上数据的多币种钱包体系，安全便捷高效的数字资产管理，灵活的商业应用方式助您快速落地数字资产。可独立应用运行，也可集成于传统互联网项目中。'
					        	},
					        	{
					        		imgPoint:'-15px -2481px',
					        		title:'交易系统',
					        		deriction:'基于区块链技术的多种模式交易系统，包含币币交易、场外OTC交易、场内C2C交易、商城交易、交易即挖矿交易等模式。'
					        	},
					        	{
					        		imgPoint:'-395px -2487px',
					        		title:'区块链行情分析',
					        		deriction:'基于数据抓取与二次加工清洗形成的区块链大数据行情平台。其数据可应用于区块链行情门户网站、区块链行情快报机器人、区块链资讯媒体网站。'
					        	},
					        ]">
								<p class="img"  style="height: 217px;" :style="{backgroundPosition:ii.imgPoint}"></p>
								<p class="fwb fz18 center white" style="margin-bottom:40px;">{{ii.title}}</p>
								<p style="text-align:left;" class="w266 white fz14 lh ">
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
 											content:'全球A级项目投资策略和渠道提供，提供全方位风控保障。'
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
					<swiper style='width:100%;height: 417px;' :options="swiperOption" ref="mySwiper">
					<swiper-slide :style="{backgroundImage:`url(${i.images[0]})`}" style='    background-size: 100% 100%;margin-top: 30px;' class="li" v-for='(i,d) in anliLIst' >
						<div @click="showDislpay(d)" class="hover transition">
							<div class="bottom bb">
								<p class="white name ">{{i.name}}</p>
								<p class="fz16 white ">{{i.tiny_info}}</p>
								<img class="Right box" src="/pc/img/button.png" alt="">
							</div>
						</div>
					</swiper-slide>
					</swiper>
					<!-- <div class="swiper-pagination swiper-paginationsss"  slot="pagination"></div> -->
				</ul>
				 <div class="swiper-pagination" id='topage' style="text-align:center;width:1100px;"  slot="pagination" ></div>



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
					<li  class="rb bb white" v-for="(ii,id ) in  newList">
						<p class="title fz18 fwb">{{ii.title}}</p>
						<p class="content fz14">
							<span class="lh" v-html='ii.tiny_content'></span>
							<!-- <span >超级节点将把所有分片中的校对块放到以太坊区块链中将要添加的区块中。通过汇总他们的校验头来维护所有分片的状态。 </span> -->
						</p>
						<p @click="todetai(ii.id)" class="seeAll fz14">阅读全文 ></p>
					</li>
					<!-- <li class="rb bb white">
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
 -->
				</ul>

				<div class="none center">
					<button class="fz18 white pointer" @click='toNews'>更多资讯</button>
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

					<div class="loaction"  v-show='cityChoose == 0'>
						<p class="fwb fz16">成都子奇科技有限公司 总部</p>
						<p class="loactionInfo">
							<span>地址: 四川成都市高新区天府大道天华路天府软件园B区3栋4F-V06</span><br>
							<span>电话: 400-0288-767；18508233623</span><br>
							<span>Q Q: 1834633402</span><br>
							<span>邮箱: shxiao918@gmail.com</span>
						</p>
					</div>

					<div class="loaction"  v-show='cityChoose == 1'>
						<p class="fwb fz16">成都子奇科技有限公司瑞典办事处</p>
						<p class="loactionInfo">
							<span>地址: Emmylundsvägen 1, 17172, Stockholm, Sweden</span><br>
							<span>电话: 400-0288-767</span><br>
							<span>手机: +0046-0760706468</span><br>
							<span>邮箱: sikewan1993@gmail.com</span>
						</p>
					</div>

					<div class="loaction"  v-show='cityChoose == 2'>
						<p class="fwb fz16">成都子奇科技有限公司日本办事处</p>
						<p class="loactionInfo">
							<span>地址: 〒東京都豊島区池袋4-32-10ミニービル</span><br>
							<span>电话: 400-0288-767</span><br>
							<span>手机: +080-45788999</span><br>
							<span>邮箱: enbobobo@gmail.com</span>
						</p>
					</div>

					<div class="map rb">
						<div v-show='cityChoose == 0' id="container" style="    width: 471px;
   				 height: 358px;"></div>
						<div v-show='cityChoose == 1'  style="width: 471px;height: 358px;">
							<img src="/pc/img/google_swe.png" alt=""  style="width: 471px;height: 358px;">
						</div>
						<div v-show='cityChoose == 2'  style="width: 471px;height: 358px;">
							<img src="/pc/img/google_jp.png" alt=""  style="width: 471px;height: 358px;">
						</div>

					</div>

 				</div>
 				<div class="right Right">
 					<div class="shadowText  " style="margin-top:30px;">
						<p style="color:rgba(228,228,242,0.4);" class="back">业务咨询</p>
						<p class="forword ">业务咨询</p>
						<span class="lh fz14">填写以下内容发送给我们，我们将在24小时内联系您</span>
					</div>

					<form>
						<input type="text"  v-model='companyName'  placeholder="公司名称" />
						<input type="text"  v-model='youName' placeholder="您的姓名(必填)" />
						<input type="text"  v-model='tel' placeholder="联系电话(必填)" />
						<input type="text" v-model='wechat'  placeholder="微信号(必填)" />
						<input type="text"  v-model='tiele' placeholder="标题" />
						<textarea placeholder="咨询内容……" v-model='content'></textarea>
						<button class="pointer" @click.prevent="send">发 送</button>
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
	import axios from 'axios'
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
				  pagination: {
			      el: '#topage',
			      clickable :true,
			      loop:true,
			      bulletActiveClass: 'my-bullet-active',
			      renderBullet: function (index, className) {
			          return '<span style="display:inline-block;width:8px;height:8px;margin-right:8px;outline:none;line-height:26px;" class="' + className + ' white  ">' + '</span>';
			        },

			    },
    	  },
    	  backLeft:'0px',
    	  fullHeight:'',
    	  displayBlockShow:false,
    	  displayBlockShowSub:true,
    	  map:'',
    	  marker:'',
    	  companyName:'',
	      youName:'',
			tel:'',
			wechat:'',
			tiele:'',
			content:'',
			anliLIst:[],
			bigIMGSHow:'',
			newList:[],
			zhezhao:[],
			some:0,
			loading:true,

	    }
	  },
	  methods:{
	  	closeZhezhao(){

	  		this.displayBlockShow = !this.displayBlockShow;
	  		this.bigIMGSHow = null;
	  		this.zhezhao = [];
	  	},
	  	websit(websit){
	  		if(!websit){
	  			alert('暂无官网链接')
	  			return
	  		}
	  		window.open(websit)
	  	},
	  	and(ands){
	  		if(!ands){
	  			alert('Android端APP 暂未开放下载')
	  			return
	  		}
	  		window.open(ands)
	  	},
	  	ios(ios){
	  		if(!ios){
	  			alert('IOS端APP 暂未开放下载')
	  			return
	  		}
	  		window.open(ios)
	  	},
	  	todetai(id){
	  		this.$router.push(`/newsDealis/${id}`)
	  	},
	  		send(){
	  			if(!this.youName || !this.tel || !this.wechat || !this.companyName ){
	  				alert('请保证 必填项已经填写')
	  				return
	  			}
	  			var pro ={
	  				name:this.youName,
	  				tel:this.tel,
	  				email:this.wechat,
	  				company_name:this.companyName,
	  				title:this.tiele,
	  				content:this.content
	  			}
	  			axios.post(`${href}/api/msg`,pro)
	  				.then((r)=>{
	  					alert(r.data.msg)
	  				})

	  		},
	  	 	toNews(){
	  	 		this.$router.push('/news')
	  	 	},
	  		turnLeft(){
	  			this.displayBlockShowSub = false
	  			this.bigIMGSHow = null;
	  			this.zhezhao = [{images:[]}]


	  			
	  			setTimeout(()=>{

	  				this.some = this.some -1
	  				this.zhezhao = [this.anliLIst[this.some]]
	  				this.bigIMGSHow = this.zhezhao[0].images[0];
	  				this.displayBlockShowSub = true
	  			},1000)
	  		},
	  		turnRight(){
	  			this.displayBlockShowSub = false
	  			this.bigIMGSHow = null;
	  			this.zhezhao = [{images:[]}]

	  			
	  			setTimeout(()=>{
	  				this.some = this.some + 1
	  			this.zhezhao = [this.anliLIst[this.some]]
	  			this.bigIMGSHow = this.zhezhao[0].images[0];
	  				this.displayBlockShowSub = true
	  			},1000)
	  		},
	  		showDislpay(id){//
	  			this.zhezhao = [{images:[]}]
	  			this.some = id
	  			this.bigIMGSHow = null;
	  			this.zhezhao = [this.anliLIst[this.some]]
	  			this.bigIMGSHow = this.zhezhao[0].images[0];
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
	  					window.open('http://wpa.qq.com/msgrd?v=3&uin=1834633402&site=qq&menu=yes');
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
	  created(){
	  	if(!localStorage.loading || localStorage.loading != 1 ){
	  		this.loading = true
	  	}else{
	  		this.loading = false
	  	}
	  },
	  mounted(){
	  	setTimeout(()=>{
	  		this.loading = false
	  		localStorage.loading = 1
	  	},2000)
	  	axios.get(`${href}/api/project?&page=1&limit=10`)
  		.then(r=>{
  			this.anliLIst = r.data.list
  			// this.zhezhao = [this.anliLIst[this.some]]

  		})


	  		axios.get(`${href}/api/post?&page=1&limit=3`)
				.then(r=>{
					this.newList = r.data.list

					
			})



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
				 autoplay:true,
				 loop:true,
				loopFillGroupWithBlank: true,//在loop模式下，为group填充空白slide  
			   	 pagination: {
			      el: '#pages',
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
.my-bullet-active{
	background-color: #4277ff;
}
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
	
}
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

.displayBlock{
	position: fixed;
	width: 100%;
	z-index: 180;
	top:0;
	overflow: auto;
	background-color: rgba(0,0,0,.4);

	.sk-wave {

  margin: 40px auto;
  width: 50px;
  height: 40px;
  text-align: center;

  font-size: 10px; 
  position: absolute;
		top:0;
		left: 0;
		margin: auto;
		right: 0;
		bottom:0;
}
  .sk-wave .sk-rect {
    background-color: #fff;
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
					background: url('/pc/img/android.png') 15px center,url('/pc/img/ios.png') 60px center;
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
			background-image: url('/pc/img/asideImg.png');
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
		background: url('/pc/img/indexbg.png') no-repeat,-webkit-linear-gradient(left, #1e224f,#3e3076);
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
					height:480px;
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
		background:rgba(252,252,252,1);
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
					background-image: url('/pc/img/displayLi.png');
					background-position: center center;
					background-repeat: no-repeat;
					box-shadow:-3px 7px 76px -10px rgba(45, 75, 93,0.4);
					// background-size: 100% 100%;

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
		background-image: url('/pc/img/indexSubBg.png');
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
					padding-left:17px;
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
