/* eslint-disable react-native/no-inline-styles */
const STORYBOOK_START = true;

export default STORYBOOK_START
? require('./storybook').default
: require('./src/App').default;
