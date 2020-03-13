import Card from './Card.js'
import { map, shuffleArray, pick, hexToRgb } from './utils.js'
import * as V from './variations'

export class CardFront extends Card {
    constructor(p, opts) {
		super(p, opts)

		this.variations = Object.keys(V).map((key) => {
			return { obj: V[key] }
		})

		this.active = true
		this.init()
	}

	init() {
		const onKeydown = (e) => {
			if(e.key === 'Enter') {
				this.p.saveCanvas(`CARD_FRONT`, 'jpg')
			}
		}
		window.addEventListener('keydown', onKeydown)

		this.tokenSubDownloadRequest = PubSub.subscribe('DOWNLOAD_CANVAS', () => {
			this.p.saveCanvas(`CARD_FRONT`, 'jpg')
		})

		this.destroyEventListeners = PubSub.subscribe('DESTROY', () => {
			this.p.remove()

			this.active = false
			window.removeEventListener('keydown', onKeydown)
			PubSub.unsubscribe(this.tokenSubDownloadRequest)
		})


		this.playfair = this.p.loadFont('fonts/PlayfairDisplay-Medium.ttf')
		this.spadeImg = this.p.loadImage('images/spade.png')
		this.signImg = this.p.loadImage(`images/${this.data.answers[1].content}.png`)
		this.letterAImg = this.p.loadImage('images/letter-a.png')
	}

	displayText() {
		this.p.background(this.inner.color)
		this.p.strokeWeight(1)
		this.p.textAlign(this.p.LEFT, this.p.TOP)

		//center spade
		this.p.image(this.spadeImg, this.inner.center.x - 60, this.inner.center.y - 65, 120, 130)

		//center sign
		this.p.image(this.signImg, this.inner.center.x - 25, this.inner.center.y - 28, 50, 50)

		//spade top left
		this.p.image(this.spadeImg, this.inner.position.x + 7, this.inner.position.y + 35, 20, 30)

		// spade bottom right
		this.p.push()
		this.p.translate(this.inner.limit.x2 - 7, this.inner.limit.y2 - 35)
		this.p.rotate(this.p.PI)
		this.p.image(this.spadeImg, 0, 0, 20, 30)
		this.p.pop()

		//letter top left
		let letterTopLeft = 'A'
		this.p.textSize(21)
		this.p.textFont(this.playfair)
		this.p.fill(this.card.textColor)
		this.p.text(letterTopLeft, this.inner.position.x + 10, this.inner.position.y + 10, 30, 40)

		//letter bottom right
		this.p.push()
		let letterBottomRight = 'A'
		this.p.textSize(21)
		this.p.textFont(this.playfair)
		this.p.fill(this.card.textColor)
		this.p.translate(this.inner.limit.x2 - 10, this.inner.limit.y2 - 10)
		this.p.rotate(this.p.PI)
		this.p.text(letterBottomRight, 0, 0, 30, 40)
		this.p.pop()

		//legal text
		let stringBelowSpade = 'THE UNITED STATES PLAYING CARD COMPANY'
		this.p.textSize(7)
		this.p.fill(this.card.textColor)
		this.p.textAlign(this.p.CENTER, this.p.CENTER)
		this.p.text(stringBelowSpade, this.inner.center.x - 100, this.inner.center.y + 60, 200, 30)

		//legal text2
		let stringBelowSpade2 = 'MADE IN U.S.A'
		this.p.textSize(7)
		this.p.fill(this.card.textColor)
		this.p.textAlign(this.p.CENTER, this.p.CENTER)
		this.p.text(stringBelowSpade2, this.inner.center.x - 100, this.inner.center.y + 70, 200, 30)

		//brand text
		let stringAboveSpade = 'BICYCLE'
		this.p.textSize(25)
		this.p.textFont(this.playfair)
		this.p.fill(this.card.textColor)
		this.p.textAlign(this.p.CENTER, this.p.CENTER)
		this.p.text(stringAboveSpade, this.inner.center.x - 98, this.inner.center.y - 120, 200, 30)

		//brand text2
		let stringAboveSpade2 = '808'
		this.p.textSize(12)
		this.p.textFont(this.playfair)
		this.p.fill(this.card.textColor)
		this.p.textAlign(this.p.CENTER, this.p.CENTER)
		this.p.text(stringAboveSpade2, this.inner.center.x - 98, this.inner.center.y - 90, 200, 30)
	}

	resetStyle() {
	}

	initFold() {
	}

	displayFold() {
	}
}
