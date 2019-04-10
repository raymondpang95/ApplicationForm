<template>
  <div class="view">
    <div class="wrap">
      <div class="card p-2">
        <div class>
          <p class="eventTitle m-0">Setting</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6  col-12">
          <div class="card mt-3">
            <div class="card-body text-left">
              <h4 class="eventProposal text-center mb-4">User Profile</h4>
              <form action>
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
                    <p class="font-weight-bold my-1">Student ID:</p>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
                    <span v-if="!showInput">{{studentId}}</span>
                    <span v-if="showInput">
                      <input class="inputBox form-control" v-model="studentId" type="text">
                    </span>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
                    <p class="font-weight-bold my-1">Name(CN):</p>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
                    <span v-if="!showInput">{{nameCN}}</span>
                    <span v-if="showInput">
                      <input class="inputBox form-control" v-model="nameCN" type="text">
                    </span>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
                    <p class="font-weight-bold my-1">Name(ENG):</p>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
                    <span v-if="!showInput">{{nameENG}}</span>
                    <span v-if="showInput">
                      <input class="inputBox form-control" v-model="nameENG" type="text">
                    </span>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
                    <p class="font-weight-bold my-1">Society Name:</p>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
                    <span v-if="!showInput">{{societyName}}</span>
                    <span v-if="showInput">
                      <input class="inputBox form-control" v-model="societyName" type="text">
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
                </div>
              </form>
              <div class="selection mt-5">
                <button
                  type="button"
                  class="btn btn-outline-info btn-sm mx-2"
                  @click="showInput=true"
                >Edit</button>
                <button type="button" class="btn btn-outline-dark btn-sm" @click="save()">Save</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6  col-12">
          <div class="card mt-3">
            <div class="card-body text-left">
              <h4 class="eventProposal text-center mb-4">Security</h4>
              <form action>
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
                    <p class="font-weight-bold my-1">Username:</p>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
                    <span  v-if="!showSecurityInput">{{username}}</span>
                    <span v-if="showSecurityInput">
                      <input class="inputBox form-control" v-model="username" type="text">
                    </span>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
                    <p class="font-weight-bold my-1">Old Password:</p>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
                    <span v-if="!showSecurityInput">{{oldPassword}}</span>
                    <span v-if="showSecurityInput">
                      <input class="inputBox form-control" v-model="oldPassword" type="text">
                    </span>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
                    <p class="font-weight-bold my-1">New Password:</p>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
                    <span v-if="!showSecurityInput">{{newPassword}}</span>
                    <span v-if="showSecurityInput">
                      <input class="inputBox form-control" v-model="newPassword" type="text">
                    </span>
                  </div>
                </div>
              </form>
              <div class="selection mt-5">
                <button
                  type="button"
                  class="btn btn-outline-info btn-sm mx-2"
                  @click="showSecurityInput=true"
                >Edit</button>
                <button
                  type="button"
                  class="btn btn-outline-dark btn-sm"
                  @click="saveSecurity()"
                >Save</button>
              </div>
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
      showSecurityInput: false,
      studentId: "abc",
      nameCN: "4/9",
      nameENG: "no4 taman rumah",
      societyName: "Cindy",
      contactNumber: "0127990020",
      username: "we can hsl ppl",
      oldPassword: "",
      newPassword: ""
    };
  },
  methods: {
    save() {
      confirm("confirm to save?");
      this.showInput = false;
    },
    saveSecurity() {
      confirm("confirm to save?");
      this.showSecurityInput = false;
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
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
  // align-items: center;
  .card {
    padding: 32px 0 32px;
    background-color: #eaeded;
    transition: 0.4s ease-in-out;
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
  color: #2ecc71;
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
