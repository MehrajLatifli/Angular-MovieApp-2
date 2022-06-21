import { Component, OnInit } from '@angular/core';
import { Quality } from 'src/app/Models/quality';
import { QualityService } from 'src/app/Services/QualityService/quality.service';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.css']
})
export class QualityComponent implements OnInit {

  qualities: Quality[] = [];
  quality: Quality;

  selected: Quality = null;
  providers: [QualityService]

  constructor(private qualityService: QualityService) {

  }


  ngOnInit(): void {

    this.qualityService.get().subscribe(data => {
      this.qualities = data;
    }, error => { console.log(error) });

  }

  displayAll: boolean = true;

  select(item?: any) {
    if (item) {
      this.selected = item;
      this.displayAll = false;
    }
    else {
      this.selected = null;
      this.displayAll = true;
    }



  }

}
