export const state = () => ({
	global: {
		step: {
			current: 0
		}
	},
	questions: [
		{
			type: 'options',
			title: 'Quelle est votre couleur préférée ?',
			options: [
				'#00ff00',
				'#0000ff',
				'#ff0000'
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
				'Bélier',
				'Taureau',
				'Gémeaux',
				'Cancer'
			],
			card: {
				size: 'small'
			}
		},
		{
			type: 'options',
			title: 'Ou puisez-vous votre énergie ?',
			options: [
				'Dans votre univers intérieur : lorsque vous êtes seul(e)',
				'À partir de l’environnement extérieur : lorsque vous partagez avec les autres'
			],
			card: {
				size: 'large'
			}
		},
		{
			type: 'options',
			title: 'Comment recueillez-vous l\'information ?',
			options: [
				'Par vos 5 sens : vous croyez seulement en ce que vous voyez / touchez / sentez',
				'En vous confiant à votre "6ème sens" : vous suivez votre instinct'
			],
			card: {
				size: 'large'
			}
		},
		{
			type: 'options',
			title: 'Qu\'est-ce qui entraine votre décision ?',
			options: [
				'Le raisonnement logique',
				'Vos valeurs'
			],
			card: {
				size: 'large'
			}
		},
		{
			type: 'options',
			title: 'De quelle manière vous lancez-vous dans l\'action ?',
			options: [
				'En échafaudant des plans : vos actions sont réfléchies',
				'En vous adaptant aux circonstances de la vie'
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
