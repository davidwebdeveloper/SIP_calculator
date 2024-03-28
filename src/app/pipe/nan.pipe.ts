// nan-to-dash.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'nanToDash'
})
export class NanToDashPipe implements PipeTransform {
    transform(value: number): string {
        return isNaN(value) ? '-' : value.toString();
    }
}


@Pipe({
    name: 'lastTwoDecimals'
})
export class LastTwoDecimalsPipe implements PipeTransform {

    transform(value: string): string {
        const decimalPart = value.toString().split('.')[1];
        if (!decimalPart) {
            return '00'; // Return '00' if there's no decimal part
        }
        return decimalPart.slice(-2);
    }

}

