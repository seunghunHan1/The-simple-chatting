<template>
	<v-container class="">
		<h1 class="my-10 text-center">로그인</h1>
		<v-card class="pa-10">
			<login-form @submit-form="submitForm"></login-form>
		</v-card>
	</v-container>
</template>

<script>
import LoginForm from '@/components/login/LoginForm.vue';

export default {
	components: {
		LoginForm,
	},
	methods: {
		async submitForm(userInfo) {
			try {
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
