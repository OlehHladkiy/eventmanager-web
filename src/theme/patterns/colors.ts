import * as R from 'ramda';

export const colorScheme = {
  white: { value: '#FFF', name: 'White' },
  black: { value: '#000', name: 'Black' },
  almostBlack: { value: '#1e0a3c', name: 'AlmostBlack' },
  lightGray: { value: '#39364f', name: 'LightGray' },
  blue: { value: '#1890ff', name: 'Blue' },
  grayishBlack: { value: '#DBDAE3', name: 'GrayishBlack' },
  boldBlue: { value: '#1a6fe0', name: 'boldBlue' },
  boldGray: { value: '#EEEDF2', name: 'boldGray' },
  lightBlackTone: { value: '#35475c', name: 'lightBlackTone' },
  gray: { value: '#e8e8e8', name: 'Gray' },
  red: { value: '#ff0000', name: 'Red' },
  green: { value: '#008000', name: 'Green' },
  grayishBlue: { value: '#38364f', name: 'GrayishBlue' },
  almostWhite: { value: '#F8F7FA', name: 'AlmostWhite' },
};

export const getColor = (colorKey: string) =>
  R.path([colorKey, 'value'], colorScheme);

const getColorsMap = () =>
  R.compose(
    R.reduce(
      (
        acc: Record<string, any>,
        [key, scheme]: [string, Record<string, any>],
      ) => R.assoc(key, scheme.value, acc),
      {},
    ),
    R.toPairs,
  )(colorScheme);

const colors = getColorsMap();

export default colors;
