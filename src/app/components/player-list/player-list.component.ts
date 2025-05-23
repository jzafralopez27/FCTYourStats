import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FootballService } from '../../services/football.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-list',
  standalone: true, 
  imports: [CommonModule],  
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent implements OnInit {
  teamId: string = '';
  players: any[] = [];

  constructor(private route: ActivatedRoute, private footballService: FootballService, private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.teamId = params['teamId'];
      this.loadPlayers(this.teamId);
    });
  }

  loadPlayers(teamId: string): void {
    this.footballService.getPlayers(teamId).subscribe((data) => {
      this.players = data.player || [];
    });
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  goToPlayerDetail(playerId: string): void {
    this.router.navigate(['/player', playerId]);
  }
  
}
