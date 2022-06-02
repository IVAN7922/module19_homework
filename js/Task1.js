function showKeyAndData(f_object) {
    for (let key in f_object) {
        if (f_object.hasOwnProperty(key)) {
            console.log(key + ": " + f_object[key]);
        }
    }
}

const obj1 = {
    name: "Сергей",
    patronymic: "Петрович",
    surname: "Сидоров"
}

const obj2 = Object.create(obj1);
obj2.age = 63;
obj2['growth'] = 167;

showKeyAndData(obj2);