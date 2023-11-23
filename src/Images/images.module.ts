import { Global, Module } from "@nestjs/common";
import { ImageController } from "./images.controllers";
import { ImageService } from "./images.services";


@Global()
@Module({
    controllers: [ImageController],
    providers: [ImageService]
})

export class ImageModule {
    constructor(private imageService: ImageService){

    }


}