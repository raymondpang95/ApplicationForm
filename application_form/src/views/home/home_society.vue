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
          <tr v-for="(notification,index) in notifications" :key="index">
            <th class="px-1 py-1" scope="row">{{index+1}}</th>
            <td class="px-1 py-1">{{notification.title}}</td>
            <td class="px-1 py-1">{{notification.content}}</td>
            <td class="px-1 py-1">{{notification.time.date}}</td>
            <td class="px-1 py-1"></td>
            <td class="px-1 py-1">
              <div class="function">
                <button class="btn btn-primary btn-sm px-2 py-0 mx-1">
                  <router-link to="/notificationContent" class="detailBtn">View</router-link>
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
  name: "homeSociety",
  components: {
    Paginate
  },
  created() {
    if (this.$role == "society") {
      this.getSession();
      this.getNotification();
    }
  },
  data() {
    return {
      data: {
        msg: "notification"
      },
      notifications: null,
      page: parseInt(this.$route.params.page),
      total_pages: 1
    };
  },
  methods: {
    getNotification() {
      fetch(
        `${this.$http}/api/society/${this.$id}/notification?page=${this.page}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: this.getSession()
          }
          //body: JSON.stringify({status:2})
        }
      )
        .then(response => response.json())
        .then(data => {
          //console.log(data.data);

          this.notifications = data.data;
          let pagination = data.meta.pagination;
          this.total_pages = pagination.total_pages;
        })
        .catch(error => {
          console.log(error);
        });
    },
    gotoPage(pageNum) {
      this.getNotification();
      // console.log(""+this.page);
      //  console.log(""+pageNum);
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
