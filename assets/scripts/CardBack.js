import Card from './Card.js'
import { map, randomRange, hexToRgb } from './utils.js'
import * as V from './variations'

export class CardBack extends Card {
    constructor(p, opts) {
		super(p, opts)

		// this.variations = [
		// 	V.getSinusoidal,
		// 	V.getHyperbolic,
		// 	V.getSwirl,
		// 	V.getSpherical,
		// 	V.getHorseshoe,
		// 	V.getPolar,
		// 	V.getHandkerchief,
		// 	V.getHeart,
		// 	V.getDisc,
		// 	V.getSpiral,
		// 	V.getDiamond,
		// 	V.getEx,
		// 	V.getJulia,
		// 	V.getJuliaLeft,
		// 	V.getJuliaRight,
		// 	V.getFisheye,
		// 	V.getExponential,
		// 	V.getPower,
		// 	V.getSech,
		// 	V.getPerspective
		// ]

		this.variations = Object.keys(V).map((key) => {
			return { [key]: V[key] }
		})

		this.iteration = 0
	}

	resetStyle() {
		this.rgbColor = hexToRgb(this.data[1].content.color)

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
		for(let i = 0; i < Math.floor(randomRange(1, 4)); i++) {
			const func = this.variations[Math.floor(randomRange(0, this.variations.length - 1))]
			v = func(this.p, v, 1)
		}

		return v
	}

	drawVariation(x, y) {
		let v = this.p.createVector(x, y)

		// v = this.combineFolds(v)

		v = V.getSinusoidal.func(this.p, v, 1)

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
