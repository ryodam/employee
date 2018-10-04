export class DateHelpers {

    static getAge(date: string) {
        const today = new Date();
        const todayYear = today.getFullYear();
        const todayMonth = today.getMonth();
        const todayDay = today.getDate();

        const dob = new Date(date);
        const dobYear = dob.getFullYear();
        const dobMonth = dob.getMonth();
        const dobDay = dob.getDate();

        let age = todayYear - dobYear;
        const ageMonth = todayMonth - dobMonth;
        const ageDay = todayDay - dobDay;

        if (ageMonth < 0 || (ageMonth == 0 && ageDay < 0)) {
            age = age - 1;
        }

        return age;
    }
}