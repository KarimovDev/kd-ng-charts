import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kbToSizeNumbers',
})
export class KbToSizeNumbersPipe implements PipeTransform {
  transform(kBytes: number): string {
    kBytes = +kBytes;
    switch (true) {
      case kBytes < 1024:
        return (Math.round(kBytes * 100) / 100).toString();
      case kBytes / 1024 < 1024:
        return (Math.round((kBytes / 1024) * 100) / 100).toString();
      case kBytes / 1024 / 1024 < 1024:
        return (Math.round((kBytes / 1024 / 1024) * 100) / 100).toString();
      default:
        return `0`;
    }
  }
}
