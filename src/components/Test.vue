<template>
    <div class="test">
        <h1>{{title}}</h1>
        <p>{{user.first_name +' '+ user.last_name}}</p>
        <p v-text="user.first_name"></p>
        
        <!-- Parse HTML -->
        <!-- Unparsed -->
        {{day}} 
        <!-- Parsed -->
        <span v-html="day"></span>
    </div>
</template>

<script>
export default {
  name: 'Test',
  data(){
      return{
          title: 'Hello World',
          day: '<h1>Thursday</h1>',
          user:{
              first_name: 'Jake',
              last_name: 'Archibald'
          }
      }
  }
};
</script>

<style scoped>

</style>
