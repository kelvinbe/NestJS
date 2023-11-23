import { Injectable } from "@nestjs/common";
import { Image } from "./interfaces/images.interface";




@Injectable()
export class ImageService {
    private readonly images: Image[] = []

    findAll(): Image[] {
        return this.images
    }
}





