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
        date: '2018-07-01'
      },
      {
        id: 'sda21rf',
        imageUrl: 'https://cdn.japantimes.2xx.jp/wp-content/uploads/2018/04/n-kyoto-a-20180406-870x580.jpg',
        title: 'Meetup in Kyoto',
        date: '2018-07-17'
      }
    ],
    user: {
      id: 'asjafal12',
      registerdMeetups: ['ajfkaldfjak14']
    }
  },
  mutations: {},
  actions: {},
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
