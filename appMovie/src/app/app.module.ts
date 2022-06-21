import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { GenreComponent } from './Components/genre/genre.component';
import { ImdbscoreComponent } from './Components/imdbscore/imdbscore.component';
import { LanguageComponent } from './Components/language/language.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { MovieComponent } from './Components/movies/movie/movie.component';
import { QualityComponent } from './Components/quality/quality.component';
import { MovieFilterPipe } from './Pipes/MovieFilter/movie-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './Modules/app-routing/app-routing.module';
import { AlertifyService } from './Services/AlertifyService/alertify-service.service';
import { PublishComponent } from './Components/publish/publish.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GenreComponent,
    ImdbscoreComponent,
    LanguageComponent,
    MoviesComponent,
    MovieComponent,
    QualityComponent,
    MovieFilterPipe,
    PublishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
