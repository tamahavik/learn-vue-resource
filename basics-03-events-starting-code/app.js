const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmName: ''
    };
  },
  methods:{
    confirmInput(){
      this.confirmName = this.name;
    },
    submitForm(){
      alert("submit")
    },
    add(num){
      this.counter+= num;
    },
    remove(num){
      this.counter-= num;
    },
    changeName(event, lastName){
      this.name = event.target.value + lastName;
    }
  }
});

app.mount('#events');
