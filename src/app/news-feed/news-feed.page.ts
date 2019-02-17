import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage implements OnInit {
  newsArticles: any;

  constructor(private newsService: NewsService, private router: Router) { }

  //top-headlines?country=in&category=general
  //top-headlines?sources=google-news-in
  ngOnInit() {
    this.newsService.getData('top-headlines?country=in&category=general').subscribe(data =>{
      console.log(data);
      this.newsArticles = data;
    })
  }

  goToNewsDetail(newsItem){
    this.newsService.currentArticle = newsItem;
    this.router.navigate(['/tabs/news-detail']);
    
  }
}
