import { IsString } from 'class-validator';
import { ApiCloud } from './ApiCloud.dto';
// npm i --save class-validator class-transformer

export class IndividualDto {
    @IsString()
    name: string;

    @IsString()
    activité: string; 

    @IsString()
    date_naissance: string; 
    
    @IsString()
    date_mort: string; 

    @IsString()
    lien_wikipedia: string; 
    

    constructor(name: string,  activité: string,  date_naissance: string,  date_mort: string,  lien_wikipedia: string) {
        this.name = name; 
        this.activité = activité; 
        this.date_naissance = date_naissance;
        this.date_mort = date_mort;
        this.lien_wikipedia = lien_wikipedia;
    }   
    
}
