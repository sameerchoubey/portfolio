<template>
	<div
		class="opacity-100 mt-10"
	>
		<div
			v-for="(item, key) in getCurrentWorkExp"
			:key="key"
		>
			<div
				class="mb-10 cursor-pointer"
				@click="toggleData(key)"
			>
				<div class="mb-1 text-18 font-bold text-gray-900 dark:text-white flex justify-between">
					<p
						v-html="item.title"
						class="self-center"
					/>
					<p
						v-if="item.currentTag"
						v-html="item.currentTag"
						class="bg-blue-100 text-blue-800 text-14 font-medium p-015 rounded dark:text-blue-800 ml-3"
					/>
				</div>

				<div class="flex justify-between">

					<p
						class="block text-14 font-normal leading-normal"
					>
						{{ item.date }}
					</p>

					<p
						v-if="item.dateCal"
						class="block text-14 font-normal leading-normal"
					>
						{{ item.dateCal }}
					</p>
				</div>
				
				<div
					v-if="item.show"
					class="test ml-6 mt-2"
				>
					<ul
						class="text-16 font-normal"
					>
						<li
							v-for="(subData, k) in item.description"
							:key="k"
						>
							{{ subData }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./index.js" async defer/>

<style scoped>
.test ul li {
	list-style-type: disc;
}
</style>