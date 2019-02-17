import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const GOOGLE_URL = environment.googleUrl;
const GOOGLE_KEY = environment.googleKEY


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  newsDetail: any;
  searchTerm: string;
  constructor(public googleNews: HttpClient) { }

  ngOnInit() {
    // const gUrl =
    
  }

  getNews(event, searchTerm){
    this.googleNews.get(`${GOOGLE_URL}/?q=${searchTerm}&token=${GOOGLE_KEY}`).subscribe(data => {
      this.newsDetail = data;
      console.log(this.newsDetail);

    })
  }

}
