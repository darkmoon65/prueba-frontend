import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntidadComponent } from './lista-entidad.component';

describe('ListaEntidadComponent', () => {
  let component: ListaEntidadComponent;
  let fixture: ComponentFixture<ListaEntidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEntidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
