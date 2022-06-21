import { Component, OnInit } from '@angular/core';
import { ImdbScore } from 'src/app/Models/ImdbScore';
import { ImdbScoreService } from 'src/app/Services/ImdbScoreService/imdb-score.service';

@Component({
  selector: 'app-imdbscore',
  templateUrl: './imdbscore.component.html',
  styleUrls: ['./imdbscore.component.css']
})
export class ImdbscoreComponent implements OnInit {

  imdbscores: ImdbScore[] = [];
  imdbscore: ImdbScore;

  selectedgenre: ImdbScore = null;
  providers: [ImdbScoreService]

  constructor(private imdbScoreservice: ImdbScoreService) {

  }

  ngOnInit(): void {

    this.imdbScoreservice.get().subscribe(data => {
      this.imdbscores = data;
    }, error => { console.log(error) });

  }

  displayAll: boolean = true;

  select(item?: any) {
    if (item) {
      this.selectedgenre = item;
      this.displayAll = false;
    }
    else {
      this.selectedgenre = null;
      this.displayAll = true;
    }



  }

}
