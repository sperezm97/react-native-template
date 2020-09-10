/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import './rn-addons';

// import stories
configure(() => {
  // eslint-disable-next-line global-require
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage:
    require('@react-native-community/async-storage').default ||
    require('react-native').AsyncStorage ||
    null,
});

AppRegistry.registerComponent('TemplateRepo', () => StorybookUIRoot);
export default StorybookUIRoot;
