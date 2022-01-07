<template>
	<div>
		<v-app-bar class="white--text" color="primary">
			<v-app-bar-nav-icon
				class="white--text"
				@click="drawer = true"
			></v-app-bar-nav-icon>
			<v-toolbar-title>Simple Chatting</v-toolbar-title>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" absolute temporary>
			<v-list nav dense>
				<v-list-item-group
					v-model="group"
					active-class="deep-purple--text text--accent-4"
				>
					<v-list-item to="/">
						<v-list-item-icon>
							<v-icon>mdi-home</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item>

					<v-list-item @click="logoutUser">
						<v-list-item-icon>
							<v-icon>mdi-account</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Logout</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	data: () => ({
		drawer: false,
		group: null,
	}),
	methods: {
		logoutUser() {
			sessionStorage.removeItem('userInfo');
			this.$store.commit('clearUserInfo');
			this.$router.push('/login');
		},
	},
};
</script>

<style></style>
