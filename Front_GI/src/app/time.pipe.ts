import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  transform(value: string): string {
    const timeParts = value.split(':');
    return `${timeParts[0]}:${timeParts[1]}`;
  }
}
