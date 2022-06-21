import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/Services/LanguageService/language.service';
import { Language } from '../../Models/language';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  languages: Language[] = [];
  language: Language;

  selected: Language = null;
  providers: [LanguageService]

  constructor(private languageService: LanguageService) {

  }

  ngOnInit(): void {

    this.languageService.get().subscribe(data => {
      this.languages = data;
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
