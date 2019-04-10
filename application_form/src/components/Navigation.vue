<template>
  <div class="navigation">
    <div class="wrapper">
      <nav id="sidebar" class="sideBarColor text-left">
        <div class="sidebar-header">
          <h3></h3>
        </div>
        <ul class="list-unstyled mt-5 pl-2">
          <li class="my-1">
            <router-link to="/home">
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
            <router-link to="/login">
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
import Vue from 'vue';
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
  },
  data: function() {
    return {
      id: Number,
      role: String,
      position: Number
    };
  },
  created() {
    this.getSession();
    this.getUserDetail();
  },
  methods: {
    getUserDetail() {
      fetch(`${this.$http}/api/user`, {
        method: "GET",
        headers: {
          Authorization: this.getSession()
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);

          Vue.prototype.$eventStatus = "apply";

          this.id = data.user.id;
          Vue.prototype.$id = this.id;

          this.role = data.user.role;
          Vue.prototype.$role = this.role;
          console.log(this.role);

          if (data.user.position !== null) {
            this.position = data.user.position;
            Vue.prototype.$position = this.position;
            // console.log(this.$pos);
          }
        });
    },
    logout() {
      console.log("logout");

      fetch(`${this.$http}/api/adminlogout`, {
        method: "GET",
        headers: {
          Authorization: this.getSession()
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.status == 0) {
            console.log("logout success");
            localStorage.clear();

            this.$router.push({ name: "login" });
          }
        });
    },
    getSession() {
      return (
        localStorage.getItem("token_type") +
        " " +
        localStorage.getItem("access_token")
      );
    }
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
