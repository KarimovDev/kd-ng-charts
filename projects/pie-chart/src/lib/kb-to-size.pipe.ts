import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kbToSize',
})
export class KbToSizePipe implements PipeTransform {
  transform(kBytes: number): string {
    kBytes = +kBytes;
    switch (true) {
      case kBytes < 1024:
        return `${Math.round(kBytes)} Кб`;
      case kBytes / 1024 < 1024:
        return `${Math.round(kBytes / 1024)} Мб`;
      case kBytes / 1024 / 1024 < 1024:
        return `${Math.round(kBytes / 1024 / 1024)} Гб`;
      default:
        return `0`;
    }
  }
}
