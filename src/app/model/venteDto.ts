
import { LigneVenteDto } from './ligneVenteDto';


export class VenteDto {
    id?: number;
    code?: string;
    dateVente?: number;
    commentaire?: string;
    ligneVentes?: Array<LigneVenteDto>;
}
