import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('settings')
export class SettingsEntity {
  @PrimaryGeneratedColumn({name: 'id_settings'})
  id_settings: number;

  @Column( { name: 'status_settings',type: 'int', nullable: false })
  status_settings: number;

  @Column( { name: 'lat_settings',type: 'int', nullable: false })
  lat_settings: number;

  @Column( { name: 'lon_settings',type: 'int', nullable: false })
  lon_settings: number;

  @Column( { name: 'alt_settings',type: 'int', nullable: false })
  alt_settings: number;

  @Column( { name: 'levelbattery_settings',type: 'int', nullable: false })
  levelbattery_settings: number;

  @Column( { name: 'description_settings',type: 'varchar', nullable: false })
  description_settings: string;

  @Column( { name: 'create_settings', type: 'timestamp' })
  create_settings: Date;

  @Column({ name: 'update_settings', type: 'timestamp' })
  update_settings: Date;

  @Column( { name: 'fk_drone',type: 'int', nullable: false })
  fk_drone: number;

}

