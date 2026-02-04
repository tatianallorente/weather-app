import { GlobalStyles } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import {
  CellStyleModule,
  CheckboxEditorModule,
  ClientSideRowModelModule,
  ColumnApiModule,
  CsvExportModule,
  DateFilterModule,
  ModuleRegistry,
  NumberFilterModule,
  PaginationModule,
  RowSelectionModule,
  SelectEditorModule,
  TextEditorModule,
  TextFilterModule,
  UndoRedoEditModule,
  ValidationModule,
} from 'ag-grid-community';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';
import App from './App.tsx';
import './styles/main.css';
import customTheme from './styles/mui';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  PaginationModule,
  CellStyleModule,
  UndoRedoEditModule,
  TextEditorModule,
  TextFilterModule,
  NumberFilterModule,
  DateFilterModule,
  SelectEditorModule,
  CheckboxEditorModule,
  CsvExportModule,
  RowSelectionModule,
  ColumnApiModule,
  ...(import.meta.env.DEV ? [ValidationModule] : []),
]);

const root = document.getElementById('root');

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
]);

createRoot(root!).render(
  <StyledEngineProvider enableCssLayer>
    <ThemeProvider theme={customTheme}>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StyledEngineProvider>
);
