import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoContribuyenteComponent } from './lista-tipo-contribuyente.component';

describe('ListaTipoContribuyenteComponent', () => {
  let component: ListaTipoContribuyenteComponent;
  let fixture: ComponentFixture<ListaTipoContribuyenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTipoContribuyenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTipoContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
