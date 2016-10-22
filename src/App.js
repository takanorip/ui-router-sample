import React from 'react';
import ReactDOM from 'react-dom';
import UIRouterReact, {UIView, UISref, UISrefActive} from 'ui-router-react';

import stylus from './App.styl';


const router = new UIRouterReact();

const topState = {
  name: 'top',
  url: '/',
  component: () => <div>top</div>
}

const aboutState = {
  name: 'about',
  url: '/about',
  component: () => <div>about</div>
}

const worksState = {
  name: 'works',
  url: '/works',
  component: () => <div>works</div>
}

router.stateRegistry.register(topState);
router.stateRegistry.register(aboutState);
router.stateRegistry.register(worksState);

router.start();

ReactDOM.render(
  <div>
    <UISrefActive class="active">
      <UISref to="top"><a>TOP</a></UISref>
    </UISrefActive>
    <UISrefActive class="active">
      <UISref to="about"><a>ABOUT</a></UISref>
    </UISrefActive>
    <UISrefActive class="active">
      <UISref to="works"><a>WORKS</a></UISref>
    </UISrefActive>

    <UIView/>
  </div>,
  document.getElementById('app')
);
