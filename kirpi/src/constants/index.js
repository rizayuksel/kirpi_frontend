import {Dimensions, PixelRatio} from 'react-native';


export const API_BASE_URL = '';
export const CONTENT_SPACING = 16;


// Dimensions

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

export default function calculateResponsiveValue (
  baseValue,
  factor,
) {
  const referenceScreenHeight = 812;

  const heightFactor = SCREEN_HEIGHT / referenceScreenHeight;

  const responsiveValue = baseValue * heightFactor * factor;

  return PixelRatio.roundToNearestPixel(responsiveValue);
}
