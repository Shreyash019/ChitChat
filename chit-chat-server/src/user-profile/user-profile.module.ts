import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserProfileController } from "./user-profile.controller"
import { UserProfileService } from "./user-profile-service";
import { Users, UserSchema } from './../schemas/users.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }]),
      ],
      controllers: [UserProfileController],
      providers: [UserProfileService],
      exports: [UserProfileService],
      
    })
export class UserProfileModule {}