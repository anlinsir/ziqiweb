<template>
	<div class="FooterWarp rb Warper">
		<div class="footer bb rb warp">
			<div class="shadowText  " style="margin-top:30px;">
				<p style="color:rgba(228,228,242,0.1);" class="back">合作伙伴</p>
				<p class="forword white ">合作伙伴</p>
			</div>

			<p class="miniTitle">优质的合作资源</p>

			<div class="lh rb imgs">
				<dl class="flex">
					<dt style="position:relative">
						<img src="/pc/img/footerLogo.png">
						<img style="width:14px;height:14px;position:absolute;right: -60px;top: 20px;" src="/pc/img/close.png" >
					</dt>
					<dd class="flex"> 
						<!--   -->
						<span  class="rb lh" :style="{backgroundPosition:ii.imgp,marginBottom:id > 3 ? '30px' :''}" v-for="(ii,id) in 
						[{imgp:'-6px -12px',href:'https://aws.amazon.com/cn/?nc2=h_lg'},{imgp:'-234px -4px',href:'https://soduoduo.com/'},{imgp:'-463px -4px',href:'https://www.8btc.com/'},{imgp:'-695px -4px',href:'https://www.jinse.com/'},{imgp:'-0px -95px',href:'https://www.hbg.com/zh-cn/'},{imgp:'-231px -95px',href:'https://www.aliyun.com/?utm_content=se_1000301881'},{imgp:'-463px -95px',href:'https://www.okcoin.com/'},{imgp:'-705px -91px',href:'http://www.linkedin.com/company/kybernetwork/'}]">
							<a :href="ii.href" target='_blank' :title="ii.href"></a>
						</span>
					</dd>
				</dl>
			</div>

			<p class="miniTitle2">© 2014 成都子奇科技有限公司 蜀ICP备13026114号-7</p>
		</div>
	</div>
</template>



<script>
	export default{
		data(){
			return({

			})
		},
	}
</script>




<style lang="scss" scoped>
	.FooterWarp{
		height: 432px;
		background:#0D0F26;
		>.footer{
			padding-top: 54px;
			height: 432px;
			background:#0D0F26;
			text-align: center;
			>.shadowText{
				
				width: 241px;
				display: inline-block;				
				margin-bottom: 16px;
				>.back{
					font-size: 60px;
					color:rgba(49,51,69,1);
					z-index: 1;
				}
				>.forword{
					position: relative;
					z-index: 2;
				}
			}
			>.miniTitle{
				font-size:16px;
				margin-bottom: 30px;
				color:rgba(130,132,157,1);
			}
			>.imgs{
				text-align: left;
				width: 1100px;
				margin-bottom: 10px;
				>dl{
					>dt{
						margin-right: 94px;
					}
					>dd{
						flex-wrap: wrap;
						&:nth-child(4n){
							margin-right: 0px;
						}
						>span{
							background-image: url('/pc/img/footerImgs.png');
							width: 144px;
							height: 60px;
							margin-right: 50px;
							margin-bottom: 40px;
							background-repeat: no-repeat;
							>a{
								display: inline-block;
								width: 100%;
								height: 100%;

							}

						}
					}
				}
			}
			>.miniTitle2{
				font-size:14px;
				color:rgba(130,132,157,1);

			}

		}
	}
</style>