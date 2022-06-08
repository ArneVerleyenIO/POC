import {
  State,
  Action,
  StateContext,
  Selector
} from "@ngxs/store";

import { ProjectModel } from '../models/project.state.model';
import { ProjectService } from "./project.service";
import { Injectable } from "@angular/core";
import { tap } from 'rxjs/operators';
import { GetProjects } from './projects.actions';

export interface ProjectStateModel {
    projects: ProjectModel[];
}    

@State<ProjectStateModel> ({
    name: 'projects',
    defaults: {
        projects: []
    }
})

@Injectable()
export class ProjectState {

    constructor (
        private projectService: ProjectService
    ) {}

    @Selector() 
    static getProjectsList(state: ProjectStateModel) {
        return state.projects;
    }

    @Action(GetProjects)
    GetProjects(ctx: StateContext<ProjectStateModel>) {
        return this.projectService.fetchProjects(1)
        .pipe(tap(response => {
            const state = ctx.getState();

            ctx.setState({
                ...state,
                projects: response
            })
        }))
    }
}

