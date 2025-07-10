import { RolUsuarioEntity } from '../../../src/auth/entities/rol-usuario.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { HorarioEstupidoEntity } from '../../../src/horario/entities/horario.entity';

@Entity('usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  correo: string;

  @Column()
  clave: string;

  @OneToMany(() => RolUsuarioEntity, (rolUsuario) => rolUsuario.usuario)
  rolesUsuario: RolUsuarioEntity[];

  @OneToMany(() => HorarioEstupidoEntity, (horario) => horario.usuario)
  horarios: HorarioEstupidoEntity[];
}
