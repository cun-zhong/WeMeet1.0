<template>
	<view class="common-list u-f animated fadeIn fast">
		<view class="common-list-l">
			<image @tap.stop="openSpace" :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
		<view class="common-list-r">
			<view>
				<view class="u-f-ac u-f-jsb">
					<view class="u-f-ac">
						{{item.username}} 
						<tag-sex-age :sex="getSex" :age="getAge"></tag-sex-age>
					</view>
					<view v-show="!item.isguanzhu" @tap="guanzhu" 
					class="icon iconfont icon-zengjia">关注</view>
				</view>
				<view class="common-list-r-time" v-show="item.create_time">{{item.create_time}}</view>
			</view>
			<view>{{item.content}}</view>
			<view class="u-f-ajc" style="flex-direction: column;">
				<!-- 图片 -->
				<block v-for="(pic,index) in item.morepic" :key="index">
					<image :src="pic" 
					mode="widthFix" 
					lazy-load 
					style="margin-bottom: 20upx;"
					@tap="imgdetail(index)"></image>
				</block>
				<!-- 视频 -->
				<template v-if="item.video">
					<view class="common-list-play icon iconfont icon-bofang">
					</view>
					<view class="common-list-playinfo">
						{{item.video.looknum}} 次播放 {{item.video.long}}
					</view>
				</template>
				<!-- 分享 -->
				<view class="common-list-share u-f-ac" v-if="item.share">
					<image :src="item.share.titlepic" 
					mode="widthFix" lazy-load></image>
					<view>{{item.share.title}}</view>
				</view>
			</view>
			<view class="u-f-ac u-f-jsb">
				<view>{{item.path}}</view>
				<view class="u-f-ac">
					<view class="icon iconfont icon-zhuanfa">
					{{item.sharenum}}</view>
					<view class="icon iconfont icon-pinglun1">
					{{item.commentnum}}</view>
					<view class="icon iconfont icon-dianzan1" @tap="caozuo('ding')">
					{{item.goodnum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from "../common/tag-sex-age.vue"
	export default {
		components:{
			tagSexAge
		},
		props:{
			item:Object,
		},
		computed: {
			getSex() {
				return this.item.sex;
			},
			getAge(){
				return this.item.age;
			}
		},
		methods:{
			openSpace(){
				uni.navigateTo({
					url: '../../pages/user-space/user-space?userid='+this.item.userid
				});
			},
			async guanzhu(){
				try{
					let [err,res] = await this.$http.post('/follow',{
						follow_id:this.item.userid
					},{
						token:true,
						checkToken:true,
						checkAuth:true
					});
					// 错误处理
					if (!this.$http.errorCheck(err,res)) return;
					// 通知首页修改数据
					uni.showToast({ title: '关注成功' });
					let resdata = {
					 	type:"guanzhu",
					 	userid:this.item.userid,
					 	data:true
					};
					// 通知父组件
					this.$emit('changeevent',resdata);
					// 全局通知
					uni.$emit('updateData',resdata);
				}catch(e){ return; }
			},
			imgdetail(index){
				uni.previewImage({
					current:index,
					urls:this.item.morepic
				})
			},
			async caozuo(type){
				let index = (type === 'ding') ? 1 : 2; // 当前操作
				let [err,res] = await this.$http.post('/support',{
					post_id:this.item.id,
					type:index-1
				},{
					token:true,
					checkToken:true,
					checkAuth:true
				});
				if (!this.$http.errorCheck(err,res)) return;
				uni.showToast({ title: "顶成功" });
				// 通知父组件
				let resdata = {
					type:"support",
					post_id:this.item.id,
					do:type
				};
				this.$emit('changeevent',resdata);
				// 通知全局
				return uni.$emit("updateData",resdata);
			},
		}
	}
</script>

<style scoped>
@import "../../common/list.css";
.common-list-r{
	border-bottom: 0;
}
.common-list{
	border-bottom: 1upx solid #EEEEEE;
}
.common-list-r-time{
	padding: 15upx 0;
	color: #CCCCCC!important;
	font-size: 25upx;
	background: #FFFFFF!important;
}
.common-list-r>view:nth-child(1)>view:nth-child(1)>view:first-child{
	color: #999999;
	font-size: 32upx;
}

.common-list-r>view:nth-child(1)>view:nth-child(1)>view:last-child{
	background: #EEEEEE;
	padding: 0 10upx;
	font-size: 26upx;
}
</style>
