import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsAlphanumeric,
  Matches
} from 'class-validator';

export class UpdateTourDto {
  @IsNotEmpty()
  name;
}
