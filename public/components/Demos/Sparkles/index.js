import { Component } from 'preact'
import Card from '../../Card/index.js'
import CardStyle from '../../Card/style.module.css'

export default class Sparkles extends Component {
  constructor() {
    super();
      this.state = {
      number: 30,
      hue: Math.floor(Math.random() * 360),
      heightVariance: 9,
      widthVariance: 12,
      weightVariance: 2
    }
  }

  componentDidMount () {
    const workletScript = document.createElement("script")
    workletScript.src = `https://unpkg.com/extra.css/sparkles.js`
    document.body.appendChild(workletScript)
  }

  render() {
    return (
      <Card name="Sparkles" authorName="@una" authorLink="https://twitter.com/una" authorImg="https://webdev.imgix.net/images/authors/una@2x.jpg" penLink='MRxgNN'>
        <div className={CardStyle.demoContainer}>
          <div className={CardStyle.demoArea} style={{
              '--extra-sparkleHue': this.state.hue,
              '--extra-sparkleNumber': this.state.number,
              '--extra-sparkleWidthVariance': this.state.widthVariance,
              '--extra-sparkleHeightVariance': this.state.heightVariance,
              '--extra-sparkleWeightVariance': this.state.weightVariance,
              background: 'paint(extra-sparkles)'
              }}></div>
          <ol className={CardStyle.customProps}>
            <li>.demo	&#123;</li>
            <li>
              <label htmlFor="--extra-sparkleNumber">--extra-sparkleNumber:</label>
              <div className={CardStyle.input}>
                <div className={CardStyle.inputVal}>{this.state.number}</div>
                <input className={CardStyle.rangeSlider} type="range" value={this.state.number} id="--extra-sparkleNumber" ref={this.number} onInput={e => this.setState({ number: e.target.value })}/>
              </div>
            </li>
            <li>
              <label htmlFor="--extra-sparkleHue">--extra-sparkleHue:</label>
              <div className={CardStyle.input}>
                <div className={CardStyle.inputVal}>{this.state.hue}</div>
                <input className={CardStyle.rangeSlider} type="range" min="0" max="360" value={this.state.hue} id="--extra-sparkleHue"
                  onInput={e => this.setState({ hue: e.target.value })} />
                </div>
            </li>
            <li>
              <label htmlFor="--extra-sparkleWidthVariance">--extra-sparkleWidthVariance:</label>
              <div className={CardStyle.input}>
                <div className={CardStyle.inputVal}>{this.state.widthVariance}</div>
                <input className={CardStyle.rangeSlider} type="range" value={this.state.widthVariance} id="--extra-sparkleWidthVariance"
                  onInput={e => this.setState({ widthVariance: e.target.value })} />
                </div>
            </li>
            <li>
              <label htmlFor="--extra-sparkleHeightVariance">--extra-sparkleHeightVariance:</label>
              <div className={CardStyle.input}>
                <div className={CardStyle.inputVal}>
                {this.state.heightVariance}</div>
                <input className={CardStyle.rangeSlider} type="range" value={this.state.heightVariance} id="--extra-sparkleHeightVariance"
                  onInput={e => this.setState({ heightVariance: e.target.value })} />
              </div>
            </li>
            <li>
              <label htmlFor="--extra-sparkleWeightVariance">--extra-sparkleWeightVariance:</label>
              <div className={CardStyle.input}>
                <div className={CardStyle.inputVal}>{this.state.weightVariance}</div>
                <input className={CardStyle.rangeSlider} type="range" min="0" max="10" value={this.state.weightVariance} id="--extra-sparkleWeightVariance" ref={this.weightVariance} onInput={e => this.setState({ weightVariance: e.target.value })}/>
              </div>
            </li>
            <li>&#125;</li>
          </ol>
        </div>
      </Card>
    )
  }
}