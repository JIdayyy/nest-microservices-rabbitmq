import { Resolver, Args } from '@nestjs/graphql';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'signin' })
  signin(@Args('email') email: string, @Args('password') password: string) {
    return this.authService.signin({ email, password });
  }
}
