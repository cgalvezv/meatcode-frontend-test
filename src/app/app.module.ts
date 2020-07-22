import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './header/banner/banner.component';
import { BodyComponent } from './body/body.component';
import { AriclesComponent } from './body/aricles/aricles.component';
import { ArticleComponent } from './body/aricles/article/article.component';
import { FooterComponent } from './footer/footer.component';
import { BackendService } from './shared/backend/backend.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    BodyComponent,
    AriclesComponent,
    ArticleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
