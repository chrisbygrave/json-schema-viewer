import { Box, IBoxCSS } from '@stoplight/ui-kit';
import { JSONSchema4TypeName } from 'json-schema';
import * as React from 'react';
import { useTheme } from '../theme';
import { JSONSchema4CombinerName } from '../types';

export const Type: React.FunctionComponent<IType> = ({ type, subtype, children }) => {
  const css = rowStyles({ type });

  return (
    <Box as="span" css={css}>
      {type === 'array' && subtype && subtype !== 'array' ? `array[${subtype}]` : type}
      {children}
    </Box>
  );
};

export interface IType {
  type: JSONSchema4TypeName | JSONSchema4CombinerName | '$ref';
  subtype?: JSONSchema4TypeName | JSONSchema4TypeName[];
}

export const rowStyles = ({ type }: IType): IBoxCSS => {
  const theme = useTheme();

  return type !== undefined && type in theme.types && { color: theme.types[type] };
};