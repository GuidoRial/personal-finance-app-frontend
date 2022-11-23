<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="form-container">
    <div class="login-page">
      <div class="form">
        <h2>
          {{ isLogin ? "Bienvenido de vuelta" : "Bienvenido a mi app" }}
        </h2>
        <h3>
          {{ isLogin ? "" : "Completa el formulario para crear tu cuenta" }}
        </h3>
        <input
          v-model="userData.username"
          v-if="!isLogin"
          type="text"
          placeholder="Nombre de usuario"
          class="email"
        />
        <input
          v-model="userData.email"
          type="text"
          placeholder="Correo electrónico"
          class="email"
        />
        <input
          v-model="userData.password"
          type="password"
          placeholder="Contraseña"
          class="password"
        />
        <p v-if="this.errorMessage.length" class="error-message">
          {{ errorMessage }}
        </p>
        <AuthButton
          v-if="!isLogin"
          @click="collectUserData"
          :disabled="disableButton"
          text="Crear cuenta"
        />
        <AuthButton
          v-else
          @click="collectUserData"
          :disabled="disableButton"
          text="Iniciar sesión"
        />
        <AuthRedirectText
          text="¿Ya tenés una cuenta?"
          linkText="Iniciar sesión"
          route="/login"
          v-if="!isLogin"
        />
        <AuthRedirectText
          text="¿No tienes una cuenta?"
          linkText="Crear una cuenta"
          route="/signup"
          v-else
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "pinia";
import userStore from "../store/user";
import AuthButton from "./authButton.vue";
import AuthRedirectText from "./authRedirectText.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "auth",
  props: {
    isLogin: Boolean,
  },
  data() {
    return {
      userData: { username: "", email: "", password: "" },
      errorMessage: "",
    };
  },
  computed: {
    disableButton() {
      return (
        (!this.isLogin && this.userData.username?.length === 0) ||
        this.userData.email?.length === 0 ||
        this.userData.password?.length === 0
      );
    },
    disableCreateAccountButton() {
      return (
        this.userData.username?.length === 0 ||
        this.userData.email?.length === 0 ||
        this.userData.password?.length === 0
      );
    },
    disableLoginButton() {
      return (
        this.userData.email?.length === 0 ||
        this.userData.password?.length === 0
      );
    },
  },
  methods: {
    ...mapActions(userStore, ["getAllEmails", "getAllNames"]),
    validateUsername() {
      const { username } = this.userData;
      if (!username.length) {
        this.errorMessage = "Por favor introduzca un nombre de usuario.";
        return;
      }
      if (username.length > 15) {
        this.errorMessage =
          "El nombre de usuario debe tener hasta 15 caracteres.";
        return;
      }
    },
    checkEmail(email) {
      // eslint-disable-next-line no-useless-escape
      let regex = new RegExp("[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,3}");
      return regex.test(email);
    },
    validateEmail() {
      const { email } = this.userData;
      if (!email.length) {
        this.errorMessage = "Por favor introduzca un correo electrónico";
        return;
      }
      if (email.length > 20) {
        this.errorMessage =
          "El correo electronico debe tener hasta 20 caracteres.";
        return;
      }
      if (!this.checkEmail(email)) {
        this.errorMessage = "Por favor introduzca un correo electrónico válido";
        return;
      }
    },
    validatePassword() {
      const { password } = this.userData;

      if (!password.length) {
        this.errorMessage = "Por favor introduzca una contraseña";
        return;
      }
      if (password.length < 6) {
        this.errorMessage =
          "La longitud de la contraseña debe ser de al menos 6 caracteres";
        return;
      }
    },
    collectUserData() {
      this.errorMessage = "";
      !this.isLogin && this.validateUsername();
      this.validateEmail();
      this.validatePassword();
      if (!this.errorMessage.length) {
        if (this.isLogin) {
          delete this.userData.username;
        }
        this.$emit("dataCollected", this.userData);
      }
    },
  },
  components: { AuthButton, AuthRedirectText },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.error-message {
  border: 1px solid #ef3b3a;
  background-color: #ef3b3a;
  color: #fff;
  font-weight: 500;
  margin: 0.4rem 0 !important;
  padding: 1rem 0.5rem;
}
.form-container {
  width: 98vw;
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
}

.login-page {
  width: 500px;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: var(--white);
  max-width: 500px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button {
  background: #43a047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4caf50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before,
.container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #ef3b3a;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8dc26f);
  background: -moz-linear-gradient(right, #76b852, #8dc26f);
  background: -o-linear-gradient(right, #76b852, #8dc26f);
  background: linear-gradient(to left, #76b852, #8dc26f);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
