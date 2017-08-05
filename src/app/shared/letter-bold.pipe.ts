import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'letterBold'})
export class LetterBoldPipe implements PipeTransform {
    transform(value: string, search: string): string {
        if (!search) {return value; }
        let valueArr = value.split('');
        let indexes = this.getIndexes(search.toLowerCase(), value.toLowerCase());
        indexes.forEach((idx) => {
            valueArr.splice(idx, 0, "<span class = 'bold'>")
            valueArr.splice(idx + search.length + 1, 0, "</span>")
        });
        return valueArr.join('');
    }

    getIndexes(search, value) {
        let indexes = [], i = -1, spacer = 0;
        while ( (i = value.indexOf(search, i + 1 )) >= 0) {
            indexes.length > 0 ? indexes.push(i + (spacer += 2)) : indexes.push(i);
        }
        return indexes;
    }
};
