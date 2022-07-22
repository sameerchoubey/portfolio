export default {
	data() {
		return {
			input1: {
                amount: 1000,
                odd: 1.5,
                result: ''
            },
            input2: {
                amount: 100,
                odd: 3,
                result: ''
            },
		}
	},
    computed:{
        finalPercentage() {
            let prob = {
                odd1: (1/this.input1.odd).toFixed(4),
                odd2: (1/this.input2.odd).toFixed(4),
            }
            prob['total'] = prob.odd1 + prob.odd2
            // console.log('before', this.input1.amount, prob.odd1)
            let overallStake = (this.input1.amount/(prob.odd1))
            this.input1.result = this.input1.amount * this.input1.odd
            this.input2.amount = (overallStake * prob.odd2).toFixed(2)
            this.input2.result = (this.input2.amount * this.input2.odd).toFixed(2)
            let actualStake = (Number(this.input1.amount) + Number(this.input2.amount)).toFixed(2)
            let finalProfit = (Number(this.input2.result) - Number(actualStake)).toFixed(2)

            // console.log('prod', prob, this.input1.amount/(prob.odd1))
            return {actualStake, finalProfit, percentage: '10%'}
        }
    },
    methods: {
        validateOdd(){
            // console.log('hello')
        }
    }   
};