import React, { Component } from 'react';
import Transformer from '../Components/Transformer';

class TransformersSection extends Component {

  mapTransformers = () => {
    return this.props.proptimusii.map(bot => {
      return <Transformer 
          key={bot.id}
          name={bot.name}
          url={bot.url}
      />
    })
  }

  render() {
    return (
      <section className = "transformers-section">
        {this.mapTransformers()}
      </section>
    );
  }
}

export default TransformersSection;
