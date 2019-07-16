import { addParameters, addDecorator, configure } from '@storybook/react';
import { themes, create } from '@storybook/theming';
import { INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {configureActions} from '@storybook/addon-actions';
import React from "react";

import { theme } from '../src/config/theme';
import {ThemeProvider} from 'styled-components'
import { jsxDecorator } from 'storybook-addon-jsx';
import BootstrapProvider from '@bootstrap-styled/provider';

import '../src/global.css';


const basicTheme = create({
  base: 'light',
  brandTitle: 'README addon',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null,
});

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    theme: basicTheme,
    // theme: themes.dark,   
  },
  readme: {
    codeTheme: 'github',
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    },
  },
  
});


configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
});

/**
 * READ ALL .STORY.JS FILES INTO PATH
 */
const req = require.context('../stories', true, /.story\.js$/);
addDecorator(jsxDecorator);

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <BootstrapProvider theme={theme}>
      {story()}
    </BootstrapProvider>
  </ThemeProvider>
))


function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(req)
}

configure(loadStories, module);