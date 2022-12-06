import { IsDateString, IsString } from 'class-validator';
import { ApiBook } from './ApiBook.dto';
import { ImageDto } from './Image.dto';
import { IndividualDto } from './Individual.dto';
// npm i --save class-validator class-transformer

export class MonumentDto {
    image_principale : string;
    monuments: string[];
    personnes: string[]; 

    constructor(image_principale : string) { // Constructor for Bookshelf
        this.personnes = [];
        this.monuments = [];
        this.image_principale = image_principale;
    }
  


    
}

