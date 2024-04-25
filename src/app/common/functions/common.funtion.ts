import { ValidatorFn } from "@angular/forms";

export function markAllControlsAsTouched(formGroup: any): void {
    Object.values(formGroup.controls).forEach((control: any) => {
        control.markAsTouched();
    });
}

export function mustDuplicate(firstFieldName: string,secodFieldName: string, formGroup: any): void {
    let firstFieldControl =  formGroup.get(firstFieldName);
    let secondFieldControl = formGroup.get(secodFieldName);
    const isDuplicate = firstFieldControl.value === secondFieldControl.value;
    
    if (!isDuplicate) {
        formGroup.get(secodFieldName)?.setErrors({ 'pswNotSame': true });
    }
}