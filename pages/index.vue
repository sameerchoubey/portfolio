<template>
	<div class="w-full">
		<!-- <div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
			<div class="md:w-1/3 p-2 md:flex md:justify-center">
				<AuthorCard />
			</div>
			<div class="md:w-2/3 md:px-8">
				<AuthorIntro />
				<Expertise />
				<Timeline />
			</div>
		</div> -->
		<div
			class="flex justify-center"
		>
			<div
				class=""
			>
				<div
					class="h-112 w-full"
				>
					<img
						src="~/assets/new-profile.jpeg"
						loading="lazy"
						alt="profile-picture"
						class="h-full w-full object-cover ipad:rounded-t-lg"
					>
				</div>

				<div
					class="xs:p-6 ipad:p-9"
					style="background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cfilter%20id%3D%22noise%22%3E%20%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.875%22%20result%3D%22noise%22%20%2F%3E%20%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220.3203125%200%200%200%200%200%200.5546875%200%200%200%200%200%200.77734375%200%200%200%200%200%200.52734375%200%22%20%2F%3E%20%3C%2Ffilter%3E%20%3Crect%20filter%3D%22url%28%23noise%29%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22transparent%22%20opacity%3D%221%22%20%2F%3E%3C%2Fsvg%3E'), linear-gradient(45deg, #4CBFC7 0%, #787DFF 100%)"
				>
					<p
						class="xs:text-35 ipad:text-50 text-white font-semibold"
						style="font-family: 'Source Sans Pro', sans-serif;"
					>
						Sameer Choubey
					</p>
					<p class="xs:mt-1 ipad:mt-0 text-white text-base leading-7">
						Fullstack Software Engineer
					</p>
				</div>

				<!-- ABOUT ME SECTION -->
				<div
					class="xs:p-6 ipad:p-9"
				>
					<p
						class="text-3xl font-normal leading-5 tracking-tighter"
						style="font-family: 'Source Sans Pro', sans-serif; color:#575757"
					>
						About
					</p>

					<hr class="w-24 my-6" style="height:3px; border-top: solid 3px #78C6FF">

					<p
						class=""
						style="text-align: justify; color: #4A4A4A; font-family: 'Source Sans Pro', sans-serif; font-size: 1em; line-height: 2; font-weight: 300;"
					>
						Donec <a href="http://">dignissim</a> enim sit amet efficitur sodales, tortor ex suscipit enim, nec iaculis est leo vel quam. Ut ut sodales velit. Praesent posuere pulvinar odio, eu blandit elit iaculis vitae consequat lorem consequat
					</p>
				</div>
				<hr class="my-0 h-0.5 w-full">

				<!-- WORK SECTION -->
				<div
					class="xs:p-6 ipad:p-9"
				>
					<p
						class="text-3xl font-normal leading-5 tracking-tighter"
						style="font-family: 'Source Sans Pro', sans-serif; color:#575757"
					>
						Work
					</p>

					<hr class="w-24 my-6" style="height:3px; border-top: solid 3px #78C6FF">

					<!-- <p
						class=""
						style="text-align: justify; color: #4A4A4A; font-family: 'Source Sans Pro', sans-serif; font-size: 1em; line-height: 2; font-weight: 300;"
					>
						Donec <a href="http://">dignissim</a> enim sit amet efficitur sodales, tortor ex suscipit enim, nec iaculis est leo vel quam. Ut ut sodales velit. Praesent posuere pulvinar odio, eu blandit elit iaculis vitae consequat lorem consequat
					</p> -->

					<Timeline />
					<Expertise />
				</div>
				<hr class="my-0 h-0.5 w-full">

				<!-- EDUCATION SECTION -->
				<div
					class="xs:p-6 ipad:p-9"
				>
					<p
						class="text-3xl font-normal leading-5 tracking-tighter"
						style="font-family: 'Source Sans Pro', sans-serif; color:#575757"
					>
						Education
					</p>

					<hr class="w-24 my-6" style="height:3px; border-top: solid 3px #78C6FF">

					<div
						class="mt-4"
					>
						<div
							class="flex justify-between text-18 font-semibold leading-200"
						>
							<p>
								National Institute of Technology Sikkim
							</p>
							<p class="font-semibold">
								August 2017 - June 2021
							</p>
						</div>
						<p class="font-light leading-200 text-16">
							B.Tech in Electronics and Communication Engineering
						</p>
					</div>
				</div>
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
