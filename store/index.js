export const state = () => ({
	global: {
		step: {
			current: 0
		},
		data: {
			answers: [

			],
			stats: {
				rigid: 0,
				refined: 0,
				mystical: 0
			}
		}
	},
	questions: [
		{
			type: 'options',
			title: 'Quelle est votre couleur préférée ?',
			options: [
				{
					value: '#0D2226',
					data: {
						complementary: [
							'#8FECFF',
							'#75E8FF',
							'#B36B2E',
							'#FFB575',
						]
					}
				},
				{
					value: '#4fe89b',
					data: {
						complementary: [
							'#0D2226',
							'#B33D2E',
							'#FF8575',
						]
					}
				},
				{
					value: '#5ebfff',
					data: {
						complementary: [
							'#0D2226',
							'#B37C2E',
							'#FFC675',
						]
					}
				},
				{
					value: '#ff70e0',
					data: {
						complementary: [
							'#0D2226',
							'#49B32E',
							'#91FF75',
						]
					}
				},
				{
					value: '#e063ff',
					data: {
						complementary: [
							'#0D2226',
							'#7EB32E',
							'#C9FF75',
						]
					}
				},
				{
					value: '#ffd52b',
					data: {
						complementary: [
							'#0D2226',
							'#B33D2E',
							'#FF8575',
						]
					}
				},
				{
					value: '#fcb035',
					data: {
						complementary: [
							'#0D2226',
							'#2E35B3',
							'#757CFF',
						]
					}
				},
				{
					value: '#ff432e',
					data: {
						complementary: [
							'#0D2226',
							'#2EB36D',
							'#75FFB7',
						]
					}
				},
				{
					value: '#fefffc',
					data: {
						complementary: [
							'#0D2226',
							'#5DB0FF',
							'#FF7680',
							'#008FAD',
							'#BD05FA',
						]
					}
				},
			],
			card: {
				slug: 'color',
				size: 'square'
			}
		},
		{
			type: 'options',
			title: 'Quel est votre signe astrologique ?',
			options: [
				{
					value: 'Verseau',
					data: {
						rigid: 0,
						refined: 2,
						mystical: 1
					}
				},
				{
					value: 'Poisson',
					data: {
						rigid: 0,
						refined: 1,
						mystical: 1
					}
				},
				{
					value: 'Bélier',
					data: {
						rigid: 2,
						refined: 0,
						mystical: 0
					}
				},
				{
					value: 'Taureau',
					data: {
						rigid: 1,
						refined: 0,
						mystical: 1
					}
				},
				{
					value: 'Gémeaux',
					data: {
						rigid: 1,
						refined: 0,
						mystical: 1
					}
				},
				{
					value: 'Cancer',
					data: {
						rigid: 0,
						refined: 2,
						mystical: 1
					}
				},
				{
					value: 'Lion',
					data: {
						rigid: 1,
						refined: 0,
						mystical: 0
					}
				},
				{
					value: 'Vierge',
					data: {
						rigid: 2,
						refined: 2,
						mystical: 0
					}
				},
				{
					value: 'Balance',
					data: {
						rigid: 2,
						refined: 2,
						mystical: 2
					}
				},
				{
					value: 'Scorpion',
					data: {
						rigid: 1,
						refined: 0,
						mystical: 2
					}
				},
				{
					value: 'Sagittaire',
					data: {
						rigid: 1,
						refined: 2,
						mystical: 1
					}
				},
				{
					value: 'Capricorne',
					data: {
						rigid: 1,
						refined: 0,
						mystical: 1
					}
				}
			],
			card: {
				size: 'small'
			}
		},
		{
			type: 'options',
			title: 'Ou puisez-vous votre énergie ?',
			options: [
				{
					value: 'Dans votre univers intérieur : lorsque vous êtes seul(e)',
					data: {
						rigid: 0,
						refined: 1,
						mystical: 0
					}
				},
				{
					value: 'À partir de l’environnement extérieur : lorsque vous partagez avec les autres',
					data: {
						rigid: 0,
						refined: 0,
						mystical: 1
					}
				}
			],
			card: {
				size: 'large'
			}
		},
		{
			type: 'options',
			title: 'Comment recueillez-vous l\'information ?',
			options: [
				{
					value: 'Par vos 5 sens : vous croyez seulement en ce que vous voyez / touchez / sentez',
					data: {
						rigid: 1,
						refined: 0,
						mystical: 0
					}
				},
				{
					value: 'En vous confiant à votre "6ème sens" : vous suivez votre instinct',
					data: {
						rigid: 0,
						refined: 0,
						mystical: 1
					}
				}
			],
			card: {
				size: 'large'
			}
		},
		{
			type: 'options',
			title: 'Qu\'est-ce qui entraine votre décision ?',
			options: [
				{
					value: 'Le raisonnement logique',
					data: {
						rigid: 0,
						refined: 1,
						mystical: 0
					}
				},
				{
					value: 'Vos valeurs',
					data: {
						rigid: 1,
						refined: 0,
						mystical: 0
					}
				}
			],
			card: {
				size: 'large'
			}
		},
		{
			type: 'options',
			title: 'De quelle manière vous lancez-vous dans l\'action ?',
			options: [
				{
					value: 'En échafaudant des plans : vos actions sont réfléchies',
					data: {
						rigid: 1,
						refined: 0,
						mystical: 0
					}
				},
				{
					value: 'En vous adaptant aux circonstances de la vie',
					data: {
						rigid: 0,
						refined: 0,
						mystical: 1
					}
				}
			],
			card: {
				size: 'large'
			}
		},
	]
})

export const mutations = {
	INCREMENT_STEP(state) {
		state.global.step.current++
	},
	DECREMENT_STEP(state) {
		state.global.step.current--
	},
	PUT_DATA(state, payload) {
		state.global.data.answers[payload.step] = {
			index: payload.index,
			content: payload.content,
			stats: payload.stats
		}

		window.statsData = state.global.data
	},
	PUT_STATS(state, payload) {
		state.global.data.stats.rigid = payload.rigid
		state.global.data.stats.refined = payload.refined
		state.global.data.stats.mystical = payload.mystical

		window.statsData = state.global.data
	}
}

export const getters = {
	GET_STATE(state) {
		return state.global
	},
	GET_QUESTIONS(state) {
		return state.questions
	},
}
