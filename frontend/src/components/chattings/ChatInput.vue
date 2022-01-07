<template>
	<v-card width="100%" class="d-flex align-center px-5">
		<v-text-field
			class="mr-4"
			label="your message"
			v-model="message"
			@keyup.enter="sendMessage"
		></v-text-field>
		<v-btn depressed color="secondary" @click="sendMessage"> 전송 </v-btn>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			message: '',
		};
	},
	methods: {
		sendMessage() {
			this.$emit('send-message', this.message);
			this.message = '';
		},
	},
};
</script>
