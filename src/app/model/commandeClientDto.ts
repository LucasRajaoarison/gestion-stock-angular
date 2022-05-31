
import { ClientDto } from './clientDto';
import { LigneCommandeClientDto } from './ligneCommandeClientDto';


export class CommandeClientDto {
    id?: number;
    code?: string;
    dateCommande?: number;
    etatCommande?: CommandeClientDto.EtatCommandeEnum;
    client?: ClientDto;
    ligneCdeClients?: Array<LigneCommandeClientDto>;
    commandeLivree?: boolean;
}
export namespace CommandeClientDto {
    export type EtatCommandeEnum = 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
    export const EtatCommandeEnum = {
        ENPREPARATION: 'EN_PREPARATION' as EtatCommandeEnum,
        VALIDEE: 'VALIDEE' as EtatCommandeEnum,
        LIVREE: 'LIVREE' as EtatCommandeEnum
    };
}
