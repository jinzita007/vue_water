<template>
  <div>
  
    <div class="vux-demo">
      <swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    <br/>
    <tab v-model="index01" prevent-default @on-before-index-change="switchTabItem">
      <tab-item selected>已发货</tab-item>
      <tab-item>未发货</tab-item>
      <tab-item>全部订单</tab-item>
    </tab>
    </div>
    
  </div>
</template>

<script>
const baseList = [
  {
    url: "javascript:",
    img: "https://static.vux.li/demo/1.jpg"
  },
  {
    url: "javascript:",
    img: "https://static.vux.li/demo/2.jpg"
  },
  {
    url: "javascript:",
    img: "https://static.vux.li/demo/3.jpg"
  }
];
import { Loading, Group, Tab, TabItem,Sticky, Divider, XButton,Swiper,SwiperItem} from "vux";
export default {
  components: {
    Loading,
    Group,
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem,
   


  },
  data() {
    return {
      index01: 0,
      demo03_list: baseList
    };
  },
  methods: {
    switchTabItem(index) {
      console.log("on-before-index-change", index);
      this.$vux.loading.show({
        text: "loading"
      });
      setTimeout(() => {
        this.$vux.loading.hide();
        this.index01 = index;
      }, 1000);
    }
  }
};
</script>