import { InputType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Order } from '../../../../../Downloads/WinRAR_archive/orders/entities/order.entity';

@InputType()
export class OrderUpdatesInput extends PickType(Order, ['id']) {}
