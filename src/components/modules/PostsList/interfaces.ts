export interface PostInterface {
  id: number;
  title: string;
  short_description: string;
  date_update: any;
}

export interface FieldsPostFormInterface {
  title: string;
  short_description: string;
}
export interface ErrorsPostFormInterface {
  title: boolean;
  short_description: boolean;
}
