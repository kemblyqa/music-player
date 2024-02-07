import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),

  actions: {
    async register({ age, country, email, name, password }) {
      const userCred = await auth.createUserWithEmailAndPassword(email, password)

      await usersCollection.doc(userCred.user.uid).set({ age, country, email, name })

      await userCred.user.updateProfile({
        displayName: name
      })

      this.userLoggedIn = true
    }
  }
})
