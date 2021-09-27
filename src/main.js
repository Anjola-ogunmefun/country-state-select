import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.config.globalProperties.$requestOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJvZ3VubWVmdW5hbmpvbGFAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiOS1FT1R4Ni10Qk8wY0x2bG5aaEVlYlQ0Q0ZBWERKZHFVbHNYUHFEMzdYVXl0b0xaU3pkRUFaR21DUzFCWk10S0pMYyJ9LCJleHAiOjE2MzI4Mjc2MDV9.qMkENroso7iAw3gM-rjpa12t0djfiu1_ZZMhENGj2fg",
  },
};

app.mount("#app");
