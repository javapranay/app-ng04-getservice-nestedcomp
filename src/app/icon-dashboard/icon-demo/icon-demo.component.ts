import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-demo',
  templateUrl: './icon-demo.component.html',
  styleUrls: ['./icon-demo.component.css']
})
export class IconDemoComponent implements OnInit {
  public icons = [{
    iconName : "angular",
    path : "assets/images/angular.png",
    likes : 0,
    dislikes : 0
  },
  {
    iconName : "react",
    path : "assets/images/react.png",
    likes : 0,
    dislikes : 0
  },
  {
    iconName : "vue",
    path : "assets/images/vue-js.png",
    likes : 0,
    dislikes : 0
  }
];

  constructor() { }

  ngOnInit(): void {
  }

  public likesCounter(icon: any){
    icon.like++;
  }

  public dislikesCounter(icon: any){
    icon.dislike++;
  }
}
