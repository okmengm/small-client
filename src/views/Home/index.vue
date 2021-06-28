<template>
  <div>
    <!--    全局注册组件-->
    <TypeNav></TypeNav>
    <!--    本地注册组件-->
    <ListContainer></ListContainer>

    <Like></Like>
    <Rank></Rank>
    <Floor></Floor>
    <TodayRecommend></TodayRecommend>
  </div>
</template>

<script>


import ListContainer from "@/views/Home/ListContainer";
import TodayRecommend from "@/views/Home/TodayRecommend";
import Rank from "@/views/Home/Rank/Rank";
import Like from "@/views/Home/Like/Like";
import Floor from "@/views/Home/Floor/Floor";


import { get_index } from "@/api";

export default {
  name: "Home",
  components: { Floor, Like, Rank, TodayRecommend, ListContainer },
  mounted() {

    //挂载时请求数据
    get_index().then(reslut => {
      console.log(reslut);
    });

  }
};


</script>

<style scoped>

</style>
