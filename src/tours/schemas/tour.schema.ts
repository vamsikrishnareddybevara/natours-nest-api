import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ toJSON: { virtuals: true }, toObject: { virtuals: true } })
export class Tour extends Document {
  @Prop({
    required: [true, 'A tour must have a name'],
    unique: true,
    maxlength: [40, 'A tour must have less or equal than 40 characters'],
    minlength: [10, 'A tour must have greater or equal than 10 characters']
  })
  name: string;

  @Prop()
  slug: string;

  @Prop({ default: false })
  secretTour: string;

  @Prop({ required: [true, 'A tour must have a duration'] })
  duration: number;

  @Prop({ required: [true, 'A tour must have a group size'] })
  maxgroupSize: number;

  @Prop({
    required: [true, 'A tour must have a difficulty'],
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty is either easy, medium, difficult'
    }
  })
  difficulty: string;

  @Prop({
    default: 4.5,
    min: [1, 'Rating must be above 1'],
    max: [5, 'Rating cannot exceed  5']
  })
  ratingsAverage: number;

  @Prop({ default: 0 })
  ratingsQuantity: number;

  @Prop({ required: [true, 'A tour must have a price'] })
  price: number;

  @Prop({
    validate: {
      validator: function(val: number): boolean {
        return val < this.price;
      },
      message: 'Discount price ({VALUE}) should be below regular price'
    }
  })
  priceDiscount: number;

  @Prop({ trim: true, required: [true, 'A tour must have a summary'] })
  summary: string;

  @Prop({ trim: true })
  description: string;

  @Prop({ required: [true, 'A tour must have a cover image'] })
  imageCover: string;

  @Prop([String])
  images: string[];

  @Prop({ type: Date, default: Date.now(), select: false })
  createdAt: Date;

  @Prop([Date])
  startDates: [Date];
}

export const TourSchema = SchemaFactory.createForClass(Tour);
