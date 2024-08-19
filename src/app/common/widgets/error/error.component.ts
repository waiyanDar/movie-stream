import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit{

  bgImage !: string;
  baseImageUrl : string = '../../assets/images/';

  constructor(private acRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.getErrorCodeAndSetBgImage();
  }

  getErrorCodeAndSetBgImage(){
    const errorCode = this.acRoute.snapshot.paramMap.get('errorCode');
    switch (errorCode){
      case '401': {
        this.bgImage = this.baseImageUrl+'401.jpg';
        break;
      }
      case '403': {
        this.bgImage = this.baseImageUrl+'403Forbidden.jpg';
        break;
      }
    }
  }
}
