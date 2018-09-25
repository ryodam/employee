import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Jobtitle } from '../../models/jobtitle.interface';
import { AppState } from '../../app.state';

@Component({
    selector: "employee-job-title",
    templateUrl: "./job-title.component.html",
    styleUrls: ["./job-title.component.scss"]
})
export class JobTitleComponent implements OnInit {

    private areaJobsObservable: Observable<Jobtitle[]>;
    private areaJobs: Jobtitle[];
    selectedAreaJobs: any;

    @Input() employeeForm: FormGroup;

    constructor(private store: Store<AppState>) {
        this.areaJobsObservable = this.store.select('jobtitle');
    }

    ngOnInit() {
        this.areaJobsObservable.subscribe( jobs => {
            this.areaJobs = jobs;
            this.selectedAreaJobs = jobs.find( job => {
                return job.name === this.employeeForm.get('area').value;
            });
        });

        this.employeeForm.get('area').valueChanges.subscribe( value => {
            this.selectedAreaJobs = this.areaJobs.find( job => {
                return job.name === value;
            });
        });
    }
}
