const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullName: "",
      lastName: "",
    };
  },
  watch: {
    counter(value){
      if(value > 50){
        this.counter = 0;
      }
    }
    // name(value) {
    //   if (this.value === "") {
    //     this.fullName = "";
    //   }else{
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },
    // lastName(value){
    //   if (this.value === "") {
    //     this.fullName = "";
    //   }else{
    //     this.fullName = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    fullName() {
      console.log("Running Again...")
      if(this.name === '' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
