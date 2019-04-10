<template>
  <div class="event">
    <div class="jumbotron jumbotron-fluid rounded p-3">
      <div class="container">
        <div class="nav mx-n3">
          <router-link to="/event/EventAdd">
            <button type="button" class="btn btn-outline-dark btn-sm mx-1">Add</button>
          </router-link>
          <router-link to="/event/EventApply">
            <button type="button" class="btn btn-outline-primary btn-sm mx-1">Apply</button>
          </router-link>
          <router-link to="/event/EventApproved">
            <button type="button" class="btn btn-outline-success btn-sm mx-1">Approved</button>
          </router-link>
          <router-link to="/event/EventRejected">
            <button type="button" class="btn btn-outline-danger btn-sm mx-1">Rejected</button>
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "event",
  components: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>
 <style  lang="scss" scoped>
@import "@/scss/style.scss";
* {
  //   border: solid 1px;
}
.nav {
  display: flex;
  justify-content: center;
}
</style>
