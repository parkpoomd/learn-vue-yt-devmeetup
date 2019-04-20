import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imgName: "img_mock_new_york.jpg",
        id: "1",
        title: "Meetup in New York",
        date: "2017-07-17"
      },
      {
        imgName: "img_mock_paris.jpg",
        id: "2",
        title: "Meetup in Paris",
        date: "2017-07-19"
      }
    ],
    user: {
      id: "5208040",
      registeredMeetups: ["1"]
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup(state) {
      return meetupId => {
        return state.loadedMeetups.find(meetup => {
          return meetup.id === meetupId;
        });
      };
    }
  }
});
