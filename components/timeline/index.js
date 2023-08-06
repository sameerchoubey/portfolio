export default {
    components: {
    },
    data () {
        return {
            hide: false,
			workExp:[
				{
					show: true,
                    currentTag: 'Full Time',
                    title: 'Software Engineer @ <a href="https://juno.finance/" target="_blank">Juno.Finance</a>',
                    date: 'November 2020 - Present',
                    dateCal: null,
                    description: [
                        'Worked on the crypto stack in the frontend. Implemented buy/sell and send flow across multiple coins & crypto yield for BTC, ETH and USDC.',
                        'Enabled users to get an NFT on the platform. Also, worked on crypto paycheck flow where users could receive a part of their salary in crypto.',
                        'Revamped the whole account and card activation flow. Implemented Google 2FA for better security for the users.',
                        'Revamped how localStorage and Intercom were being used through the codebase. Restructured how AXIOS (for blog) was used and reduced multiple API calls.',
                        'Worked on a CRM tool for the CS team at Juno. It enabled the CS team to view user data, block the user, change his personal data on user request, issue a card, change address, and do KYC verification for users who are stuck in the flow. Also, implemented a signup flow for the CS team on the platform.',
                        'Wrote mongo queries [Metabase] for the growth & analytics team.'
                    ]
				},
                // {
				// 	show: false,
                //     currentTag: 'Full Time',
                //     title: 'Software Engineering Intern @ <a href="https://juno.finance/" target="_blank">Juno.Finance</a>',
                //     date: 'November 2020 - April 2021',
                //     dateCal: '6 months',
                //     description: [
                //         'Worked on a CRM tool for the CS team at Juno. It enabled the CS team to view user data, block the user, change his personal data on user request, issue a card, change address, and do KYC verification for users who are stuck in the flow. Also, implemented a signup flow for the CS team on the platform.',
                //         'Wrote mongo queries [Metabase] for the growth & analytics team.'
                //     ]
				// },
                {
                    show: false,
                    currentTag: 'Open Source',
                    title: 'Contributor @ <a href="https://github.com/zulip/zulip" target="_blank">Zulip</a>',
                    date: 'November 2018 - July 2019',
                    dateCal: '6 months',
                    description: [
                        'I mostly contributed to the integration area where I enhanced the Stripe, Taiga and JIRA webhook integration into the Zulip server.',
                        `Also, worked on Zulip's PyPI API Bindings.`,
                    ]
				},
                {
                    show: false,
                    currentTag: 'Full Time',
                    title: 'Frontend Developer Intern @ <a href=" https://www.linkedin.com/company/moodcafe" target="_blank">Moodcafe</a>',
                    date: 'January 2019 - February 2019',
                    dateCal: '1 month',
                    description: [
                        'Joined as a FE Intern and worked on redesigning the website.',
                        'I worked on the landing page, self-help, experts, anonymous chat.',
                    ]
				},
				// {
                //     show: false,
                //     currentTag: 'Part Time',
                //     title: 'Full Stack Developer at WDC, NIT Sikkim',
                //     date: 'February 2018 - June 2021',
                //     dateCal: '3 years, 3 months',
                //     description: [
                //         'Started working as a junior developer in my freshmen year and worked on small tasks.',
                //         'Also, worked on the semester registration project (DSS) along with other team members. This transformed the whole semester registration process and made it online.',
                //         'I worked on the registration page submission and PDF generation. These two were the main things I worked on in the backend.',
                //         'Later moved to an advisory role.'
                //     ]
				// },
			],
        }
    },
    async mounted () {
    },
    computed: {
        getCurrentWorkExp(){
            let date1 = new Date('11/04/2020')
            let date2 = new Date()
            let diffTime = Math.abs(date2 - date1)
            let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
            let diffMonths = Math.floor(diffDays / 30)
            let diffYear = Math.floor(diffMonths / 12)
            diffMonths = diffMonths % 12

            let res
            if(diffMonths > 0) {
                res = ` ${diffYear} year, ${diffMonths % 12} months`
            } else {
                res = ` ${diffYear} year`
            }
            this.workExp[0].dateCal = res
            return this.workExp
        }
	},
    methods: {
        toggleData(key){
            this.workExp[key].show = !this.workExp[key].show
        }
    },
    beforeDestroy() {},
}