import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouvementStckComponent } from './mouvement-stck.component';

describe('MouvementStckComponent', () => {
  let component: MouvementStckComponent;
  let fixture: ComponentFixture<MouvementStckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouvementStckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MouvementStckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
