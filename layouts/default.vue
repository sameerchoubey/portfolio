<template>
	<section class="w-full px-6 pb-12 antialiased bg-white">
		<div class="mx-auto max-w-8xl">
			<Header />
			<Nuxt />
			<Footer />
		</div>
	</section>
</template>

<script>
export default {

	component: {
		Header: () => import('@/components/header/index.vue'),
		Footer: () => import('@/components/footer/index.vue'),
	},
}
</script>
