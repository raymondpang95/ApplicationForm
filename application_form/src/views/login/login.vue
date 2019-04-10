<template>
  <div class="login">
    <div class="card w-50">
      <div class="card-header text-center">Login</div>
      <div class="card-body">
        <form @submit.prevent="login" action>
          <div class="row mt-3">
            <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
              <p class="font-weight-bold my-1">Username:</p>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
              <span>
                <input v-model="user.username" class="inputBox form-control" type="text">
              </span>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-1">
              <p class="font-weight-bold my-1">Password:</p>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-12 p-1">
              <span>
                <input v-model="user.password" class="inputBox form-control" type="password">
              </span>
            </div>

            <div class="selection mt-5 w-100">
              <button type="button" class="btn btn-outline-dark btn-sm" @click="login()">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      user: {
        username: null,
        password: null
      },
      data: {
        msg: "hello"
      }
    };
  },
  created() {
    if (localStorage.getItem("access_token") != null) {
      this.$router.push({ path: "/navigation" });
      return;
    }
  },
  methods: {
    login() {
      fetch(`${this.$http}/api/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.user)
      })
        .then(res => res.json())
        .then(data => {
          if (data.status === 1) {
            //console.log("success");
            // console.log(data);
            this.setSession(data.token_type, data.access_token);
            this.$router.push({ path: "/navigation" });
          } else {
            alert("Invalid username or password.");
          }
          // console.log(data.message);

          return;
        });
      //.catch(error =>console.log(error));
    },

    setSession(tokenType, accessToken) {
      localStorage.setItem("token_type", tokenType);
      localStorage.setItem("access_token", accessToken);
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  // border: solid 1px;
}
.login {
  background-color: #e5e7e9;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>

