<template>
	<section
		class="w-full xs:pt-11 ipad:pb-11 ipad:px-11 antialiased"
		id="app"
	>
		<div
			class="w-full ipad:max-w-150 mx-auto z-1 rounded-lg"
			style="box-shadow:0rem 0.125rem 2.875rem 0rem rgba(0,0,0,0.071)"
		>
			<!-- <Header /> -->
			<Nuxt />
			<!-- <Footer /> -->
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

<style>
#app {
	font-family: 'Source Sans 3', sans-serif;
}

a{
	color: #269BF0;
    text-decoration: underline;
}
</style>
