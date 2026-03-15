import { colorSchemeLightCold, themeQuartz } from 'ag-grid-community';

export const tableTheme = themeQuartz.withPart(colorSchemeLightCold).withParams({
  headerBackgroundColor: 'var(--color-orange-200)',
  iconButtonHoverBackgroundColor: 'var(--color-orange-100)',
  headerColumnResizeHandleColor: 'var(--color-orange-100)',
  rowHoverColor: 'var(--color-orange-50)',
  fontFamily: 'var(--default-font-family)',
  borderColor: 'var(--color-orange-200)',
  textColor: 'var(--color-neutral-800)',
  rangeSelectionBorderColor: 'transparent',
  backgroundColor: 'var(--color-orange-100)',
});
