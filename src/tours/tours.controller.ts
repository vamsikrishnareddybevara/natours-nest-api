import { Controller, Get } from '@nestjs/common';

@Controller('tours')
export class ToursController {
    @Get()
    getAllTours(): string {
        return "All the tours"
    }
}
