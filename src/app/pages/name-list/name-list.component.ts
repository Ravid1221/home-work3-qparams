import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NamesService } from 'src/app/services/names.service';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {
  namesArrFromService: string[]
  errors: string
  constructor(private namesSrevice: NamesService, private route:ActivatedRoute) { 
    this.namesArrFromService = this.namesSrevice.namesArr
    this.errors = ''
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( data => {
      if(data['name']){
        this.namesArrFromService = this.namesSrevice.namesArr.filter( name => name.includes(data['name']))
        if(this.namesArrFromService.length == 0){
           this.namesArrFromService = this.namesSrevice.namesArr
           this.errors = `No result found under the search of ${data['name']}, here is a list of all names`
        }
      }
    })
  }

}
