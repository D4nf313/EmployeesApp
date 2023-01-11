export interface Data {
    status:  string;
    data:    Employees[];
    message: string;
}

export interface Employees {
    id:              number;
    employee_name:   string;
    employee_salary: number;
    employee_age:    number;
    profile_image?:   string;
}
