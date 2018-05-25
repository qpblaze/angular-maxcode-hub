import { Skill } from './skill';
import { Team } from './team';

export class Employee {
    id: number;
    firstName: string;
    lastName: string;
    mediumThumbUrl: string;
    jobTitle: string;
    mailAdress: string;
    phoneNumber: string;
    skypeAddress: string;
    birthDate: string;

    team: Team;
    skills: Skill[];
}
