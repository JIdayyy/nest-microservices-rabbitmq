import { SigninInput } from './signin.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class SignupInput extends PartialType(SigninInput) {}
