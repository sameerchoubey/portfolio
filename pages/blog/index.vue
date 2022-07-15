<template>
	<div>
		<div class="pt-16 pb-9 sm:pb-16 space-y-16 mx-auto max-w-7xl">
			<div
				v-for="(article, key) in articles.slice().reverse()"
				:key="key"
			>
				<BlogItem
					v-if="!article.draft"
					:key="article.title"
					:title="article.title"
					:description="article.description"
					:date="article.date"
					:slug="article.slug"
				>
				</BlogItem>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		BlogItem: () => import('@/components/blog-item/index.vue'),
	},
	async asyncData({ $content, params }) {
		const articles = await $content("articles")
		.only([
			"title",
			"description",
			"img",
			"slug",
			"tag",
			"author",
			"date",
			"draft",
		])
		.sortBy("date", "asc")
		.fetch()

		return {
			articles,
		};
	},
	head: {
		title: "Sameer | Blogs",
		meta: [
			{
				charset: "utf-8"
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				hid: "description",
				name: "description",
				content: "Its Solaiman's Pen and Paper to write ",
			},
		],
		link: [
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.ico" 
			}
		],
	},
};
</script>

<style></style>
