<template>
  <div class="home">
    <HomeSociety v-if="this.role==='society'"></HomeSociety>
    <HomeAdmin v-else-if="this.role=='admin'"></HomeAdmin>
  </div>

</template>

<script>
import HomeSociety from './home_society.vue';
import HomeAdmin from './home_admin.vue';

export default {
  name:'homeSociety',
  components:{
    HomeSociety,HomeAdmin
  },
  data:function(){
    return{
       role:this.$parent.role,
       position:this.$parent.position
    }
  }
};
</script>
 <style  lang="scss" scoped>
@import "@/scss/style.scss";
* {
  // border: solid 1px red;
}
.homeTitle {
  margin: 16px 0;
  @extend %titleFontSize;
}
</style>
