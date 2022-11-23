const app = Vue.createApp({
  data() {
    return {
      val: 0,
    };
  },
  watch: {
    val(value) {
      if (value > 0) {
        const that = this;
        setTimeout(function () {
          that.val = 0;
        }, 5000);
      }
    },
  },
  computed: {
    result() {
      if (this.val > 37) return "Too much!";
      if (this.val < 37) return "Not there yet";
      return 37;
    },
  },
  methods: {
    add(num) {
      this.val += num;
    },
  },
});

app.mount("#assignment");
