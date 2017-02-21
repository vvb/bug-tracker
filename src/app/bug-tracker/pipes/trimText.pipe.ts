import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'trimtext'
})
export class TrimTextPipe implements PipeTransform {
    transform(data : string, trimlen :number =30) :string{
        return data.length < 30 ? data : data.substr(0, trimlen) + "...";
    }
}
