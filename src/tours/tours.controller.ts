import {
  Controller,
  Get,
  Param,
  BadRequestException,
  Patch,
  Body,
  Req
} from '@nestjs/common';
import { ToursService } from './tours.service';
import { Tour } from './schemas/tour.schema';

@Controller('tours')
export class ToursController {
  constructor(private readonly toursService: ToursService) {}

  @Get()
  async getAllTours(): Promise<{ results: number; tours: Tour[] }> {
    const tours = await this.toursService.getAllTours();
    return {
      results: tours.length,
      tours
    };
  }

  @Get(':id')
  async getTour(@Param('id') id: string): Promise<Tour> {
    const tour = await this.toursService.getTour(id);

    if (!tour) {
      throw new BadRequestException(`The tour with that id cannot be found`);
    }
    return tour;
  }

  @Patch(':id')
  async updateTour(@Param('id') id: string, @Req() req) {
    const tour = await this.toursService.updateTour(id, req);

    if (!tour) {
      throw new BadRequestException(`The tour with that id cannot be found`);
    }

    return tour;
  }
}
