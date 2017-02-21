import { Pipe, PipeTransform } from '@angular/core';
import { IBug } from './models/iBug';

@Pipe({
    name : 'getclosedcount'
})
export class GetClosedCountPipe implements PipeTransform {
    transform(bugs : Array<IBug>) :number {
        var returnCount = 0;
        for(var i=0; i < bugs.length; i++)
            if(bugs[i].isClosed)
                ++returnCount;
        return returnCount;
    }
}
