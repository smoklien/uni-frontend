import { Component } from 'react';

class Content extends Component {
  state = {
    colors: ['default-color', 'color-red', 'color-blue', 'color-orange', 'color-green'],
    colorCounters: { hobbiesHeader: 0, hobbyItem: 0 },
  };

  handleColorChange = (elementId) => {
    const { colors, colorCounters } = this.state;
    const element = document.getElementById(elementId);

    if (element) {
      const newCount = (colorCounters[elementId] + 1) % colors.length;

      element.className = colors[newCount];

      this.setState({ colorCounters: { ...colorCounters, [elementId]: newCount } })
    }
  }

  render() {
    return (
      <div id='contentComponent'>
        <h2>About me</h2>
        <p>I was Born on sunny day upon the Dnipro river's shore.</p>
        <p>
          During my childhood i was visiting a default public school. Now I am studying at the Kyiv Polytechnic
          Institute.
        </p>

        <h2
          id='hobbiesHeader'
          className='default-color'
          onClick={() => this.handleColorChange('hobbiesHeader')}
        >
          My Hobbies
        </h2>
        <ul>
          <li
            id='hobbyItem'
            className='default-color'
            onClick={() => this.handleColorChange('hobbyItem')}
          >
            Photography and photo editing.
          </li>
          <li>Cycling.</li>
          <li>Enjoying pleasent architecture and nature.</li>
        </ul>

        <h2>Favourite movies</h2>
        <ol>
          <li>Showshank Redemption.</li>
          <li>Forrest Gump.</li>
          <li>The Departed.</li>
        </ol>

        <p>
          I visited a couple corners of the Europe, therefore I cannot give any convenient answers. But for this
          little moment, I prefer Kyiv for living due to its transport system{' '}
          <i>(subway, speed trams, etc.)</i>, rich architecture, opportunities and safeness.
        </p>
      </div>
    )
  }
}

export default Content;
