import { Component, OnInit } from '@angular/core';

import { SkillsService } from '../../services/skills.service';
import { Skill } from '../../models/skill';
import { environment } from '../../url.constants';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public filteredSkills: Skill[];
  public skills: Skill[];

  constructor(private skillsService: SkillsService) { }

  async ngOnInit() {
    this.skills = await this.getSkills();
    this.filteredSkills = this.skills;
  }

  async getSkills(): Promise<Skill[]> {
    return await this.skillsService.getSkills();
  }

  async filterSkills(event: any) {
    this.filteredSkills = await this.skills.filter(x => x.name.toLowerCase().includes(event.name));
  }

}
