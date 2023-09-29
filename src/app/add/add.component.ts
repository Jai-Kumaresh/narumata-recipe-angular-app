import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  cardId: string | null = null;

  constructor(private route: ActivatedRoute,private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.cardId = params.get('id');
      console.log(this.cardId);
    });
  }

  addNew(item: any) {
    console.log(item);
  }
  cancelOperation() {
    this.location.back();
  }

}
