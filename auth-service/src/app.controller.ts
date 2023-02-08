import { Controller, Get } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'signin' })
  signin(@Args('email') email: string, @Args('password') password: string) {
    console.log('ca passe');
    return 'OKOKOK';
  }
}
