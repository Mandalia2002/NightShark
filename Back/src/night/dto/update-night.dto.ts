import { PartialType } from '@nestjs/mapped-types';
import { CreateNightDto } from './create-night.dto';

export class UpdateNightDto extends PartialType(CreateNightDto) {}
