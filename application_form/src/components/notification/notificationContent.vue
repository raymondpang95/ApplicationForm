<template>
  <div class="container">
    <div class="card pb-5 pt-5">
      <button v-on:click="backBtn()" type="button" class="position-absolute backBtn btn btn-sm btn-primary ">Back</button>
      <h3 class="title">报告内容</h3>
      <div class="subtitle">
        <h5>主题：激励讲座申请</h5>
        <div class="wrap">
          <h5>日期:4/8/2019</h5>
          <h5>时间：12.00PM</h5>
        </div>
      </div>
      <div
        class="content mt-5 card mx-5"
      >dsadasdasdsadsadasdasdasdas dsdsadas dasdsadas asdasdsadasd dasdasdasdsa ds a</div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    backBtn(){
      window.history.back();
    }
  }
};
</script>
 <style  lang="scss" scoped>
.subtitle {
  display: flex;
  justify-content: space-around;
  .wrap {
    display: flex;
  }
}
.card {
  .backBtn {
    top: 20px;
    left: 20px;
  }
}

* {
  //  border: solid 1px;
}
</style>
