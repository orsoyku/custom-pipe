import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-pipe-test';

  comments = [
    {name: 'Patrick Star', date: '01.05.1999', comment: 'Patrick Star is a fictional character in the American animated television series SpongeBob SquarePants. He is voiced by actor Bill Fagerbakke and was created and designed by marine biologist and animator Stephen Hillenburg. '},
    {name: 'SpongeBob SquarePants', date: '14.07.1986', comment: 'SpongeBob SquarePants is the title character and protagonist of the American animated television series SpongeBob SquarePants. SpongeBob is a sea sponge who works as a fry cook at the Krusty Krab, a fast food restaurant known for its signature burger, the Krabby Patty'},
    {name: 'Squidward Tentacles', date: '12.06.1988', comment: 'Squidward Q. Tentacles is a fictional character voiced by actor Rodger Bumpass in the Nickelodeon animated television series SpongeBob SquarePants. Squidward was created and designed by marine biologist and animator Stephen Hillenburg'},
    {name: 'Plankton', date: '30.11.1942', comment: 'Plankton is the owner of the Chum Bucket and the main antagonist of the YouTube parody animation by Narmak, the SpongeBob SquarePants Anime OP and its sequel.'},
    {name: 'Sandy Cheeks', date: '01.05.1999', comment: 'Sandra "Sandy" Cheeks is a fictional character in the Nickelodeon animated television series SpongeBob SquarePants. She is an anthropomorphic squirrel who wears a diving suit and lives underwater. Sandy is voiced by Carolyn Lawrence and first appeared in the episode "Tea at the Treedome" that premiered on May 1, 1999.'}
  ];
}
