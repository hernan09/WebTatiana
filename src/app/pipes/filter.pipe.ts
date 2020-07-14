import { Pipe , PipeTransform } from '@angular/core';

@Pipe({
    name:'filter'
})

export class FilterPipe implements PipeTransform{
    transform(value:any,arg:any):any{
        const result = []
        if(arg ==='' ){return value}
        value.forEach(element => {   
            if(element.id_catalogo == arg){
                console.log(element.arrayProduct)
                result.push(element.arrayProduct) 
            }
            
        });

        return result;
    }
}