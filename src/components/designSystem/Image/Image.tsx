import { backgroundColor, border, createRestyleComponent, layout, spacing } from '@shopify/restyle';
import { Image as RNImage } from 'react-native';

import { Theme } from '../../../utils/theme/theme';
import { ImageProps } from './Image.types';

const Image = createRestyleComponent<ImageProps, Theme>([spacing, backgroundColor, border, layout], RNImage);

export default Image