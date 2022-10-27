import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerUnaJornadaComponent } from './ver-una-jornada.component';

describe('VerUnaJornadaComponent', () => {
  let component: VerUnaJornadaComponent;
  let fixture: ComponentFixture<VerUnaJornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerUnaJornadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerUnaJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
