import { TestBed } from '@angular/core/testing';
import { JarvisComponent } from './jarvis.component';
import { provideRouter } from '@angular/router';

describe('JarvisComponent', () => {
  it('debería crear el componente', async () => {
    await TestBed.configureTestingModule({
      imports: [JarvisComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(JarvisComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
