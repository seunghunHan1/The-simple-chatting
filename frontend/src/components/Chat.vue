<template>
	<v-container>
		<v-row>
			<v-col>
				<chat-list :items="items" :user-info="userInfo"></chat-list>
			</v-col>
		</v-row>
		<v-row>
			<v-col class="d-flex align-center">
				<chat-input @send-message="sendMessage"></chat-input>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import ChatList from '@/components/chattings/ChatList.vue';
import ChatInput from '@/components/chattings/ChatInput.vue';
import { fetchMessage, insertMessage } from '@/api/chat.js';

export default {
	name: 'Chat',
	components: {
		ChatList,
		ChatInput,
	},
	async created() {
		try {
			const { data } = await fetchMessage();
			this.items = data;
		} catch (err) {
			console.log(err);
		}
		this.$socket.on('chat', data => {
			this.items.push(data);
		});
	},
	data() {
		return {
			items: [],
		};
	},
	computed: {
		userInfo() {
			return this.$store.state.userInfo;
		},
	},
	methods: {
		sendMessage(message) {
			const messageInfo = {
				avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
				writer: this.userInfo.name,
				content: message,
			};
			insertMessage(messageInfo);
			this.$socket.emit('chat', messageInfo);
			this.items.push(messageInfo);
		},
	},
};
</script>
