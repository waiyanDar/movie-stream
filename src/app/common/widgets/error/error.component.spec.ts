import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { of } from 'rxjs';

const routes: Routes = [
  { path: 'sorry/:errorCode', component: ErrorComponent }
];

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockActivatedRoute = {
      queryParamMap: of({
        get: (param: string) => '401' // Set the error code you want to test here
      })
    };
    await TestBed.configureTestingModule({
      imports: [ErrorComponent, RouterModule.forRoot(routes)],
      providers: [
        {
          provide: { ActivatedRoute,
            useValue: {
              queryParams: of({ code: '404' }),
            }
          }
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct background image for error code 401', () => {
    component.getErrorCodeAndSetBgImage();
    expect(component.bgImage).toBe('../../assets/images/401.jpg');
  });

  it('should set the correct background image for error code 403', () => {
    mockActivatedRoute.queryParamMap = of({
      get: (param: string) => '403' // Set the error code to 403 for this test
    });
    component.getErrorCodeAndSetBgImage();
    expect(component.bgImage).toBe('../../assets/images/403Forbidden.jpg');
  });

  it('should not set a background image for an unknown error code', () => {
    mockActivatedRoute.queryParamMap = of({
      get: (param: string) => '404' // Set an unknown error code
    });
    component.getErrorCodeAndSetBgImage();
    expect(component.bgImage).toBeUndefined(); // Expect bgImage to remain undefined
  });
});
