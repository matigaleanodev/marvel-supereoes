import { TestBed } from '@angular/core/testing';
import { CharacterItemComponent } from './character-item.component';
import { provideRouter } from '@angular/router';

describe('CharacterItemComponent', () => {
  it('debería crear el componente', async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterItemComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(CharacterItemComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
