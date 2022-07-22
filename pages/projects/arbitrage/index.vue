<template>
    <div class="max-w-xl mx-auto mt-10">
        <div class="flex justify-between">
            <input
                id="odd1"
                v-model="input1.odd"
                type="number"
                required
                @input="validateOdd()"
                class="input-fade text-left rounded-none w-full font-mono font-medium text-16 text-onyx pb-1 border-b border-solid leading-normal tracking-normal antialiased"
            />
            <input
                id="amount1"
                v-model="input1.amount"
                type="number"
                required
                @input="validateOdd()"
                class="ml-5 input-fade text-left rounded-none w-full font-mono font-medium text-16 text-onyx pb-1 border-b border-solid leading-normal tracking-normal antialiased"
            />

            <p class="ml-10">{{ input1.result }}</p>
        </div>
        <div class="flex justify-between mt-5">
            <input
                id="odd1"
                v-model="input2.odd"
                type="number"
                required
                @input="validateOdd()"
                class="input-fade text-left rounded-none w-full font-mono font-medium text-16 text-onyx pb-1 border-b border-solid leading-normal tracking-normal antialiased"
            />
            <input
                id="amount1"
                v-model="input2.amount"
                type="number"
                required
                @input="validateOdd()"
                class="ml-5 input-fade text-left rounded-none w-full font-mono font-medium text-16 text-onyx pb-1 border-b border-solid leading-normal tracking-normal antialiased"
            />
            <p class="ml-10">{{ input2.result }}</p>
        </div>

        <div class="mt-5 flex justify-between max-w-sm mx-auto">
            <p>Arbitrage Percentage</p>
            <p>{{finalPercentage.actualStake}}</p>
            <p>{{ finalPercentage.finalProfit }}</p>
        </div>
    </div>
</template>

<script src="./index.js" async defer/>