Flazzle 1.0.3

[![Build Status](https://travis-ci.org/ohmyjersh/flazzle.svg?branch=master)](https://travis-ci.org/ohmyjersh/flazzle)

>Minimalistic feature flag (flipper) library for React + Redux with a sweet dashboard

## Install

```sh
# Using Yarn:
yarn add flazzle

# Or, using NPM:
npm install flazzle --save
```

## Use

### 1. Create feature flag object
```js
    export default {
        featureThing:true
    }
```
*This could be a flat file or generated via an api call*
### 2. Create a store with flags reduxer

```jsx
import {createStore, combineReducers} from 'redux';
import flags from './[FLAG_LOCATION]'
let store = createStore(combineReducers({app:[ADD_ROOT_REDUCER]], flags:flazzleReducer(flags)}));
```

*This is just an example, just make sure to include flazzleReducer*

### 3. Add to the dashboard any component/container with access to the store
```jsx
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { flazzleActions, FlazzleDashboard } from 'flazzle';

export default props => (
      <div>
            ...
            <FlazzleDashboard flags={props.flags} updateFlags={props.actions.updateFlags} goBack={() => [PROP_TO_CLOSE_DASHBOARD]} />
            ...
      </div>
  );

function mapStateToProps(state) {
  return { state: state.app, flags: state.flags }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(flazzleActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
```
*Please checkout the demo project within the src folder to see how this is implemented.*

### 3. Add to components to hide/show features

```jsx
import React from 'react';
import {Flag} from 'flazzle';

export default ({flags}) => {
    return (
        <div>
            <Flag className="item" flag={flags.ReplaceStableComponent} experimental={() => <div>asdfadf experimental</div>} stable={() => <div>stable</div>} />
            <br />
            <Flag className="item" flag={flags.AddExperimentalComponent} experimental={() => <div>asdf experimental</div>} />
            </div>
        )
}
```

**That's all there is to it, start flipping.**

## Demo
[Flazzle Demo](https://ohmyjersh.github.io/flazzle/)

## Local Development

Install dependencies:
``` 
npm install
```
Build Library:
```
npm run build
```
Run Demo:
```
npm run demo
```

## Contributions:

Features, bug fixes and other changes to flazzle are gladly accepted. Please open issues or a pull request with your change.

Thank you for contributing!
