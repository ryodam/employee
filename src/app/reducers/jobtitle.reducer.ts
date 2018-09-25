import { Jobtitle } from '../models/jobtitle.interface';
import * as JobtitleActions from '../actions/jobtitle.actions';

const jobTitles: Jobtitle[] = [
    {
        name: 'kitchenArea',
        value: [
            {
                name: 'Chef',
                value: 'chef'
            },
            {
                name: 'Sous Chef',
                value: 'souschef'
            },
            {
                name: 'Dishwasher',
                value: 'dishwasher'
            },
            {
                name: 'Cook',
                value: 'cook'
            },
        ]
    },
    {
        name: 'serviceArea',
        value: [
            {
                name: 'Manager',
                value: 'manager'
            },
            {
                name: 'Host',
                value: 'host'
            },
            {
                name: 'Tuttofare',
                value: 'tuttofare'
            },
            {
                name: 'Waitress',
                value: 'waitress'
            },
            {
                name: 'Dining room manager',
                value: 'roommanager'
            }
        ]
    }
];

export function jobtitleReducer(state: Jobtitle[] = jobTitles, action: JobtitleActions.Actions) {
    switch(action.type) {
        case JobtitleActions.ADD_JOBTITLE:
            return [...state, action.payload];
        default:
            return state;
    }
}
