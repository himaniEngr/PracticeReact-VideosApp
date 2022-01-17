import axios from "axios";

const KEY = "AIzaSyBYYm319jSCj2fVi6xgccaWWpMvKwrszac";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: snippet,
    maxResults: 5,
    key: KEY,
    // q: "surfboards",
  },
});

youtube.get("/search");
