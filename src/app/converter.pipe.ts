import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(meterValue: any, divisionNum: number): any {
    if(meterValue){
      const divNum = divisionNum? divisionNum: 1000;
      return `in Meter: ${meterValue} and in KM: ${meterValue/divNum}`;
    }
    return meterValue;
  }

}
