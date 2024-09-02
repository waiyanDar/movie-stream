import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessagesComponent } from './error-messages.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ErrorMessagesComponent', () => {
  let component: ErrorMessagesComponent;
  let fixture: ComponentFixture<ErrorMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessagesComponent, ReactiveFormsModule],
      // providers: [
      //   {
      //     provide: { ActivatedRoute,
      //       userValue: {
      //         params: of({}),
      //         queryParams: of({}),
      //       }
      //     }
      //   }
      // ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorMessagesComponent);
    component = fixture.componentInstance;
    component.formGp = new FormGroup({
      testControl: new FormControl('')
    });
    component.formCtrlName = 'testControl';
    component.label = 'Test Label';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
