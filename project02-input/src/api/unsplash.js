import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 8vDWkXnLWiR6wzAtMk46dAUPIXf-1ciBOx4BYiv0Ukk",
  },
});
