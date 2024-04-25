import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'firstCapital',
    standalone: true
})
export class FirstCapital implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (!value) return value;

        return value.split(' ').map((word: any) => {
            if (word.length === 0) return word; 

            const firstChar = word.charAt(0).toUpperCase();
            return firstChar + word.slice(1).toLowerCase();
        }).join(' ');
    }
}