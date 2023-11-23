import {Controller, Get} from '@nestjs/common'
import { ImageService } from './images.services';
import { Image } from './interfaces/images.interface';



const data = [
    {
      title: "Aenean leo",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "In turpis",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Lorem Ipsum",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];


@Controller('Images')
export class ImageController {
    constructor(private imageService: ImageService) {}


    @Get()
   async findAll(): Promise<Image[]> {
        return this.imageService.findAll()
    }
}


