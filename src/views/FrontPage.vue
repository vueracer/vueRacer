<template>
  <div id="front">
    <div class="container">
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-light animated infinite pulse" @click="login">
            <img
              src="http://www.xanjero.com/wp-content/uploads/2017/05/Google-mobile-image-search-filters.png"
              alt="image"
            >
            <b>
              <small>LOGIN</small>
            </b>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    created() {
        
    },
    methods : {
        login(){
            console.log('login button')
            this.$store.dispatch('login')
            
        }
    }
}
</script>

<style scoped>
#front {
  height: 100vh;
  /* background-color: black; */
  background-image: url("https://embedwistia-a.akamaihd.net/deliveries/2132105fc1db02f794610c4ab3cce7010f911ff1.jpg?image_crop_resized=1280x800");
  background-size:cover;
  /* height: 100%; */

}

#front .container {
  display: flex;
  justify-content: center;
}

.row {
  /* border : 1px solid white; */
  height: 100vh;
  align-content:center;
  
}

.btn {
  height: 155px;
  width: 150px;
  border-radius: 20%;
  margin-bottom: 20px;
}

img {
  width: 100%;
}
</style>
