import { propNameType, propValueType } from '../renderer/UIElement';

export interface ZonesChildren {
  props: Record<propNameType, propValueType>;
  children: ZonesChildren[];
}

export interface ZonesProps {
  inputId: string;
  children: ZonesChildren[];
}
