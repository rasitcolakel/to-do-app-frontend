module.exports = {
  API_URL:
    process.env.NODE_ENV === "production"
      ? "https://to-do-app-backend-idv.herokuapp.com/"
      : "http://localhost:3001/",
};
