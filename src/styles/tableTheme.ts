import { colorSchemeLightCold, themeQuartz } from 'ag-grid-community';

export const tableTheme = themeQuartz.withPart(colorSchemeLightCold).withParams({
  headerBackgroundColor: 'var(--color-neutral-100)',
  iconButtonHoverBackgroundColor: 'var(--color-neutral-200)',
  headerColumnResizeHandleColor: 'var(--color-neutral-200)',
  rowHoverColor: 'var(--color-neutral-200)',
  fontFamily: 'var(--default-font-family)',
  borderColor: 'var(--color-neutral-200)',
  textColor: 'var(--color-neutral-800)',
  rangeSelectionBorderColor: 'transparent',
});
