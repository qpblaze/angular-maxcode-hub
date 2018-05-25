import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../url.constants';

import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})

export class SkillsService {
  private cachedSkills: Skill[];

  constructor(private http: HttpClient) { }

  private fixSkillIcon(skill: Skill) {
    skill.iconUrl = `${environment.apiUrl}/${skill.iconUrl}`;
  }

  async getSkills(): Promise<Skill[]> {
    if (this.cachedSkills) {
      return this.cachedSkills;
    }

    const skills: Skill[] = await this.http.get<Skill[]>(environment.apiUrl + '/api/skills').toPromise();
    skills.forEach(s => this.fixSkillIcon(s));

    this.cachedSkills = skills;
    return skills;
  }
}
