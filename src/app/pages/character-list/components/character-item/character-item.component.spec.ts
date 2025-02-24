import { TestBed } from '@angular/core/testing';
import { CharacterItemComponent } from './character-item.component';
import { provideRouter } from '@angular/router';

describe('CharacterItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterItemComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('debería crear el componente', () => {
    const fixture = TestBed.createComponent(CharacterItemComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
