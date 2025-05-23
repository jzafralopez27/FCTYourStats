import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballService } from '../../services/football.service';
import { CommonModule, Location } from '@angular/common';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css',],
  standalone: true,
  imports: [CommonModule], // <-- IMPORTA CommonModule aquí

})
export class PlayerDetailComponent implements OnInit {
  playerId: string = '';
  playerDetails: any = null;
  playerStats: any = null;

  constructor(private route: ActivatedRoute, private footballService: FootballService, private location: Location) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.playerId = params['id'];
      this.loadPlayerDetails(this.playerId);
      this.loadPlayerStats(this.playerId);

    });
  }

  loadPlayerDetails(playerId: string): void {
    this.footballService.getPlayerDetails(playerId).subscribe((data) => {
      this.playerDetails = data.players[0];
    });
  }

  loadPlayerStats(playerId: string): void {
    this.footballService.getPlayerStats(playerId).subscribe((data) => {
      this.playerStats = data.playerStats ? data.playerStats[0] : null; // Ajuste para el formato de la respuesta
    });
  }

  goBack(): void {
    this.location.back();
  }
}