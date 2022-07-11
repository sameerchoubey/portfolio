<template>
  <div class="md:fixed">
    <div class="md:block flex justify-center items-center">
		<img
			src="~/assets/author.png"
			loading="lazy"
			alt="me"
			class="md:mx-auto shadow-xl md:h-60 md:w-60 h-20 w-20 rounded-full"
		/>
		<div class="mb-2 ml-2 md:mx-7 mt-4 justify-center items-center">
			<h1
				class="md:text-3xl text-2xl text-gray-800 font-bold dark:text-blue-100"
			>
				{{ siteMetadata.author }}
			</h1>
			<div class="md:text-lg text-gray-600 dark:text-blue-100">
				{{ siteMetadata.position }}
			</div>
			<a
				:href="`mailto:${siteMetadata.email}`"
				class="text-gray-600 md:hidden mt-1 dark:text-blue-100"
			>
				{{ siteMetadata.email }}
			</a>
		</div>
    </div>

    <div class="mx-7 hidden md:block">
		<div class="my-2 text-gray-600 flex dark:text-blue-100">
			<Mail />
			<a
				class="ml-2"
				:href="`mailto:${siteMetadata.email}`"
				target=”_blank”
			>
				{{ siteMetadata.email }}
			</a>
		</div>
		<div class="my-2 text-gray-600 flex dark:text-blue-100">
			<Glob />
			<p
				class="ml-2"
			>
				{{ siteMetadata.location }}
			</p>
		</div>
		<div class="my-2 text-gray-600 flex dark:text-blue-200">
			<Github />
			<a
				class="ml-2"
				:href="siteMetadata.github"
				target=”_blank”
			>
				{{ siteMetadata.githubUser }}
			</a>
		</div>
    </div>
  </div>
</template>

<script src="./index.js" async defer/>
