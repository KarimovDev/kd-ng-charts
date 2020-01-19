import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'kbToSizePostfix'
})
export class KbToSizePostfixPipe implements PipeTransform {

	transform(kBytes: number): string {
		kBytes = +kBytes;
		switch (true) {
			case (kBytes < 1024):
				return 'Кб';
			case ((kBytes / 1024) < 1024):
				return 'Мб';
			case ((kBytes / 1024 / 1024) < 1024):
				return 'Гб';
			default:
				return undefined;
		}
	}

}
