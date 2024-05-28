import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthenticationModule } from './authentication/authentication.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://eventzaruser:dPPaze6FuA9APfH8@cluster0.qfqv2fp.mongodb.net/users?retryWrites=true&w=majority'),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      global: true,
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get('JWT_EXPIRE'),
          },
        };
      },
      inject: [ConfigService],
    }),
    ConfigModule,
    AuthenticationModule,
    UserProfileModule
  ],
  providers: [ConfigService],

})
export class AppModule { }
