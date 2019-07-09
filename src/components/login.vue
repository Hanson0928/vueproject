<template>
  <div class="login" v-show="flag">
    <form class="form-horizontal">
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="inputEmail3"
            placeholder="请输入用户名"
            v-model="uname"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">密&nbsp;&nbsp;码</label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="inputPassword3"
            placeholder="请输入密码"
            v-model="upwd"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox" />
              <span class="txt">记住我,下次自动登录</span>
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default" @click.prevent="submitBtn">登录</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      flag: true,
      uname: "",
      upwd: ""
    };
  },
  methods: {
    submitBtn() {
      if (this.uname && this.upwd) {
       setTimeout(()=>{
         location.href=window.location+'info'
       },1000)
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 800px;
  height: 500px;
  margin: 100px auto;
  box-shadow: -1px -1px 12px #2c3e50;
  padding: 10px;
  padding-left: 90px;
}
.txt {
  font-size: 12px;
}
.form-horizontal {
  margin: 80px auto;
  width: 700px;
}
</style>
