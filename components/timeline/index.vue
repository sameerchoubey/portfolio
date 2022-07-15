<template>
	<div class="opacity-100 mt-10">
		<ol
			v-for="(item, key) in workExp"
			:key="key"
			class="relative border-l border-gray-200 dark:border-gray-700"
		>
			<li
				class="mb-10 ml-6 cursor-pointer"
				@click="toggleData(key)"
			>
				<span
					class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
				>
					<img
						class="w-3 h-3 text-blue-600 dark:text-blue-400"
						src="~assets/icon/work.svg"
					/>
				</span>
				<h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
					{{ item.title }}
					<span
						v-if="item.currentTag"
						class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
					>
						Currently
					</span>
				</h3>
				<time
					class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
				>
					{{ item.date }}
				</time>
				<p
					v-if="item.show"
					class="text-base font-normal text-gray-500 dark:text-gray-400"
				>
					<span
						v-for="(subData, k) in item.description"
						:key="k"
					>
						{{ k+1 }}. {{ subData }} <br>
					</span>
				</p>
			</li>
		</ol>
	</div>
</template>

<script src="./index.js" async defer/>

<style scoped>
</style>