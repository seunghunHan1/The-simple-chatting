<template>
	<v-container class="">
		<h1 class="my-10 text-center">회원가입</h1>
		<v-card class="pa-10">
			<register-form @submit-form="submitForm"></register-form>
		</v-card>
	</v-container>
</template>

<script>
import RegisterForm from '@/components/login/RegisterForm.vue';
import { registerUser } from '@/api/auth';

export default {
	components: {
		RegisterForm,
	},
	methods: {
		async submitForm(userInfo) {
			try {
				await registerUser(userInfo);
				await this.$store.dispatch('LOGIN', userInfo);
				this.$router.push('/');
			} catch (err) {
				console.log(err);
			}
		},
	},
};
</script>

<style></style>
