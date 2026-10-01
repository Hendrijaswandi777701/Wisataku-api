import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class CreateUlasanInput {
  @Field(() => Int)
  @IsInt()
  destinasiId: number;

  @Field(() => Int)
  @IsInt()
  rating: number;

  @Field()
  @IsString()
  komentar: string;
}