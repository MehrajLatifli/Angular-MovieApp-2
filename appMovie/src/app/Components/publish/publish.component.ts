import { Component, OnInit } from '@angular/core';
import { Publish } from 'src/app/Models/publish';
import { PublishService } from 'src/app/Services/PublishService/publish.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  publishes: Publish[] = [];
  publish: Publish;

  selectedpublish: Publish = null;
  providers: [PublishService]

  constructor(private imdbScoreservice: PublishService) {

  }

  ngOnInit(): void {


    this.imdbScoreservice.get().subscribe(data => {
      this.publishes = data;
    }, error => { console.log(error) });


  }

  displayAll: boolean = true;

  select(item?: any) {
    if (item) {
      this.selectedpublish = item;
      this.displayAll = false;
    }
    else {
      this.selectedpublish = null;
      this.displayAll = true;
    }



  }
}
