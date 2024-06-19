import { PartialType } from '@nestjs/mapped-types';
import { CreateSpotDto } from './create-spot.request';

export class UpdateSpotDto extends PartialType(CreateSpotDto) {}
