import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/Models/movie';
import { AlertifyService } from 'src/app/Services/AlertifyService/alertify-service.service';
import { Movieservice } from 'src/app/Services/Movieservice/movieservice.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private alertify: AlertifyService, private movieservice: Movieservice, private activatedroute:ActivatedRoute,private router: Router) {



    this.alerti=alertify;
  }


  alerti:any;
movieError:any;




movies: Movie[]=[];
popularMovies: Movie[]=[];

title: string = "Movie list"

filterText: string = '';
filteredMovies: Movie[];


newForm : FormGroup;

  ngOnInit(): void {


    this.activatedroute.params.subscribe(params => {


        var value = params["genreId"]
        var value2 = params["imdbscoreId"]
        var value3 = params["publishId"]
        var value4 = params["languageId"]
        var value5 = params["qualityId"]

        this.movieservice.getMovies(value,value2,value3,value4,value5).subscribe(data => {
          this.movies = data;
          this.popularMovies = this.movies.filter(i => i.isPopular);
        }, error => { this.movieError = error; console.log(error) });


        setInterval(() => {

          const input = document.getElementById('genreId') as HTMLInputElement | null;
          const input2 = document.getElementById('imdbscoreId') as HTMLInputElement | null;
          const input3 = document.getElementById('publishId') as HTMLInputElement | null;
          const input4 = document.getElementById('languageId') as HTMLInputElement | null;
          const input5 = document.getElementById('qualityId') as HTMLInputElement | null;

          const inputbtn = document.getElementById('updatebtn') as HTMLInputElement | null;

          if (input.value === "" || input2.value === ""|| input3.value === ""|| input4.value === ""|| input5.value === "" ) {

            inputbtn.disabled = true;
          } else {
            inputbtn.disabled = false;
          }

        }, 1000);



    });



  }

  Updateitem(item:Movie,genreId:number,imdbscoreId:number,publishId:number,languageId:number,qualityId:number) {

    // const nodeList = document.querySelectorAll<HTMLElement>("#labelcheck");






    var replacedata    =   {id:item.id, title:item.title, description:item.description, imageUrl:item.imageUrl,isPopular:item.isPopular, genreId:genreId, imdbscoreId:imdbscoreId, publishId:publishId, languageId:languageId, qualityId:qualityId}

    this.movieservice.put(replacedata).subscribe(data=>{
        this.movies=data;
      });




    // if($event.target.classList.contains('btn-primary'))
    // {
    //   $event.target.innerText=item.title+ " Remove from List";
    //   $event.target.classList.remove('btn-primary');
    //   $event.target.classList.add('btn-danger');

    // //  alertify.success(item.title+ " Add to List");

     this.alerti.warning(item.title);

    // }
    // else{
    //   $event.target.innerText=item.title+ " Add to List";
    //   $event.target.classList.remove('btn-danger');
    //   $event.target.classList.add('btn-primary');

    // //  alertify.warning(item.title+ " Remove from List");

    // this.alerti.error(item.title);
    // }

  }

  DeleteItem(item:Movie,genreId:number,imdbscoreId:number,publishId:number,languageId:number,qualityId:number){

     var replacedata    =   {id:item.id, title:item.title, description:item.description, imageUrl:item.imageUrl,isPopular:item.isPopular, genreId:item.genreId, imdbscoreId:item.imdbscoreId, publishId:item.publishId, languageId:item.languageId, qualityId:item.qualityId}


    this.movieservice.delete(replacedata).subscribe(data => {
      this.movies = data;


    });

    setTimeout(() => {


    },1000, 1000);
  }

}
