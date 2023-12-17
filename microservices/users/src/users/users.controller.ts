import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/users.service';

@Controller()
export class UsersMicroserviceController {
  constructor(private usersService: UsersService) {}

  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }

  @EventPattern('paymentCreated')
  paymentCreated(@Payload() data: any) {
    console.log(data);
  }
}
