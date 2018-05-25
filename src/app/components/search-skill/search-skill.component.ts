import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-skill',
  templateUrl: './search-skill.component.html',
  styleUrls: ['./search-skill.component.css']
})
export class SearchSkillComponent implements OnInit {
  @Output() update = new EventEmitter<any>();

  public name: string;

  constructor() { }

  ngOnInit() {
  }

  filterSkills() {
    this.update.emit({
      name: this.name
    });
  }

}
