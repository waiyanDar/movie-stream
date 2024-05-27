import { FormArray, FormGroup, ValidatorFn } from "@angular/forms";

export function checkNestedControlAndMarkAsDirty(formGroup: any): void {
    Object.keys(formGroup.controls).forEach((key: any, i: any) => {
        let control = formGroup.get(key);
        if (control instanceof FormGroup || control instanceof FormArray) {
          if (control.invalid) {
            checkNestedControlAndMarkAsDirty(control);
          }
        } else if (control.invalid) {
          makeDirtyAndValidity(control);
        }
      });
}

export function makeDirtyAndValidity(control: any) {
    control.markAsTouched();
    control.markAsDirty();
    control.updateValueAndValidity({ onlySelf: true });
  }

export function mustDuplicate(firstFieldName: string,secodFieldName: string, formGroup: any): void {
    let firstFieldControl =  formGroup.get(firstFieldName);
    let secondFieldControl = formGroup.get(secodFieldName);
    const isDuplicate = firstFieldControl.value === secondFieldControl.value;
    
    if (!isDuplicate) {
        formGroup.get(secodFieldName)?.setErrors({ 'pswNotSame': true });
    }
}