const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
