import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  recipeList: any;
  faTrashIcon = faTrash;
  faPenIcon = faPen;
  faSquarePlusIcon= faSquarePlus;

  title = 'owlcarousel';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 500,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) {
    this.recipeList = [];
  }
  ngOnInit(): void {
    this.getRecipe();
  }
  getRecipe() {
    this.http.get('https://jsoneditoronline.herokuapp.com/v1/docs/e1f5af042bf14c89a5b8f1f6523814b3/data')
      .subscribe((recipe: any) => {
        this.recipeList = recipe;
      })
  }
  goAdd() {
    this.router.navigate(['add']);
  }
}
