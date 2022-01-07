<template>
	<component :is="layout">
		<slot />
	</component>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import LoginLayout from '@/layouts/LoginLayout.vue';

export default {
	components: {
		DefaultLayout,
		LoginLayout,
	},
	computed: {
		layout() {
			return this.$route.meta.layout || 'DefaultLayout';
		},
	},
};
</script>

<style></style>
