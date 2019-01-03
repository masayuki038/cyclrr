import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  public columns = ['id', 'name'];
  public rows;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get("contents").subscribe((data) => {
      console.log(data);
      this.rows = data.data;
    });
  }

  selectedContent: Object;
  onSelect(content: Object): void {
    console.log(content);
    this.selectedContent = content;
  }  
}
