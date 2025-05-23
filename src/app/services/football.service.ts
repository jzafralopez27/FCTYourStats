import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  private baseUrl = 'https://www.thesportsdb.com/api/v1/json/639323';

  constructor(private http: HttpClient) {}

  getLeagues(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all_leagues.php`);
  }

  getTeams(league: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search_all_teams.php?l=${encodeURIComponent(league)}`);
  }

  getMatches(leagueId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/eventsnextleague.php?id=${leagueId}`);
  }

  getPlayers(teamId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lookup_all_players.php?id=${teamId}`);
  }

  getPlayerDetails(playerId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lookupplayer.php?id=${playerId}`);
  }

  getPlayerStats(playerId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/players_stats.php?id=${playerId}`);
  }
}
