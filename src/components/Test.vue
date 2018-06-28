<template>
    <div class="test">
        <h1>{{title}}</h1>
        <p v-if="showName">{{user.first_name +' '+ user.last_name}}</p>
        <p v-else>No one By that name</p>
        <p v-text="user.first_name"></p>
        
        <!-- Parse HTML -->
        <!-- Unparsed -->
        {{day}} 
        <!-- Parsed -->
        
        <span v-html="day"></span>

        <!-- For loops -->
        <ul>
            <li v-for="Item in items"> {{Item.title}} </li>
        </ul>

        <!-- Input Binding -->
        <input type="text" v-model="title"><br>

        <!-- Events -->
        <button v-on:click="greet('moses')">Greet</button>
        <br>
        <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
        <!-- Other Modifiers Shift, Tab .. -->

        <!-- Computed Properties -->
        <hr>
        <label for="">First Name</label>
        <input type="text" v-model="user.first_name">
        <br>
        <label for="">Last Name</label>
        <input type="text" v-model="user.last_name">
        <h3> {{fullname}} </h3>
        <!-- Computed components -->
        <h2> {{msg}} </h2>
    </div>
</template>

<script>
export default {
  name: 'Test',
  props :{
      msg:{
          type: String,
          default: 'foobar'
      }
  },
  data(){
      return{
          title: 'Hello World',
          day: '<h1>Thursday</h1>',
          user:{
              first_name: 'Jake',
              last_name: 'Archibald'
          },
          showName: false,
          items:  [
              {title: 'Item One'},
              {title: 'Item Two'},
              {title: 'Item Three'}
          ]
      }
  },
  methods: {
      greet: function(g_name) {
          alert('Hello, My name is '+g_name)
      },
      pressKey: function(event) {
      console.log(event.target.value);
     },
     enterHit: function(params) {
         console.log('You hit enter');
     }
  },
  computed: {
      fullname : function () {
          return this.user.first_name+ ' '+ this.user.last_name
      }
  }
};
</script>

<style scoped>

</style>
