import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  transform(value: any, args?: unknown[]): unknown {
    const nameSurname = value.split(' ');
    let avatar;
    if (value.length > 1) {
      avatar = nameSurname[0].slice(0, 1).toUpperCase() + '.' + nameSurname[1].slice(0, 1).toUpperCase();
    }
    else {
      avatar = nameSurname[0].slice(0, 1);
    }
    return avatar;
  }

}
