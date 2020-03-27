import React from 'react';
import { asset } from 'react-360';
import Entity from 'Entity';

export default class Zombie extends React.Component {
  render() {
    return (
      <Entity
        source={{
          obj: asset('Zombie.obj'),
        }}
        style={{transform:[
          {translate: [-10, 0, -10]},
          {scaleX: 0.02 },
          { scaleY: 0.02 },
          { scaleZ: 0.02 },
        ]}}
      />
    );
  }
}