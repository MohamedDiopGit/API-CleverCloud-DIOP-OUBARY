import { ImageDto } from "./Image.dto";
import { MonumentDto } from "./Monument.dto";

export interface ApiCloud{
    image_principale : string;
    personnalites: string[];
    monuments: string[];
}
