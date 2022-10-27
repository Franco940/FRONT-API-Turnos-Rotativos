import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarJornadaComponent } from './actualizar-jornada.component';

describe('ActualizarJornadaComponent', () => {
  let component: ActualizarJornadaComponent;
  let fixture: ComponentFixture<ActualizarJornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarJornadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
