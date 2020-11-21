import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 0la2tYukLxWf2SsN1Dumf5T8HSrT7mQTWxLK8jLjmGQ",
  },
});
