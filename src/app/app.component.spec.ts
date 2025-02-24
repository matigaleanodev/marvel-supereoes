import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { TranslateService } from '@shared/services/translate/translate.service';
describe('AppComponent', () => {
  let translateServiceMock: jasmine.SpyObj<TranslateService>;

  beforeEach(async () => {
    translateServiceMock = jasmine.createSpyObj('TranslateService', [
      'initLang',
    ]);

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([]),
        { provide: TranslateService, useValue: translateServiceMock },
      ],
    }).compileComponents();
  });

  it('deberia crear el componente', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('deberia llamar a initLang en ngOnInit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(translateServiceMock.initLang).toHaveBeenCalled();
  });
});
