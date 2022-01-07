<template>
	<v-app id="app">
		<the-layout>
			<router-view></router-view>
		</the-layout>
	</v-app>
</template>

<script>
import TheLayout from '@/layouts/TheLayout.vue';
export default {
	components: {
		TheLayout,
	},
};
</script>
