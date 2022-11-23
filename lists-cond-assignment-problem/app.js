const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      eventTask: "",
      show: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.show ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.eventTask);
      this.eventTask = "";
    },
    showList() {
      this.show = !this.show;
    },
  },
});

app.mount("#assignment");
