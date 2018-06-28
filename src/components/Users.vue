<template>
    <div class="users">
        <h1>Hello, my name is human</h1>
    </div>
</template>

<script>
export default {
  name: "Users",

  data() {
    return {
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
    };
  }
};
</script>

<style scoped>
</style>
