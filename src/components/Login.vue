<template>

    <div>
        <x-header :left-options="{backText: ''}">{{title}}</x-header>
    <div class="vux-demo">
        <div style="padding:15px;">
   
    <group>
      <x-input name="mobile" placeholder="请输入手机号码" v-model="mobile" keyboard="number" is-type="china-mobile"></x-input>
    </group>

    <group>
      <x-input name="email" placeholder="请输入邮箱地址" v-model="email" is-type="email"></x-input>
    </group>
    <br/>

      <x-button @click.native="iconType = 'success'" type="primary">登录</x-button>
      <br>
      <router-link :to="'register'">注册</router-link>
    </div>
</div>
    
  </div>
</template>

<script>
import { Group,XInput, XButton, XHeader} from "vux";
export default {
  components: {
    Group,
    XInput,
    XButton,
    XHeader
  },
  data() {
    return {
      title:"登录",
      mobile: "",
      email: ""
    };
  },
  methods: {
     
  }
  
};
</script>