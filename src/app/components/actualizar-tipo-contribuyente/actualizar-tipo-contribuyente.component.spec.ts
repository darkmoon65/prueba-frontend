import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTipoContribuyenteComponent } from './actualizar-tipo-contribuyente.component';

describe('ActualizarTipoContribuyenteComponent', () => {
  let component: ActualizarTipoContribuyenteComponent;
  let fixture: ComponentFixture<ActualizarTipoContribuyenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarTipoContribuyenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTipoContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
