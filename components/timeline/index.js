export default {
    components: {
    },
    data () {
        return {
            hide: false,
			workExp:[
				{
					show: true,
                    currentTag: true,
                    title: 'SDE at Juno.Finance',
                    date: 'November 2020 - Currently',
                    description: [
                        'Worked on the crypto stack in the frontend. Implemented buy/sell and send flow across multiple coins & crypto yield for BTC, ETH and USDC.',
                        'Enabled users to get an NFT on the platform. Also, worked on crypto paycheck flow where users could receive a part of their salary in crypto.',
                        'Revamped the whole account and card activation flow. Implemented Google 2FA for better security for the users.',
                        'Revamped how localStorage and Intercom were being used through the codebase. Restructured how AXIOS (for blog) was used and reduced multiple API calls.',
                        'Worked on a CRM tool for the CS team at Juno. It enabled the CS team to view user data, block the user, change his personal data on user request, issue a card, change address, and do KYC verification for users who are stuck in the flow. Also, implemented a signup flow for the CS team on the platform.',
                        'Wrote mongo queries [Metabase] for the growth & analytics team.'
                    ]
				},
				{
                    show: false,
                    currentTag: false,
                    title: 'Full Stack Developer at WDC, NIT Sikkim',
                    date: 'February 2018 - June 2021',
                    description: [
                        'Started working as a junior developer in my freshmen year and worked on small tasks.',
                        'Also, worked on the semester registration project (DSS) along with other team members. This transformed the whole semester registration process and made it online.',
                        'I worked on the registration page submission and PDF generation. These two were the main things I worked on in the backend.',
                        'Later moved to an advisory role.'
                    ]
				},
                {
                    show: false,
                    currentTag: false,
                    title: 'Open Source Contributor @ Zuplip Chat',
                    date: 'November 2018 - July 2019',
                    description: [
                        'I mostly contributed to the integration area where I enhanced the Stripe, Taiga and JIRA webhook integration into the Zulip server.',
                        `Also, worked on Zulip's PyPI API Bindings.`,
                    ]
				},
                {
                    show: false,
                    currentTag: false,
                    title: 'Frontend Developer Intern @ Moodcafe',
                    date: 'January 2019 - February 2019',
                    description: [
                        'Joined as a FE Intern and worked on redesigning the website.',
                        'I worked on the landing page, self-help, experts, anonymous chat.',
                    ]
				},
			],
        }
    },
    async mounted () {
    },
    computed: {
	},
    methods: {
        toggleData(key){
            console.log(key, this.workExp[key])
            this.workExp[key].show = !this.workExp[key].show
        }
    },
    beforeDestroy() {         
    },    
}