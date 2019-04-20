import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl:
          "https://www.rei.com/adventures/assets/adventures/images/trip/core/asia/fta_hero",
        id: "1",
        title: "Meetup in New York",
        date: "2017-07-17"
      },
      {
        imageUrl:
          "https://www.rei.com/adventures/assets/adventures/images/trip/core/asia/fta_hero",
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
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
      console.log(state.loadedMeetups);
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: "999"
      };
      // Reach out to firebase and store it
      commit("createMeetup", meetup);
    }
  },
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
