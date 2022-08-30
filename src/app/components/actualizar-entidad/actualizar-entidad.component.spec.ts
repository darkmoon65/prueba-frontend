import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEntidadComponent } from './actualizar-entidad.component';

describe('ActualizarEntidadComponent', () => {
  let component: ActualizarEntidadComponent;
  let fixture: ComponentFixture<ActualizarEntidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarEntidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
