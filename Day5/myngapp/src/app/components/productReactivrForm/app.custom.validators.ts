import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Product } from 'src/app/models/app.product';

export class CustomValidators {
    static CheckUniqueValue(values: Array<Product>, isUpdateMode: boolean): any {
        return (ctrl: AbstractControl) => {
            if (ctrl.value && isUpdateMode == false)
                if (values.filter((e) => e.Id == ctrl.value).length != 0)
                    return { notUnique: true }
            return null;
        };
    }
}