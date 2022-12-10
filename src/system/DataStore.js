export default {
  data: {
    image: "miku/Miku_V4.webp",
    song: {
      id: 0,
      info: null,
    },
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
    if (vs.versions[id]) {
      this.data.image = vs.versions[id].image;
    }
    this.updateSubscribers();
  },
  retrieveSong: function (vs, id) {
    this.data.song.id = id;
    if (vs.music[id]) {
      this.data.song.info = vs.music[id];
    }
    this.updateSubscribers();
  },
};
