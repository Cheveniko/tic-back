import { UsuarioEntity } from '../../../src/usuarios/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('horario')
export class HorarioEstupidoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  fechaCreacion: Date;

  @Column({ type: 'text' })
  horarioJson: string;

  @Column({ type: 'text' })
  descripcion: string;

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.horarios)
  @JoinColumn({ name: 'idUsuario' })
  usuario: UsuarioEntity;
}

@Entity('horarios')
export class HorarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  profesor: string;

  @Column({ type: 'varchar', length: 100 })
  aula: string;

  @Column({ type: 'varchar', length: 50 })
  grupo: string;

  @Column({ type: 'varchar', length: 255 })
  materia: string;

  @Column({ type: 'varchar', length: 20 })
  dia: string;

  @Column({ type: 'time' })
  hora_inicio: string;

  @Column({ type: 'time' })
  hora_fin: string;

  @Column({ type: 'varchar', length: 20 })
  semestre: string;
}
