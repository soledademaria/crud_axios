<template>
	<div id="app" class="container">
		<b-card>
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
			<hr>

			<b-button size="lg" variant="primary" @click="handleClick">Salvar</b-button>
		</b-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: {
				name: '',
				email: ''
			}
		}
	},

	methods: {
		handleClick(){
			this.$http.post('users.json', this.user)
			.then(() => {
				this.user = {}
			})
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
