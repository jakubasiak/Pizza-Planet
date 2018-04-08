<template>
    <div class="row">
        <form>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" v-model.lazy="email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password" v-model.lazy="password">
            </div>

            <button type="button" class="btn btn-primary" @click.prevent="signeIn">Sign in</button>
            <button type="button" class="btn btn-danger" @click.prevent="signeOut">Sign out</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {

      signeIn() {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
              alert('signe in successful');
          })
          .catch((err) => {
              var errorCode = err.code;
              var errorMessage = err.message;

              if(errorCode === 'auth/wrong-password') {
                  alert('wrong password');
              } else {
                  alert(errorMessage);
              }
          });
      },

      signeOut() {
          firebase.auth().signOut()
          .then(() => {
              alert('logged out')
          })
          .catch((err) => {
              alert(err.message);
          });
      }

  },
}
</script>

