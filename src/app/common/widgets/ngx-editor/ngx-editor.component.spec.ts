import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditorComponent } from './ngx-editor.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('NgxEditorComponent', () => {
  let component: NgxEditorComponent;
  let fixture: ComponentFixture<NgxEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxEditorComponent);
    component = fixture.componentInstance;
    component.formGp = new FormGroup({
      description: new FormControl('')
    });
    component.formCtrlName = 'description';
    component.label = 'Description';
    component.formCtrlName = 'description';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
