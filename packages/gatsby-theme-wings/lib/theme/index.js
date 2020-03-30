import createDesignConfig from './design';
import typography from '../typography';

export default ({ design }) => ({
  ...createDesignConfig(design),
  typography,
});
