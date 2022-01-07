<template>
	<v-card class="chatting-wrap overflow-auto">
		<v-list three-line height="80vh" color="light-blue lighten-5">
			<template v-for="(item, index) in items">
				<!-- Other message -->
				<v-list-item
					v-if="item.writer !== userInfo.name"
					:key="index"
					class="light-blue lighten-5"
				>
					<v-list-item-avatar size="60">
						<v-img :src="item.avatar"></v-img>
					</v-list-item-avatar>
					<div style="list-content">
						<v-list-item-content class="align-self-auto">
							<v-list-item-title
								class="mb-2"
								v-html="item.writer"
							></v-list-item-title>
							<v-list-item-subtitle
								v-html="item.content"
								class="white pa-5 rounded-lg"
							></v-list-item-subtitle>
						</v-list-item-content>
					</div>
				</v-list-item>
				<!-- My message -->
				<v-list-item
					v-else
					:key="index"
					class="justify-end light-blue lighten-5"
				>
					<div style="list-content">
						<v-list-item-content class="align-self-auto">
							<v-list-item-subtitle
								v-html="item.content"
								class="lime accent-2 pa-5 rounded-lg text-right"
							></v-list-item-subtitle>
						</v-list-item-content>
					</div>
				</v-list-item>
			</template>
		</v-list>
	</v-card>
</template>

<script>
export default {
	props: {
		items: {
			type: Array,
			default: null,
		},
		userInfo: {
			type: Object,
			default: null,
		},
	},
	updated() {
		this.$nextTick(() => {
			const chattingWrap = document.querySelector('.chatting-wrap');
			chattingWrap.scrollTop = chattingWrap.scrollHeight;
		});
	},
};
</script>

<style></style>
