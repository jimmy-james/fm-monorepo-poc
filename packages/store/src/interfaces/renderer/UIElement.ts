import {
  Alert,
  Button,
  Checkbox,
  Column,
  Dropdown,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Modal,
  MultipleSelect,
  Option,
  Paragraph,
  QuestionButton,
  RadioButton,
  ScrollButton,
  SingleSelect,
  Slider,
  Stack,
  Stem,
  SVG,
  Tabs,
  Tag,
  TextInput,
  Zones,
  ZonesBackground,
  Zone,
} from '@coreym/benchmark';

const ComponentMap = {
  Alert: Alert,
  Button: Button,
  Checkbox: Checkbox,
  Column: Column,
  Dropdown: Dropdown,
  Flex: Flex,
  Grid: Grid,
  Heading: Heading,
  Icon: Icon,
  Image: Image,
  Modal: Modal,
  MultipleSelect: MultipleSelect,
  Option: Option,
  Paragraph: Paragraph,
  QuestionButton: QuestionButton,
  RadioButton: RadioButton,
  ScrollButton: ScrollButton,
  SingleSelect: SingleSelect,
  Slider: Slider,
  Stack: Stack,
  Stem: Stem,
  Svg: SVG,
  Tabs: Tabs,
  Tag: Tag,
  TextInput: TextInput,
  Zones: Zones,
  ZonesBackground: ZonesBackground,
  Zone: Zone,
};
export type propNameType =
  | 'type'
  | 'value'
  | 'mb'
  | 'flexDirection'
  | 'justifyContent'
  | 'x'
  | 'y'
  | 'width'
  | 'height'
  | 'inputId'
  | 'fontWeight'
  | 'fontStyle'
  | 'text';
//   | symbol;
export type widgetType = keyof typeof ComponentMap;
// export type objectLiteral<T> = Record<T, string>;
export type propValueType = string | number | boolean;
export interface UIElement {
  element?: widgetType;
  props?: Record<propNameType, propValueType>;
  children?: UIElement[];
}
export interface RootItemConfig {
  type: string;
  accession: string;
  content: UIElement;
}
