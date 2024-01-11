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
