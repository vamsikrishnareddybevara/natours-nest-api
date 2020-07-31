import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tour } from './schemas/tour.schema';
import { Model } from 'mongoose';

@Injectable()
export class ToursService {
  constructor(@InjectModel(Tour.name) private tourModel: Model<Tour>) {}

  /**
   * @param {string} id - Tour id
   * @returns {Promise<Tour>} - New tour data
   */
  async getTour(id: string): Promise<Tour> {
    return this.tourModel.findById(id).exec();
  }

  /**
   * @returns {Promise<Tour[]>} - All tours
   */

  async getAllTours(): Promise<Tour[]> {
    return this.tourModel.find();
  }

  async updateTour(id: string, req): Promise<Tour> {
    return this.tourModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });
  }
}
