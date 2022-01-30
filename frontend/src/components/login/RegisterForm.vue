<template>
	<v-form>
		<v-row>
			<v-col cols="12">
				<v-text-field v-model="email" label="E-mail" required></v-text-field>
			</v-col>
			<v-col cols="12">
				<v-text-field
					v-model="nickname"
					label="nickname"
					required
				></v-text-field>
			</v-col>
			<v-col cols="12">
				<v-text-field
					type="password"
					v-model="password"
					label="password"
					required
				></v-text-field>
			</v-col>
			<v-col cols="12" class="d-flex align-center">
				<v-text-field
					type="text"
					v-model="phoneNumber"
					label="phoneNumber(remove 010)"
					required
				></v-text-field>
				<v-btn class="ml-10" color="grey lighten-2" @click="sendSms"
					>인증번호 받기</v-btn
				>
			</v-col>
			<v-col cols="12" class="d-flex align-center" v-if="authNumber">
				<v-text-field
					type="text"
					v-model="inputAuthNum"
					label="inputAuthNum"
				></v-text-field>
			</v-col>
		</v-row>
		<v-row class="mt-12" justify="end">
			<v-btn :disabled="!valid" color="primary" class="mr-3" @click="submitForm"
				>회원가입</v-btn
			>
			<v-btn color="grey lighten-2"
				><router-link to="/login">로그인</router-link></v-btn
			>
		</v-row>
	</v-form>
</template>

<script>
import { registerAuthNumber } from '@/api/auth';

export default {
	data: () => ({
		email: '',
		nickname: '',
		password: '',
		phoneNumber: '',
		inputAuthNum: '',
		authNumber: '',
	}),
	computed: {
		valid() {
			return (
				this.email &&
				/.+@.+/.test(this.email) &&
				this.password &&
				this.authNumber === this.inputAuthNum &&
				this.authNumber !== ''
			);
		},
	},
	methods: {
		submitForm() {
			this.$emit('submit-form', {
				email: this.email,
				name: this.nickname,
				password: this.password,
				phoneNumber: this.phoneNumber,
			});
		},
		async sendSms() {
			const phoneNum = `8210${this.phoneNumber}`;
			try {
				const { data } = await registerAuthNumber({
					phoneNum: phoneNum,
				});
				this.authNumber = data;
			} catch (err) {
				console.log('폰번호 잘못됨');
			}
		},
	},
};
</script>

<style scoped>
a {
	text-decoration: none;
	color: #222 !important;
}
</style>
