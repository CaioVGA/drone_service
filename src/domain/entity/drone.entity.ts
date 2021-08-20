import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('drone')
export class DroneEntity {
  @PrimaryGeneratedColumn({name: 'id_drone'})
  id_drone: number;

  @Column( { name: 'name_drone',type: 'varchar', nullable: false })
  name_drone: string;

  @Column( { name: 'key_drone',type: 'int', nullable: false })
  key_drone: number;

  @Column( { name: 'secretkey_drone',type: 'int', nullable: false })
  secretkey_drone: number;

  @Column( { name: 'create_drone', type: 'timestamp' })
  create_drone: Date;

  @Column({ name: 'update_drone', type: 'timestamp' })
  update_drone: Date;

}

