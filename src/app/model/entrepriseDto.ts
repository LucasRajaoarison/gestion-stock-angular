
import { AdresseDto } from './adresseDto';


export class EntrepriseDto {
    id?: number;
    nom?: string;
    description?: string;
    adresse?: AdresseDto;
    codeFiscal?: string;
    mail?: string;
    photo?: string;
    numTel?: string;
}
