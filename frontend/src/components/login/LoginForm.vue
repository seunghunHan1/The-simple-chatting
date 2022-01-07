<template>
	<v-form v-model="valid" lazy-validation>
		<v-row>
			<v-col cols="12">
				<v-text-field
					v-model="email"
					:rules="emailRules"
					label="E-mail"
					required
				></v-text-field>
			</v-col>
			<v-col cols="12">
				<v-text-field
					type="password"
					v-model="password"
					label="password"
					:rules="passwordRules"
					required
				></v-text-field>
			</v-col>
		</v-row>
		<v-row justify="end">
			<v-btn :disabled="!valid" color="primary" class="mr-3" @click="submitForm"
				>로그인</v-btn
			>
			<v-btn color="grey lighten-2">회원가입</v-btn>
		</v-row>
	</v-form>
</template>

<script>
export default {
	data: () => ({
		valid: false,
		email: '',
		emailRules: [
			v => !!v || 'E-mail is required',
			v => /.+@.+/.test(v) || 'E-mail must be valid',
		],
		password: '',
		passwordRules: [v => !!v || 'password is required'],
	}),
	methods: {
		submitForm() {
			this.$emit('submit-form', {
				email: this.email,
				password: this.password,
			});
		},
	},
};
</script>

<style></style>
