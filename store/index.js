export const state = () => ({
	global: {
		step: {
			current: 0
		},
		data: {
			answers: [

			]
		}
	},
	questions: [
		{
			type: 'options',
			title: 'Quelle est votre couleur préférée ?',
			options: [
				{
					value: '#00ff00',
					data: {

					}
				},
				{
					value: '#0000ff',
					data: {

					}
				},
				{
					value: '#ff0000',
					data: {

					}
				}
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
					value: 'Bélier',
					data: {

					}
				},
				{
					value: 'Taureau',
					data: {

					}
				},
				{
					value: 'Gémeaux',
					data: {

					}
				},
				{
					value: 'Cancer',
					data: {

					}
				},
				{
					value: 'Lion',
					data: {

					}
				},
				{
					value: 'Vierge',
					data: {

					}
				},
				{
					value: 'Balance',
					data: {

					}
				},
				{
					value: 'Scorpion',
					data: {

					}
				},
				{
					value: 'Sagittaire',
					data: {

					}
				},
				{
					value: 'Capricorne',
					data: {

					}
				},
				{
					value: 'Verseau',
					data: {

					}
				},
				{
					value: 'Poisson',
					data: {

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

					}
				},
				{
					value: 'À partir de l’environnement extérieur : lorsque vous partagez avec les autres',
					data: {

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

					}
				},
				{
					value: 'En vous confiant à votre "6ème sens" : vous suivez votre instinct',
					data: {

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

					}
				},
				{
					value: 'Vos valeurs',
					data: {

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

					}
				},
				{
					value: 'En vous adaptant aux circonstances de la vie',
					data: {

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
			content: payload.content
		}
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
