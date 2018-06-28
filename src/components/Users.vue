<template>
    <div class="users">
        <h1>Hello, my name is human</h1>
        <form v-on:submit="addUser">
          <input type="text" v-model="newUser.name" placeholder="Enter Name">
          <br>
          <input type="text" v-model="newUser.email" placeholder="Enter Email">
          <br>
          <input type="submit" value="Submit">
        </form>
        
        <ul>
          <li v-for="user in users">
            <input type="checkbox" class="toggle" v-model="user.contacted">
            <!-- Bind to class contacted -->
            <span :class="{contacted: user.contacted}">
              {{user.name}} : {{user.email}}
            </span>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Users",

  data() {
    return {
      newUser: {

      },
      users: [
        {
          name: 'Marquez Brownlee',
          email: 'marquez@mkbhd.com',
          contacted: false
        },
        {
          name: 'Linus Sebastian',
          email: 'linus@ltt.com',
          contacted: false
        },
        {
          name: 'Lewis Hilsenger',
          email: 'lew@unboxtherapy.com',
          contacted: false
        }
      ]
    }
  },

    methods: {
    addUser: function(event){
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      });
      event.preventDefault();
      }
    }
  }
</script>

<style scoped>
  .contacted{
    text-decoration: line-through;
  }
</style>
