import {
  IsOptional,
  IsString,
  IsNumber,
  IsNotEmpty,
  MinLength,
  IsEmail,
} from 'class-validator';

export class UserProfileDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsNumber()
  @MinLength(10)
  phoneNumber: number;

  @IsOptional()
  @IsString()
  @MinLength(5)
  password: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  profilePic: string;
}

export class profilePicture{
  @IsNotEmpty()
  @IsString()
  profileId: string

  @IsNotEmpty()
  @IsString()
  url: string
}
