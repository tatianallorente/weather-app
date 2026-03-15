export type SvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

export type FormatMode = 'all' | 'date' | 'time';

export type ComponentWithChildren = Readonly<{
  children: React.ReactNode;
}>;
