import { Pipe, PipeTransform } from '@angular/core';
import { fibonacci } from '../utils/fibonacci';
import memo from 'memo-decorator';

@Pipe({
  name: 'calculate',
  pure: true,
})
export class CalculatePipe implements PipeTransform {
  @memo()
  transform(value: number, ...args: unknown[]): unknown {
    return fibonacci(value);
  }
}
