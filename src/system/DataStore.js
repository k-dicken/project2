export default {
  data: {
    image: "miku/Miku_V4.webp",
    song: null,
  },
  subscribers: [],
  subscribe: function (callback) {
    this.subscribers.push(callback);
  },
  updateSubscribers: function (callback) {
    this.subscribers.forEach((callback) => {
      callback();
    });
  },
  retrieveImage: function (vs, id) {
    console.log("retrieve");
    if (vs.versions[id]) {
      this.image = vs.versions[id].image;
    }
    this.updateSubscribers();
  },
};
