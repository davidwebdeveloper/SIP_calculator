import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
    transform(value: number): string {
        if (value >= 10000000) {
            return (value / 10000000).toFixed() + ' Cr Rupees';
        } else if (value >= 100000) {
            return (value / 100000).toFixed() + ' Lakh Rupees';
        } else if (value >= 1000) {
            return (value / 1000).toFixed() + ' Thousand Rupees';
        } else {
            return value.toString();
        }
    }
}
