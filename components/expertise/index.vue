<template>
	<div class="mt-8">
		<div class="mt-2">
			<h2
				class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize"
			>
				Frontend
			</h2>

			<ul class="flex flex-wrap gap-4 items-center">
				<li class="flex items-center">
					<Html class="h-10 w-10 rounded-sm drop-shadow-sm"></Html>
				</li>

				<li class="flex items-center">
					<Css class="h-10 w-10 rounded-sm drop-shadow-sm"></Css>
				</li>
				<li class="flex items-center">
					<Bootstrap class="h-10 w-10"></Bootstrap>
				</li>
				<li class="flex items-center">
					<TailwindCss class="h-10 w-10"></TailwindCss>
				</li>
				<li class="flex items-center">
					<Javascript class="h-10 w-10"></Javascript>
				</li>
				<li class="flex items-center">
					<Vuejs class="h-10 w-10"></Vuejs>
				</li>
				<li class="flex items-center">
					<Nuxt class="h-10 w-10"></Nuxt>
				</li>
			</ul>
		</div>

		<div class="mt-4">
			<h2
				class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize"
			>
				Backend
			</h2>
			<ul class="mb-6 flex flex-wrap gap-4">
				<li class="flex items-center">
					<Node class="h-10 w-10"></Node>
				</li>
			</ul>
		</div>
	</div>
</template>

<script src="./index.js" async defer/>