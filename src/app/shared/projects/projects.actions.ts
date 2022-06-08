// CRUD Operations

// Read
export class GetProjects {
    static readonly type = '[Projects] Fetch';
}

// Create 
export class AddProject {
    static readonly type = '[Projects] Add';
    constructor(public payload: any) {}
}

// Update 
export class UpdateProject {
    static readonly type = '[Projects] Update';
    constructor(public payload: any, public id: number, public i: number) {}
}

// Delete 
export class DeleteProject {
    static readonly type = '[Projects] Delete';
    constructor(public id: number) {}
}