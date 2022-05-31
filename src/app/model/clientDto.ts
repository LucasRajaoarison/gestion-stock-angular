
import { AdresseDto } from './adresseDto';


export class ClientDto {
    id?: number;
    nom?: string;
    prenom?: string;
    adresse?: AdresseDto;
    photo?: string;
    mail?: string;
    numTel?: string;
}
