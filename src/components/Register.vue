<template>
  <div>
      <x-header :left-options="{backText: ''}">{{title}}</x-header>
    <div class="vux-demo">
        <div style="padding:15px;">
       <group>
      <x-input name="username" placeholder="请输入姓名" v-model="username" is-type="china-name"></x-input>
    </group>

    <group>
      <x-input name="mobile" placeholder="请输入手机号码" v-model="mobile" keyboard="number" is-type="china-mobile"></x-input>
    </group>

    <group>
      <x-input name="email" placeholder="请输入邮箱地址" v-model="email" is-type="email"></x-input>
    </group>
    <br/>

      <x-button @click.native="iconType = 'success'" type="primary">注册</x-button>
    </div>
</div>
    
  </div>
</template>

<script>
import { Group,XInput, XButton, XHeader } from "vux";
export default {
  components: {
    Group,
    XInput,
    XButton,
    XHeader
  },
  data() {
    return {
      title: "注册",
      msg: "欢迎注册页面",
      username: "",
      mobile: "",
      email: ""
    };
  },
  methods: {
     
  }
  
};
</script>
