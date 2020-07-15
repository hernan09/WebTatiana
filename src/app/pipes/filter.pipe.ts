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
               
                result.push(element.arrayProduct) 
                
            }
            
        });
        console.log(result[0])
        return result[0];
    }
}