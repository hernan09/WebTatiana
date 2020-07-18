import { Pipe , PipeTransform } from '@angular/core';

@Pipe({
    name:'search'
})

export class FilterPipe2 implements PipeTransform{
    transform(value:any,arg:any):any{
        console.log(value,arg)
        const result = []
        if(arg ==='' || arg<=3){return value}
        value.forEach(element => {   
            if(element.title.toLowerCase().indexOf(arg.toLowerCase())>-1){
                result.push(element)
            } 
        });
         
        return result;
    }
}