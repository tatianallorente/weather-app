export type Option = {
  value: string;
  label: string;
};

export type SettingConfig = {
  key: string;
  title: string;
  options: Option[];
};
