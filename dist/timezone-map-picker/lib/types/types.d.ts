export interface Timezone {
  timezone: string;
  country: string;
  pin?: string;
  offset: number;
  points?: string;
  zonename: string;
  selected?: boolean;
  sameOffset?: boolean;
}
