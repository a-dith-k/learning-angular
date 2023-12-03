import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {


  prepositions=['of','the','for','is','at','in','a','and'];

  transform(value: string) {

    if(!value)
      return null;

    let words=value.split(' ')

    for(let i=0; i<words.length; i++) {
      let word=words[i];

      if(this.prepositions.includes(word.toLowerCase())&&i!=0){
        words[i]=word.toLowerCase();
      }
    }

    return words.join(' ');
  }

}
