<template>
	<div class="dark:bg-gray-900 mt-6">
		<div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
			<div class="md:w-1/3 p-2 md:flex md:justify-center">
				<AuthorCard />
			</div>
			<div class="md:w-2/3 md:px-8">
				<AuthorIntro />
				<Expertise />
				<Timeline />
			</div>
		</div>
	</div>
</template>

<script>
import siteMetaInfo from "@/data/sitemetainfo"
export default {
	components: {
        AuthorCard: () => import ('@/components/author-card/index.vue'),
		AuthorIntro: () => import('@/components/author-intro/index.vue'),
		Expertise: () => import('@/components/expertise/index.vue'),
		Timeline: () => import('@/components/timeline/index.vue'),
    },
	data() {
		return {
			siteMetaInfo: siteMetaInfo,
		};
	},
	head: {
		title: siteMetaInfo.title,
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: siteMetaInfo.description,
			},
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},
};
</script>

<style></style>
