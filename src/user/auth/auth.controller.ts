import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SignupDto } from '../dtos/auth.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/signup')
  @ApiOperation({ summary: 'Sign up as a new user' })
  @ApiCreatedResponse({
    description: 'Created new user',
  })
  @ApiConflictResponse({
    description: 'User already exists',
  })
  signup(@Body() body: SignupDto) {
    return this.authService.signUp(body);
  }
}
