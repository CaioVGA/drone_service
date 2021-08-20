export type SettingsType = {
  id_settings?: number;
  status_settings: number;
  lat_settings: number;
  lon_settings: number;
  alt_settings: number;
  levelbattery_settings: number;
  description_settings: string;
  create_settings: Date;
  update_settings: Date;
  fk_drone?: number;
}
