const app = Vue.createApp({
  data() {
    return {
      input: "",
      v: true,
      c: "",
    };
  },
  computed: {
    assignClass() {
      return {
        user1: this.input === "user1",
        user2: this.input === "user2",
        visible: this.v,
        hidden: !this.v,
      };
    },
  },
  methods: {
    clickButton() {
      this.v = !this.v;
    },
  },
});

app.mount("#assignment");
