import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ProjectModel } from '../models/project.state.model';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProjectService {
    constructor (
        private http: HttpClient
    ) {}

    fetchProjects (page: number): Observable<ProjectModel[]> {
        return this.http.get<ProjectModel[]>(environment.baseUrl
            +'/project'
            +'?per_page=12'
            +`&page=${page}`
            );
    }
}