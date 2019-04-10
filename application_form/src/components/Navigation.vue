<template>
  <div class="navigation">
    <div class="wrapper">
      <nav id="sidebar" class="sideBarColor text-left">
        <div class="sidebar-header">
          <h3></h3>
        </div>

        <ul class="list-unstyled mt-5 pl-2">
          <li class="my-1">
            <router-link to="/">
              <font-awesome-icon class="mr-3" icon="home"/>Home
            </router-link>
          </li>
          <li class="my-1">
            <router-link to="/event/EventApply">
              <font-awesome-icon class="mr-3" icon="list"/>Event
            </router-link>
          </li>
          <li class="my-1">
            <router-link to="/notification">
              <font-awesome-icon class="mr-3" icon="bell"/>Notification
            </router-link>
          </li>
          <li class="my-1">
            <router-link to="/setting">
              <font-awesome-icon class="mr-3" icon="cog"/>Setting
            </router-link>
          </li>
          <li class="my-1">
            <router-link to="/logout">
              <font-awesome-icon class="mr-3" icon="sign-in-alt"/>Logout
            </router-link>
          </li>
        </ul>
      </nav>

      <div id="content" class="m-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-light px-0 py-2">
          <div class="container-fluid">
            <button type="button" id="sidebarCollapse" class="btn btn-sm btn-info">Hide</button>
          </div>
        </nav>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "navigation",
  mounted() {
    this.$nextTick(() => {
      $(".about").hide();
      $(".about").fadeIn("slow");

      $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
      });
    });
  }
};
</script>
<style  lang="scss" scoped>
@import "../views/about.scss";
@import "../scss/style.scss";
// @import "../scss/project_variable.scss";
* {
  // border: solid 1px red;
}
.topHideBtn {
}
</style>
