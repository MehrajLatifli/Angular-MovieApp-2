import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/Models/genre';
import { GenreService } from 'src/app/Services/GenreService/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
  providers: [GenreService]
})
export class GenreComponent implements OnInit {

  genres: Genre[] = [];
  genre: Genre;

  selectedgenre: Genre = null;

  constructor(private genreservice: GenreService) {

  }

  ngOnInit(): void {

    this.genreservice.get().subscribe(data => {
      this.genres = data;
    }, error => { console.log(error) });

    var replacedata = { id: 7, genrename: "Mehj" }


    // this.categoryservice.post().toPromise().then(data => {
    //   console.log(this.categories);
    // })


    // this.categoryservice.put(replacedata).subscribe(data=>{
    //   this.category=data;
    // });

    // this.categoryservice.delete(replacedata).subscribe(data=>{
    //   this.category=data;
    // });

    // this.categoryservice.put(replacedata).subscribe({
    //   next: data => {
    //     this.categories = data;
    //   },
    //   error: error => {

    //     console.error('There was an error!', error.message);
    //   }
    // });
  }



  displayAll: boolean = true;

  selectGenre(item?: any) {
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
