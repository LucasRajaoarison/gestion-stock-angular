
import { FournisseurDto } from './fournisseurDto';
import { LigneCommandeFournisseurDto } from './ligneCommandeFournisseurDto';


export class CommandeFournisseurDto {
    id?: number;
    code?: string;
    dateCommande?: number;
    etatCommande?: CommandeFournisseurDto.EtatCommandeEnum;
    fournisseur?: FournisseurDto;
    ligneCommandeFournisseur?: Array<LigneCommandeFournisseurDto>;
    commandeLivree?: boolean;
}
export namespace CommandeFournisseurDto {
    export type EtatCommandeEnum = 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
    export const EtatCommandeEnum = {
        ENPREPARATION: 'EN_PREPARATION' as EtatCommandeEnum,
        VALIDEE: 'VALIDEE' as EtatCommandeEnum,
        LIVREE: 'LIVREE' as EtatCommandeEnum
    };
}
