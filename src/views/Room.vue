<template>
    <div id="room">
        <div class="container-fluid">
            <div class="row">
                <div class="col-6">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <button type="button" class="btn btn-info">CREATE ROOM</button>
                                <button type="button" class="btn btn-info" @click="logout">LOGOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="container">
                        <br>
                        <h4><b> ALL ROOM(S) </b></h4>
                        <a v-for="(room, i) in rooms" :key="i" href=""><li>{{room.id}}</li></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import db from '../firebase/firebase'

export default {
    data(){
        return {
            rooms : []
        }
    },
    mounted(){
    // console.log('coba play music');
        db.collection('rooms').onSnapshot((querySnapshot)=>{
        let arrTemp = []
        querySnapshot.forEach(doc => {
            arrTemp.push({id : doc.id, ...doc.data()})
        });
        this.rooms = arrTemp
            console.log(JSON.stringify(this.rooms,null,2));
        })
    },
    methods : {
        logout(){
            localStorage.clear()
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
#room {
    height: 100vh;
    background-image: url("https://cdn2.alphr.com/sites/alphr/files/2018/09/xbox_one_keyboard_and_mouse_support.jpg");
    background-size:cover;
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
    justify-content:flex-start;
    flex-wrap: wrap;
    
    /* max-width: 100%; */
}
.col-6 .container {
    margin: 20px;
    color:white;
    /* border: 1px yellow solid; */
    border-radius: 10%;
    background-color: rgba(0,0,0,0.5);
}
.col-6 .container li {
    border-bottom: 1px dotted grey;
    margin: 10px;
    list-style: none;
}
.col-6 .container a{
    color: aqua;
    font-weight: 500; 
}
</style>
