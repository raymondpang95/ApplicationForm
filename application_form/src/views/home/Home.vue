<template>
  <div class="home">
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
          <tr v-for="(item,index) in items" :key="index">
            <th class="px-1 py-1" scope="row">{{index+1}}</th>
            <td class="px-1 py-1">{{item.title}}</td>
            <td class="px-1 py-1">{{item.content}}</td>
            <td class="px-1 py-1">{{item.date}}</td>
            <td class="px-1 py-1">{{item.time}}</td>
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
  </div>
</template>

<script>
export default {
  data() {
    title: "";
    content: "";
    date: "";
    time: "";
    return {
      items: [
        {
          title: "abdasdasc",
          content: "abcdasdasdas",
          date: "4/20/19",
          time: "4.0"
        },
        { title: "abc", content: "abc", date: "4/20/19", time: "4.0" },
        { title: "abc", content: "abc", date: "4/20/19", time: "4.0" },
        { title: "abc", content: "abc", date: "4/20/19", time: "4.0" }
      ]
    };
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
