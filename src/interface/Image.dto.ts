import { IsDateString, IsString } from 'class-validator';
import { ApiBook } from './ApiBook.dto';
import { IndividualDto } from './Individual.dto';
// npm i --save class-validator class-transformer

export class ImageDto {
    @IsString()
    url_original: string;


    constructor(url_original: string) { // Constructor for Bookshelf
        this.url_original = url_original;
    }
  


    
}

