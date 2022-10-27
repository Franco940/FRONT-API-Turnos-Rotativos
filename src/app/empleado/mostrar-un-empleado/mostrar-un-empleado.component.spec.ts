import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarUnEmpleadoComponent } from './mostrar-un-empleado.component';

describe('MostrarUnEmpleadoComponent', () => {
  let component: MostrarUnEmpleadoComponent;
  let fixture: ComponentFixture<MostrarUnEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarUnEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarUnEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
