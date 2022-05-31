
import { AdresseDto } from './adresseDto';
import { EntrepriseDto } from './entrepriseDto';
import { RoleDto } from './roleDto';


export class UtilisateurDto {
    id?: number;
    nom?: string;
    prenom?: string;
    mail?: string;
    dateDeNaissance?: number;
    password?: string;
    adresse?: AdresseDto;
    photo?: string;
    entreprise?: EntrepriseDto;
    roles?: Array<RoleDto>;
}
