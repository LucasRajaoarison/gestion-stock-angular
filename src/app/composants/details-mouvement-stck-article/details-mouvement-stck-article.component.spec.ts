import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMouvementStckArticleComponent } from './details-mouvement-stck-article.component';

describe('DetailsMouvementStckArticleComponent', () => {
  let component: DetailsMouvementStckArticleComponent;
  let fixture: ComponentFixture<DetailsMouvementStckArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMouvementStckArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMouvementStckArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
