import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JarvisComponent } from './jarvis.component';
import { ElementRef } from '@angular/core';

describe('JarvisComponent', () => {
  let component: JarvisComponent;
  let fixture: ComponentFixture<JarvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JarvisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JarvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });
});
