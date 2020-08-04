<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <button @click="getMsg">请求1 get</button>
    <br>
    <button @click="postMethod1">请求2 post</button>
    <button @click='topagea'>跳转pagea页面</button>
    <button @click="getJssdk">请求JSSDK</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import qs from 'qs'
import {login,register} from '@/api'
export default {
  name: 'Home',
  methods:{
    async getJssdk () {
      let url =encodeURIComponent(location.href)
      console.log(encodeURIComponent(location.href),789789);
      var res = await this.$axios({
        method:'get',
        url:'/jssdk',
        params:{
          url
        }
      })
      let {timestamp,noncestr,signature} = res.data
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wxa21e35fe1449101b', // 必填，公众号的唯一标识
        timestamp, // 必填，生成签名的时间戳
        nonceStr:noncestr, // 必填，生成签名的随机串
        signature,// 必填，签名
        jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表
      })



      wx.ready(function(){
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        console.log('验证成功111111');
        wx.scanQRCode({
          needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: function (res) {
            var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
            console.log('扫描成功');
          }
        });
      });

      wx.error(function(res){
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        console.log('验证失败'+res);
      });


    },
    topagea () {
      this.$router.push({
        name:'pagea',
      })
    },
    async postMethod1 () {
      let obj = {
        name:'张三',
        age:'18'
      }
      // console.log(qs.stringify(obj, {indices: false}));
      const res = await register(obj)
      console.log(res);
    },
    async getMsg () {
      console.log(11);
      // this.$axios.get('/login')
      const res = await login()
      console.log(res);
    }
  },
  components: {
    // HelloWorld
  }
}
</script>
<style lang="less" scope>

</style>
