import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from "../schemas/users.schema";
import { UserProfileDto } from "./user-profile-dto";

@Injectable({})
export class UserProfileService {
    constructor(@InjectModel(Users.name) private readonly Users: Model<Users>) { }

    async allUsersAvailable(): Promise<Users[]> {
        try {
          const allUsers = await this.Users.find();
          return allUsers;
        } catch (error) {
          throw new Error(error.message);
        }
      }

      async userProfileInformation(userId: string): Promise<Users> {
        try {
          const user = await this.Users.findById(userId);
          return user;
        } catch (error) {
          throw new Error(error.message);
        }
      }
}