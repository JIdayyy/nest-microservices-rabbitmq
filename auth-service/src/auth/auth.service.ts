import { Injectable } from '@nestjs/common';
import { SigninInput } from './dto/signin.input';
import { SignupInput } from './dto/signup.input';

@Injectable()
export class AuthService {
  signup(createAuthInput: SignupInput) {
    console.log('signup', createAuthInput);
    return 'This action adds a new auth';
  }

  signin(createAuthInput: SigninInput) {
    console.log('signin', createAuthInput);

    return 'You are logged in !';
  }
}
