<template>
  <div>
    <user-data @submit-data="submitData"></user-data>
    <active-user :name="users.name" :age="users.age"></active-user>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {
        name: "user1",
        age: 19,
      },
    };
  },
  methods: {
    submitData(data) {
      this.users = data;
    },
  },
};
</script>
