import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('expenses')
export class Expense {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  justification?: string | null

  @Column()
  receiptUrl?: string | null

  @Column({nullable: false, default: 0})
  quantity: number

  @Column({type: 'double'})
  unitPrice: number

  @Column({type: 'double'})
  totalPrice: number

  @Column()
  date: string

  @Column()
  userId: number

  @Column()
  expenseTypeId: number

}
