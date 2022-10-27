import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIngresoJornadaComponent } from './formulario-ingreso-jornada.component';

describe('FormularioIngresoJornadaComponent', () => {
  let component: FormularioIngresoJornadaComponent;
  let fixture: ComponentFixture<FormularioIngresoJornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioIngresoJornadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioIngresoJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
