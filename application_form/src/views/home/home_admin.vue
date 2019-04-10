<template>
  <div class="homeSociety">
    <h3 class="homeTitle">Notification</h3>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead class="thead-dark">
          <tr>
            <th class="px-1 py-1 tableSmallTitle" scope="col">No</th>
            <th class="px-1 py-1 tableSmallTitle" scope="col">Title</th>
            <th class="px-1 py-1 tableSmallTitle" scope="col">Content</th>
            <th class="px-1 py-1 tableSmallTitle" scope="col">Date</th>
            <th class="px-1 py-1 tableSmallTitle" scope="col">Time</th>
            <th class="px-1 py-1 tableSmallTitle" scope="col">Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event,index) in events" :key="index">
            <th class="px-1 py-1" scope="row">{{index+1}}</th>
            <td class="px-1 py-1">{{event.event_name}}</td>
            <td class="px-1 py-1">{{event.person_in_charge}}</td>
            <td class="px-1 py-1">{{event.person_in_charge_phone_number}}</td>
            <td class="px-1 py-1"></td>
            <td class="px-1 py-1">
              <div class="function">
                <button class="btn btn-primary btn-sm px-2 py-0 mx-1">
                  <router-link :to="{name:'notificationContent', params: {id: event.id}}" class="detailBtn">View</router-link>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <paginate
      v-model="page"
      :page-count="total_pages"
      :page-range="5"
      :click-handler="gotoPage"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination pg-blue'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :next-class="'page-item'"
      :next-link-class="'page-link'"
      :prev-class="'page-item'"
      :prev-link-class="'page-link'"
    ></paginate>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate";

export default {
  name: "homeAdmin",
  components: {
    Paginate
  },
  created() {
    if (this.$role == "admin") {
      this.getSession();
      this.getEventApplyList();
    }
  },
  data() {
    return {
      data: {
        msg: "event apply",
        id: this.$position
      },
      events: null,
      page: 1,
      total_pages: 1
    };
  },
  methods: {
    getEventApplyList() {
      //this.page = parseInt(this.$route.params.page);
      //console.log(`${this.$http}/api/event?page=${this.page}`);
      fetch(`${this.$http}/api/event?page=${this.page}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.getSession()
        }
        //body: JSON.stringify({status:2})
      })
        .then(response => response.json())
        .then(data => {
          //console.log(data.apply.data);

          this.events = data.apply.data;
          let pagination = data.apply.meta.pagination;
          this.total_pages = pagination.total_pages;
        })
        .catch(error => {
          console.log(error);
        });
    },
    gotoPage(pageNum) {
      // this.$parent.$refs.animation.toggleActive(true);
      //this.$router.push({name: 'home', params: {page: pageNum }});
      this.getEventApplyList();
      console.log("" + this.page);
      console.log("" + pageNum);
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
@import "@/scss/style.scss";
* {
  // border: solid 1px red;
}
.homeTitle {
  text-align: center;
  margin: 16px 0;
  @extend %titleFontSize;
}
</style>