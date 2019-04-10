<template>
  <div class="view">
    <div class="wrap">
      <div class="card mb-2 py-1">
        <div class="selectionTop">
          <button
            @click="backBtn()"
            type="button"
            class="btn-sm btn btn-warning mx-2 py-1 px-2 navBtn"
          >Back</button>
          <div>
            <p class="eventTitle m-0">Reject</p>
          </div>
          <button
            type="button"
            class="btn btn-outline-info btn-sm mx-2 py-1 px-2 navBtn"
            @click="showInput=true"
          >Edit</button>
        </div>
      </div>
      <div class="card">
        <div class="card-body text-left">
          <h4 class="eventProposal text-center mb-4">Event Proposal</h4>
          <form action>
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
          </form>
          <div class="selection mt-5">
            <button type="button" class="btn btn-outline-dark btn-sm" @click="save()">Save</button>
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
      confirm("confirm to save?");
      this.showInput = false;
    },
    backBtn() {
      window.history.back();
    },
 
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
    padding: 24px 0 32px;
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
.eventTitle {
  font-size: 32px;
  color: red;
  font-weight: 700;
  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 420px) {
    font-size: 16px;
  }
}
.navBtn {
  line-height: 1.2;
}
</style>
