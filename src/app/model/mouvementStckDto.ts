
import { ArticleDto } from './articleDto';


export class MouvementStckDto {
    id?: number;
    dateMouvement?: number;
    quantite?: number;
    typeMvtStck?: MouvementStckDto.TypeMvtStckEnum;
    sourceMvtStock?: MouvementStckDto.SourceMvtStockEnum;
    article?: ArticleDto;
}
export namespace MouvementStckDto {
    export type TypeMvtStckEnum = 'ENTREE' | 'SORTIE' | 'CORRECTION_POSITIF' | 'CORRECTION_NEGATIF';
    export const TypeMvtStckEnum = {
        ENTREE: 'ENTREE' as TypeMvtStckEnum,
        SORTIE: 'SORTIE' as TypeMvtStckEnum,
        CORRECTIONPOSITIF: 'CORRECTION_POSITIF' as TypeMvtStckEnum,
        CORRECTIONNEGATIF: 'CORRECTION_NEGATIF' as TypeMvtStckEnum
    };
    export type SourceMvtStockEnum = 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
    export const SourceMvtStockEnum = {
        COMMANDECLIENT: 'COMMANDE_CLIENT' as SourceMvtStockEnum,
        COMMANDEFOURNISSEUR: 'COMMANDE_FOURNISSEUR' as SourceMvtStockEnum,
        VENTE: 'VENTE' as SourceMvtStockEnum
    };
}
