<template>
  <div class="view">
    <div class="wrap">
      <div class="card">
        <button @click="backBtn()" type="button" class="btn-sm btn btn-warning backBtn">Back</button>
        <div class="card-body text-left">
          <h4 class="eventProposal text-center my-3">Event Proposal</h4>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
              <p class="font-weight-bold my-1">Name of Event :</p>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
              <span v-if="!showInput">{{eventName}}</span>
              <span v-if="showInput">
                <input class="inputBox form-control" v-model="eventName" type="text">
              </span>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
              <p class="font-weight-bold my-1">Date of Event :</p>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
              <span v-if="!showInput">{{date}}</span>
              <span v-if="showInput">
                <input class="inputBox form-control" v-model="date" type="text">
              </span>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
              <p class="font-weight-bold my-1">Vanue of Event:</p>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
              <span v-if="!showInput">{{location}}</span>
              <span v-if="showInput">
                <input class="inputBox form-control" v-model="location" type="text">
              </span>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
              <p class="font-weight-bold my-1">Person in Charge:</p>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
              <span v-if="!showInput">{{inCharge}}</span>
              <span v-if="showInput">
                <input class="inputBox form-control" v-model="inCharge" type="text">
              </span>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
              <p class="font-weight-bold my-1">Contact Number:</p>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
              <span v-if="!showInput">{{contactNumber}}</span>
              <span v-if="showInput">
                <input class="inputBox form-control" v-model="contactNumber" type="text">
              </span>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-4 col-12 p-1">
              <p class="font-weight-bold my-1">Purpose :</p>
            </div>
            <div class="col-lg-8 col-md-12 col-sm-8 col-12 p-1">
              <span v-if="!showInput">{{purpose}}</span>
              <span v-if="showInput">
                <textarea class="inputBox form-control" v-model="purpose"></textarea>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInput: false,
      eventName: "abc",
      date: "4/9",
      location: "no4 taman rumah",
      inCharge: "Cindy",
      contactNumber: "0127990020",
      purpose: "we can hsl ppl"
    };
  },
  methods: {
    save() {
      confirm("are you sure?");
      this.showInput = false;
    },
    backBtn() {
      window.history.back();
    }
  }
};
</script>
 <style  lang="scss" scoped>
@import "@/scss/style.scss";
* {
//   border: solid 1px red;
}
.wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .card {
    padding: 32px 0 32px;
    background-color: #eaeded;
    transition: 0.4s ease-in-out;
    width: 75%;
    &:hover {
      //   transform: translate(0, -5px);
    }
    .inputBox {
      display: inline;
      width: 100%;
    }
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
}
.backBtn {
  left: 16px;
  top: 16px;
  position: absolute;
}
</style>
