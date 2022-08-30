import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoContribuyenteComponent } from './crear-tipo-contribuyente.component';

describe('CrearTipoContribuyenteComponent', () => {
  let component: CrearTipoContribuyenteComponent;
  let fixture: ComponentFixture<CrearTipoContribuyenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTipoContribuyenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
