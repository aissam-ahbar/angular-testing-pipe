import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customPipe', pure: true })
export class CustomPipe implements PipeTransform {
  transform(input: string): string {
    return input.length === 0 ? '' : input.toUpperCase();
  }
}
