import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { profilePicture } from "../user-profile/user-profile-dto";

@Schema({ timestamps: true })
export class Users extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  gender: string;

  @Prop()
  dateOfBirth: Date;

  @Prop()
  profilePicture: profilePicture;

  @Prop()
  country: string;

  // ... other properties
}

export const UserSchema = SchemaFactory.createForClass(Users);
