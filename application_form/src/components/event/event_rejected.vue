<template>
  <div class="EventReject">
    <div class="card">
      <div class="card-header">
        <h3 class="eventTitle">Rejected Application</h3>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead class="thead-dark">
          <tr>
            <th class="tableSmallTitle px-1 py-1" scope="col">No</th>
            <th class="tableSmallTitle px-1 py-1" scope="col">Event Name</th>
            <th class="tableSmallTitle px-1 py-1" scope="col">Person In Charge</th>
            <th class="tableSmallTitle px-1 py-1" scope="col">Phone Number</th>
            <th class="tableSmallTitle px-1 py-1" scope="col">Function</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in items" :key="index">
            <th class="px-0 py-1" scope="row">{{index+1}}</th>
            <td class="px-0 py-1">{{item.eventName}}</td>
            <td class="px-0 py-1">{{item.personInCharge}}</td>
            <td class="px-0 py-1">{{item.phoneNumber}}</td>
            <td class="px-0 py-1">
              <div class="function">
                <button class="btn btn-primary btn-sm px-2 py-0 mx-1">
                  <router-link to="/EventRejectedDetail" class="detailBtn">View</router-link>
                </button>
                <button
                  @click="removeProposalList(index)"
                  class="btn btn-primary btn-sm px-2 py-0 mx-1"
                >Delete</button>
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
  name: "EventReject",
  data() {
    eventName: "";
    personInCharge: "";
    phoneNumber: "";
    return {
      items: [
        {
          eventName: "abcdef",
          personInCharge: "abc",
          phoneNumber: "0127990020"
        },
        { eventName: "abc", personInCharge: "abc", phoneNumber: "0167995533" }
      ]
    };
  },
  methods: {
    removeProposalList(index) {
      let removeList = confirm("Confirm to delete this Proposal?");
      if (removeList) {
        this.items.splice(index, 1);
      }
    }
  }
};
</script>
 <style  lang="scss" scoped>
@import "@/scss/style.scss";
</style>
