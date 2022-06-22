import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface SignupParams {
  email: string;
  password: string;
  name: string;
  phone: string;
}
@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async signUp({ email }: SignupParams) {
    const userExists = await this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExists) {
      throw new ConflictException();
    }
    console.log({ userExists });
  }
}
