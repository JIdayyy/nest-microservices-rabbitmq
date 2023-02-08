import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_CLIENT')
    private readonly client: ClientProxy,
  ) {}

  @Get('/signin')
  signUp() {
    console.log('signin');
    return this.client.send({ cmd: 'signin' }, { username: 'john' });
  }
}
