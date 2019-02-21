import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        id: 'asfafdf',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Tokyo_Montage_2015.jpg',
        title: 'Meetup in Tokyo',
        date: new Date(),
        location: 'Tokyo',
        description: 'Tokyo meetup. Feel free to participate!'
      },
      {
        id: 'sda21rf',
        imageUrl: 'https://cdn.japantimes.2xx.jp/wp-content/uploads/2018/04/n-kyoto-a-20180406-870x580.jpg',
        title: 'Meetup in Kyoto',
        date: new Date(),
        location: 'Kyoto',
        description: 'Kyoto, Oideyasu'
      }
    ],
    user: {
      id: 'asjafal12',
      registerdMeetups: ['ajfkaldfjak14']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'dsjaklfkadlakl'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
