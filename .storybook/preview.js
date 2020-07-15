import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  macbook: {
    name: 'Macbook Pro',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
  notebook: {
    name: 'Notebook General',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
  },
});
