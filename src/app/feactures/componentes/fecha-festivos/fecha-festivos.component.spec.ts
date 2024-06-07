import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaFestivosComponent } from './fecha-festivos.component';





describe('FechaFestivosComponent', () => {
  let component: FechaFestivosComponent;
  let fixture: ComponentFixture<FechaFestivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FechaFestivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FechaFestivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
