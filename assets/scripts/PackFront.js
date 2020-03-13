import PubSub from 'pubsub-js'

import Pack from './Pack.js'
import { map, shuffleArray, pick, hexToRgb } from './utils.js'
import * as V from './variations'

export class PackFront extends Pack {
    constructor(p, opts) {
		super(p, opts)

		this.variations = Object.keys(V).map((key) => {
			return { obj: V[key] }
		})

		this.active = true
		this.init()

		this.pool = []
		this.createPool()
	}



	init() {
		const onKeydown = (e) => {
			if(e.key === 'Enter') {
				this.p.saveCanvas(`PACK_FRONT`, 'jpg')
			}
		}
		window.addEventListener('keydown', onKeydown)

		this.tokenSubDownloadRequest = PubSub.subscribe('DOWNLOAD_CANVAS', () => {
			this.p.saveCanvas(`PACK_FRONT`, 'jpg')
		})

		this.destroyEventListeners = PubSub.subscribe('DESTROY', () => {
			this.p.remove()

			this.active = false
			window.removeEventListener('keydown', onKeydown)
			PubSub.unsubscribe(this.tokenSubDownloadRequest)
		})

		this.logo = this.p.loadImage('images/bicycle-logo-white.png')
		this.spade = this.p.loadImage('images/spade-logo.png')
	}

	displayText() {
		this.p.strokeWeight(1)
		this.p.textAlign(this.p.LEFT, this.p.TOP)

		//center spade
		this.p.image(this.logo, this.inner.center.x - 75, this.inner.center.y - 140, 150, 120)

		//center spade
		this.p.image(this.spade, this.inner.center.x - 70, this.inner.center.y - 70, 140, 130)

		//brand text 2
		let stringBelowSpade = 'ZODIAC'
		this.p.textSize(20)
		this.p.fill(this.card.textColor)
		this.p.textAlign(this.p.CENTER, this.p.CENTER)
		this.p.text(stringBelowSpade, this.inner.center.x - 98, this.inner.center.y + 77, 200, 30)

		//brand text 3
		let stringBelowSpade2 = 'PLAYING CARDS'
		this.p.textSize(16)
		this.p.fill(this.card.textColor)
		this.p.textAlign(this.p.CENTER, this.p.CENTER)
		this.p.text(stringBelowSpade2, this.inner.center.x - 98, this.inner.center.y + 105, 200, 30)
	}

	createPool() {
		const stats = {
			rigid: 2,
			refined: 4,
			mystical: 2
		}

		this.variations.forEach((variation, i) => {
			const diff = {
				rigid: Math.abs(stats.rigid - variation.obj.stats.rigid) <= 2,
				refined: Math.abs(stats.refined - variation.obj.stats.refined) <= 2,
				mystical: Math.abs(stats.mystical - variation.obj.stats.mystical) <= 1
			}

			if(diff.rigid && diff.refined && diff.mystical) {
				this.pool.push(variation)
			}

		})

		this.pool = shuffleArray(this.pool)
	}

	resetStyle() {
		this.rgbColor = hexToRgb(this.inner.drawingColor)

		this.p.smooth(8)
		this.p.noFill()
		this.p.stroke(this.rgbColor.r, this.rgbColor.g, this.rgbColor.b, 10)
		this.p.strokeWeight(0.2)
	}

	initFold() {
		this.resetStyle()

		this.go = true
		this.x1 = this.y1 = -3
		this.x2 = this.y2 = 3
		this.y = this.y1
		this.step = (this.x2 - this.x1) / (2 * this.inner.size.width)
	}

	combineFolds(v) {
		for(let i = 0; i < this.pool.length; i++) {
			const variation = this.pool[i]
			v = variation.obj.func(this.p, v, 2)
		}

		return v
	}

	drawVariation(x, y) {
		let v = this.p.createVector(x, y)

		v = this.combineFolds(v)

		this.pool = shuffleArray(this.pool)

		const xx = map(this.p.randomGaussian(v.x, 0.0001), this.x1, this.x2, this.inner.limit.x1, this.inner.limit.x2)
		const yy = map(this.p.randomGaussian(v.y, 0.0001), this.y1, this.y2, this.inner.limit.y1, this.inner.limit.y2)

		this.resetStyle()
		this.p.point(xx, yy)
	}

	displayFold() {
		if (this.go) {
			for (let i = 0; (i < 20)&this.go; i++) {
				for (let x = this.x1; x <= this.x2; x += this.step) {
					this.iteration++
					this.drawVariation(x, this.y)
				}
				this.y += this.step

				if (this.y > this.y2) {
					this.go = false
				}
			}
		}
	}
}
