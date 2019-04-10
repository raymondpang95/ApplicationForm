<template>
  <div class="view">
    <div class="wrap">
      <div class="card p-2">
        <h3 class="eventTitle">Add Event</h3>
      </div>
      <div class="card mt-2 py-2 px-2">
        <div class="card-body text-left">
          <h4 class="eventProposal text-center my-3">Event Proposal</h4>
          <form action>
            <div class="row mt-3">
              <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
                <p class="font-weight-bold my-1">Name of Event :</p>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
                <span>
                  <input class="inputBox form-control" type="text">
                </span>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
                <p class="font-weight-bold my-1">Date of Event :</p>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
                <span>
                  <input class="inputBox form-control" type="text">
                </span>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
                <p class="font-weight-bold my-1">Vanue of Event:</p>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
                <span>
                  <input class="inputBox form-control" type="text">
                </span>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
                <p class="font-weight-bold my-1">Person in Charge:</p>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
                <span>
                  <input class="inputBox form-control" type="text">
                </span>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
                <p class="font-weight-bold my-1">Contact Number:</p>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
                <span>
                  <input class="inputBox form-control" type="text">
                </span>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-4 col-12 p-1">
                <p class="font-weight-bold my-1">Purpose :</p>
              </div>
              <div class="col-lg-8 col-md-12 col-sm-8 col-12 p-1">
                <span>
                  <textarea class="inputBox form-control"></textarea>
                </span>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
                <p class="font-weight-bold my-1">File Upload:</p>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
                <div class="input-group mb-3">
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    >
                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                  </div>
                </div>
              </div>
              <div class="selection mt-5 w-100">
                <button type="button" class="btn btn-outline-dark btn-sm" @click="save()">Save</button>
              </div>
            </div>
          </form>
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
    // border: solid 1px red;
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
