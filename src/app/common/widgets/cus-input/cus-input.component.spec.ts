import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusInputComponent } from './cus-input.component';

describe('CusInputComponent', () => {
  let component: CusInputComponent;
  let fixture: ComponentFixture<CusInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CusInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CusInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
