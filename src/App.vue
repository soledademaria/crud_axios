<template>
  <div id="app" class="container">
    <h1>Cadastro de Usuários</h1>

    <b-card class="container__card-body">
      <b-form-group label="Nome: ">
        <b-form-input
          v-model="user.name"
          type="text"
          size="lg"
          placeholder="Digite o seu nome"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Email: ">
        <b-form-input
          v-model="user.email"
          type="email"
          size="lg"
          placeholder="Digite o seu email"
        ></b-form-input>
      </b-form-group>
      <hr />

      <b-button size="lg" variant="primary" @click="save">Salvar</b-button>
      <b-button
        class="ml-2"
        size="lg"
        variant="success"
        @click="handleVisibility"
        >Visualizar usuários</b-button
      >
    </b-card>
    <hr />

    <b-list-group>
      <b-list-group-item v-for="(user, key) in users" :key="key" class="mb-4">
        <strong>Nome: </strong> {{ user.name }} <br />
        <strong>Email: </strong> {{ user.email }} <br />
        <strong>ID: </strong> {{ key }} <br />
        <b-button variant="warning" size="lg" @click="handleLoad(key)"
          >Editar</b-button
        >
        <b-button
          class="ml-2"
          variant="danger"
          size="lg"
          @click="handleDelete(key)"
          >Excluir</b-button
        >
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      users: [],
      id: null,
      user: {
        name: "",
        email: "",
      },
    };
  },

  methods: {
    save() {
      const method = this.key ? "patch" : "post";
      const finishUrl = this.key ? `/${this.key}.json` : ".json";
      this.$http[method](`/users${finishUrl}`, this.user).then(() => {
        this.clear();
      });
    },

    handleVisibility() {
      this.$http.get("users.json").then((res) => {
        this.users = res.data;
      });
      this.showUsers = true;
    },

    handleLoad(key) {
      this.key = key;
      this.user = { ...this.users[key] };
    },

    handleDelete(key) {
      this.$http.delete(`/users/${key}.json`);
    },

    clear() {
      this.user.name = "";
      this.user.email = "";
      this.user.id = null;
	  this.messages = []
    },
  },
};
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
  width: 60rem;
  margin-bottom: 5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}

.container__card-body {
  margin: auto 0;
}
</style>
