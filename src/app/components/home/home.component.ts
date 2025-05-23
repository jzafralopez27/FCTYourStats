import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FootballService } from '../../services/football.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  leagues: any[] = [];
  teams: any[] = [];
  matches: any[] = [];
  players: any[] = [];

  selectedLeagueId = '4335';
  selectedLeagueName = 'Spanish La Liga';

  constructor(private footballService: FootballService, private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadLeagues();
    this.loadTeams(this.selectedLeagueName);
    this.loadMatches(this.selectedLeagueId);
  }
  

  loadLeagues(): void {
    this.footballService.getLeagues().subscribe((data) => {
      this.leagues = data.leagues.filter((league: any) => league.strSport === 'Soccer');
      console.log(this.leagues);
    });
  }

  loadTeams(leagueName: string): void {
    this.footballService.getTeams(leagueName).subscribe((data) => {
      this.teams = data.teams;
      console.log(this.teams);
    });
  }

  loadMatches(leagueId: string): void {
    this.footballService.getMatches(leagueId).subscribe((data) => {
      this.matches = data.events;
    });
  }

  goToPlayerList(teamId: string): void {
    this.router.navigate(['/player-list', teamId]);
  }

  goToPlayerDetail(playerId: string): void {
    this.router.navigate(['/player', playerId]);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
  

  onLeagueChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedLeagueId = select.value;

    const league = this.leagues.find(l => l.idLeague === this.selectedLeagueId);
    this.selectedLeagueName = league?.strLeague ?? '';

    this.loadTeams(this.selectedLeagueName);
    this.loadMatches(this.selectedLeagueId);
  }
}
