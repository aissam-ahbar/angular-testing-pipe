import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customUppercasePipe', pure: true })
export class CustomUppercasePipe implements PipeTransform {
  transform(input: string): string {
    return input.length === 0 ? '' : input.toUpperCase();
  }
}
