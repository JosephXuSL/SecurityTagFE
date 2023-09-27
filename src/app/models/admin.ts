export class Admin {
    id: number;
    name: string;
    jobNumber: string;
    employeeStatus: string;
    birthday: Date;
    phoneNumber: string;
    gen: boolean;

    constructor() {
        this.id = 0;
        this.name = '';
        this.jobNumber = '';
        this.employeeStatus = '';
        this.birthday = new Date;
        this.phoneNumber = '';
        this.gen = false;
    }
}
