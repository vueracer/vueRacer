<template>
  <div id="room">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <div class="container">
            <div class="row" style="height:100%; align-content:center;">
              <div
                v-if="!isnewForm"
                class="col justify-content-center"
                style="align-content:center; display:flex"
              >
                <button @click="logout" type="button" class="btn btn-danger">
                  <strong>Log Out</strong>
                </button>
                <button @click="isnewForm = true" type="button" class="btn btn-primary">
                  <strong>
                    <i class="fas fa-plus"></i> Room
                  </strong>
                </button>
              </div>
              <div
                v-if="isnewForm"
                class="col justify-content-center"
                style="align-content:center; display:flex"
              >
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Room Name</label>
                    <input
                      v-model="newForm.name"
                      type="text"
                      class="form-control"
                      placeholder="Room name"
                    >
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      v-model="newForm.password"
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    >
                  </div>
                  <button @click="isnewForm = false" type="button" class="btn btn-danger">
                    <strong>Back</strong>
                  </button>
                  <button @click.prevent="createRoom" type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div v-if="!rooms" class="container">
            <br>
            <h4>
              <b>ALL ROOMS</b>
            </h4>
            <br>
            <div class="d-flex justify-content-center">
              <div v-for="i in 3" :key="i" class="spinner-grow text-primary" role="status">
                <span class="sr-only"></span>
              </div>
            </div>
          </div>
          <div v-else-if="rooms.length > 0" class="container">
            <br>
            <h4>
              <b>ALL ROOMS</b>
            </h4>
            <a @click="joinRoom(room.id)" v-for="(room, i) in rooms" :key="i">
              <li>{{room.id}}</li>
            </a>
          </div>
          <div v-else-if="rooms.length === 0" class="container">
            <br>
            <h4>
              <b>ALL ROOMS</b>
            </h4>

            <li style="color:pink">room empty !</li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase/firebase";

export default {
  data() {
    return {
      rooms: null,
      newForm: {
        name: "",
        password: ""
      },
      isnewForm: false
    };
  },
  mounted() {
    // console.log('coba play music');
    db.collection("rooms").onSnapshot(querySnapshot => {
      let arrTemp = [];
      querySnapshot.forEach(doc => {
        arrTemp.push({ id: doc.id, ...doc.data() });
      });
      this.rooms = arrTemp;
    //   console.log(JSON.stringify(this.rooms, null, 2));
    });
  },
  methods: {
    
    logout() {
      localStorage.clear();
      this.$store.commit("logout", false);
      this.$router.push("/login");
    },
    createRoom() {
      let obj = {
        raceStatus: "deployed",
        [localStorage.getItem("userName")]: {
          action: "naik",
          position: 20,
          ready: false,
          username: localStorage.getItem("userName")
        }
      };

      let flagDuplicate = false;
      this.rooms.map(el => {
        if (el.id == this.newForm.name) {
          flagDuplicate = true;
        }
      });

      if (flagDuplicate) {
        this.$swal("Duplicate room name", "Choose another room name", "error");
      } else {
        db.collection("rooms")
          .doc(this.newForm.name)
          .set(obj)
          .then(() => {
            // router.push({path : `/gamePage/${this.name}`})
          })
          .catch(function(error) {
            //this.$swal('Ooppss..', `${error.Message}`, 'error')
            console.error("Error writing document: ", error);
          });
      }
      this.isnewForm = false
    },
    joinRoom(roomName) {
      var cityRef = db.collection("rooms").doc(roomName);
      let obj = {
        [localStorage.getItem("userName")]: {
          action: "naik",
          position: 20,
          ready: false,
          username: localStorage.getItem("userName")
        }
      };

      var setWithMerge = cityRef.set(fieldBaru, { merge: true });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#room {
  height: 100vh;
  background-image: url("https://cdn2.alphr.com/sites/alphr/files/2018/09/xbox_one_keyboard_and_mouse_support.jpg");
  background-size: cover;
}
.row {
  /* border: 1px blue solid; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.col-6 {
  height: 100vh;
  /* border: 1px green solid; */
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  /* max-width: 100%; */
}
.col-6 .container {
  margin: 20px;
  color: white;
  /* border: 1px yellow solid; */
  border-radius: 10%;
  background-color: rgba(0, 0, 0, 0.5);
}
.col-6 .container li {
  border-bottom: 1px dotted grey;
  margin: 10px;
  list-style: none;
}
.col-6 .container a {
  color: aqua;
  font-weight: 500;
}
.btn {
  margin: 10px;
}
.container a:hover {
    cursor: pointer;
}
</style>
