
import { CategorieDto } from './categorieDto';
import { EntrepriseDto } from './entrepriseDto';


export class ArticleDto {
    id?: number;
    codeArticle?: string;
    designation?: string;
    prixUnitaireHT?: number;
    tauxTva?: number;
    prixUnitaireTTC?: number;
    photo?: string;
    categorie?: CategorieDto;
    entreprise?: EntrepriseDto;
}
