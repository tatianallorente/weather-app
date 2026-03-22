import { SettingConfig } from './Settings.types';

export const SETTINGS: SettingConfig[] = [
  {
    key: 'temperatureUnits',
    title: 'Temperature',
    options: [
      { value: 'metric', label: 'Celsius (°C)' },
      { value: 'imperial', label: 'Fahrenheit (°F)' },
    ],
  },
  {
    key: 'windSpeedUnit',
    title: 'Wind Speed',
    options: [
      { value: 'kmh', label: 'km/h' },
      { value: 'ms', label: 'm/s' },
      { value: 'knots', label: 'Knots' },
    ],
  },
  {
    key: 'pressureUnit',
    title: 'Pressure',
    options: [
      { value: 'hpa', label: 'hPa' },
      { value: 'in', label: 'Inches' },
      { value: 'kpa', label: 'kPa' },
      { value: 'mm', label: 'mm' },
    ],
  },
  {
    key: 'precipitationUnit',
    title: 'Precipitation',
    options: [
      { value: 'mm', label: 'Millimeters' },
      { value: 'in', label: 'Inches' },
    ],
  },
  {
    key: 'distanceUnit',
    title: 'Distance',
    options: [
      { value: 'km', label: 'Kilometers' },
      { value: 'mi', label: 'Miles' },
    ],
  },
];
