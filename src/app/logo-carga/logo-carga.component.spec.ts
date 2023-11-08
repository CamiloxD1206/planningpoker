import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCargaComponent } from './logo-carga.component';

describe('LogoCargaComponent', () => {
  let component: LogoCargaComponent;
  let fixture: ComponentFixture<LogoCargaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoCargaComponent]
    });
    fixture = TestBed.createComponent(LogoCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
