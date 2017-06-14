<template>
  <div class="wrapper" @click="update">
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>
    <a class="button" href="http://dotwe.org/raw/dist/3e0e40f9ddad79f98cd236753965ffd8.js">
      <text class="text">Jump</text>
    </a>
    <switch @change="changeBt"></switch>
    <text>currentStatus:{{currentCheck}}</text>
  </div>
</template>

<style>
  .wrapper {
      align-items: center;
  }
  .title {
      font-size: 48px;
  }
  .logo {
      width: 360px; height: 82px;
  }
  .button {
      width: 450px;
      margin-top: 30px;
      margin-left: 150px;
      padding-top: 20px;
      padding-bottom: 20px;
      border:10px solid blue;
      border-radius:5px;
      background-color:#ddd;
  }
  .text {
      font-size: 60px;
      color: blue;
      text-align: center;
  }
</style>

<script>
  export default {
      data: {
          logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
          target: 'World',
          currentCheck:""
      },
      methods: {
          update: function (e) {
            this.target = 'Weex'
            console.log('target:', this.target)
          },
          changeBt(event){
              this.currentCheck = event.value;
          }
      }
  }
</script>
